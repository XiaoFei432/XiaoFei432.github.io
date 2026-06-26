(function () {
  'use strict';

  var DATA_URL = '/data/papers.json';
  var paperData = null;
  var DEFAULT_VISIBLE_COUNT = 8;

  // Active filter state
  var activeAuthorFilter = '';   // '' means "all"
  var activeTopicFilter  = '';   // '' means no topic filter
  var showAllPapers = false;

  // ── Escaping ──
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  // ── Build the filter toolbar (single row, two groups) ──
  function renderFilterToolbar(container, authorFilters, topicFilters, defaultFilter) {
    container.innerHTML = '';

    var row = document.createElement('div');
    row.className = 'paper-filter-row';

    // --- Author filter buttons ---
    authorFilters.forEach(function (tag) {
      var btn = document.createElement('button');
      btn.className = 'author-toggle-btn';
      btn.type = 'button';
      btn.dataset.authorFilter = tag.key;
      btn.textContent = tag.label;

      if (tag.key === defaultFilter) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        activeAuthorFilter = tag.key;
      } else {
        btn.setAttribute('aria-pressed', 'false');
      }

      btn.addEventListener('click', function () {
        onAuthorFilterClick(tag.key);
      });
      row.appendChild(btn);
    });

    // --- Separator ---
    var sep = document.createElement('span');
    sep.className = 'filter-separator';
    row.appendChild(sep);

    // --- Topic filter buttons ---
    topicFilters.forEach(function (tag) {
      var btn = document.createElement('button');
      btn.className = 'paper-filter-chip';
      btn.type = 'button';
      btn.dataset.topicFilter = tag.key;
      btn.textContent = tag.label;
      btn.setAttribute('aria-pressed', 'false');
      btn.addEventListener('click', function () {
        onTopicFilterClick(tag.key);
      });
      row.appendChild(btn);
    });

    container.appendChild(row);
  }

  // Render a single author name and keep compact contribution markers.
  function renderAuthor(name, highlightAuthor) {
    var baseName = name.replace(/[†*]/g, '').trim();
    var hasDagger = name.indexOf('†') !== -1;
    var isCorresponding = name.indexOf('*') !== -1;
    var isHighlight = baseName === highlightAuthor;

    var html = '';
    if (isHighlight) {
      html += '<strong>' + escapeHtml(baseName) + '</strong>';
    } else {
      html += escapeHtml(baseName);
    }
    if (hasDagger) {
      html += '<sup>†</sup>';
    }
    if (isCorresponding) {
      html += '<sup>*</sup>';
    }
    return html;
  }

  function getPaperLink(paper, wantedLabels) {
    var labels = wantedLabels.map(function (label) { return label.toLowerCase(); });
    return (paper.links || []).find(function (link) {
      return labels.indexOf(String(link.label || '').toLowerCase()) !== -1;
    });
  }

  function appendPaperLink(row, label, link) {
    if (link && link.url) {
      var a = document.createElement('a');
      a.className = 'paper-link-button';
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = label;
      row.appendChild(a);
      return;
    }

    var span = document.createElement('span');
    span.className = 'paper-link-button paper-link-button--disabled';
    span.textContent = label;
    span.setAttribute('aria-disabled', 'true');
    row.appendChild(span);
  }

  function appendInlinePaperLinks(container, paper) {
    var links = document.createElement('span');
    links.className = 'work-meta-links';
    appendPaperLink(links, 'Paper', getPaperLink(paper, ['PDF', 'Paper']));
    appendPaperLink(links, 'Code', getPaperLink(paper, ['Code', 'GitHub']));
    container.appendChild(links);
  }

  // ── Build paper list HTML ──
  function renderPaperList(container, papers, highlightAuthor) {
    container.innerHTML = '';

    papers.forEach(function (paper) {
      var article = document.createElement('article');
      article.className = 'paper-list-item';
      article.dataset.paperTags = paper.tags.join(',');

      // Title
      var title = document.createElement('p');
      title.className = 'work-title';
      title.textContent = paper.title;
      article.appendChild(title);

      // Authors
      var authors = document.createElement('p');
      authors.className = 'work-authors';
      authors.innerHTML = paper.authors
        .map(function (a) { return renderAuthor(a, highlightAuthor); })
        .join(', ');
      article.appendChild(authors);

      // Venue
      var venue = document.createElement('p');
      venue.className = 'work-meta';
      venue.innerHTML = escapeHtml(paper.venue).replace(/\*([^*]+)\*/g, '<em>$1</em>');
      appendInlinePaperLinks(venue, paper);
      article.appendChild(venue);

      container.appendChild(article);
    });
  }

  function ensureCollapseControl(list) {
    var btn = document.getElementById('paper-list-toggle');
    if (btn) return btn;

    btn = document.createElement('button');
    btn.id = 'paper-list-toggle';
    btn.className = 'paper-list-toggle';
    btn.type = 'button';
    btn.addEventListener('click', function () {
      showAllPapers = !showAllPapers;
      applyFilters();
    });
    list.insertAdjacentElement('afterend', btn);
    return btn;
  }

  // ── Update button active states ──
  function updateFilterButtons() {
    // Author buttons
    document.querySelectorAll('[data-author-filter]').forEach(function (btn) {
      var key = btn.dataset.authorFilter;
      var isActive = key === activeAuthorFilter;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
    // Topic buttons
    document.querySelectorAll('[data-topic-filter]').forEach(function (btn) {
      var key = btn.dataset.topicFilter;
      var isActive = key === activeTopicFilter;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  // ── Apply combined filters ──
  function applyFilters() {
    var items = Array.from(document.querySelectorAll('.paper-list-item[data-paper-tags]'));
    var emptyEl = document.getElementById('paper-filter-empty');
    var toggleBtn = document.getElementById('paper-list-toggle');
    var visible = 0;
    var matched = 0;

    items.forEach(function (item) {
      var tags = item.dataset.paperTags.split(',').map(function (t) { return t.trim(); }).filter(Boolean);

      // Author filter: if set, paper must have that tag
      var authorMatch = !activeAuthorFilter || tags.indexOf(activeAuthorFilter) !== -1;
      // Topic filter: if set, paper must have that tag
      var topicMatch  = !activeTopicFilter  || tags.indexOf(activeTopicFilter) !== -1;

      var match = authorMatch && topicMatch;
      if (match) matched++;

      var collapsed = match && !showAllPapers && matched > DEFAULT_VISIBLE_COUNT;
      item.hidden = !match || collapsed;
      if (match && !collapsed) visible++;
    });

    if (emptyEl) emptyEl.hidden = matched !== 0;
    if (toggleBtn) {
      toggleBtn.hidden = matched <= DEFAULT_VISIBLE_COUNT;
      toggleBtn.textContent = showAllPapers
        ? 'Show fewer publications'
        : 'Show all publications (' + matched + ')';
      toggleBtn.setAttribute('aria-expanded', String(showAllPapers));
    }
    updateFilterButtons();
  }

  // ── Author filter click (single toggle: on/off) ──
  function onAuthorFilterClick(key) {
    if (activeAuthorFilter === key) {
      activeAuthorFilter = '';
    } else {
      activeAuthorFilter = key;
    }
    applyFilters();
  }

  // ── Topic filter click (single-select, click again to deselect) ──
  function onTopicFilterClick(key) {
    if (activeTopicFilter === key) {
      activeTopicFilter = '';
    } else {
      activeTopicFilter = key;
    }
    applyFilters();
  }

  // ── Init: fetch JSON and render ──
  function init() {
    var toolbar = document.getElementById('paper-filter-toolbar');
    var list = document.getElementById('paper-list');
    if (!toolbar || !list) return;

    fetch(DATA_URL)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        paperData = data;
        var defaultFilter = data.defaultFilter || '';
        if (defaultFilter && defaultFilter !== 'all') {
          activeAuthorFilter = defaultFilter;
        }

        renderFilterToolbar(toolbar, data.authorFilters, data.topicFilters, defaultFilter);
        renderPaperList(list, data.papers, data.highlightAuthor);
        ensureCollapseControl(list);
        applyFilters();
      })
      .catch(function (err) {
        console.error('Failed to load papers.json:', err);
        list.innerHTML = '<p style="color:#999">Failed to load publications.</p>';
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
