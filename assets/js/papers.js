(function () {
  'use strict';

  var DATA_URL = '/data/papers.json';
  var paperData = null;

  // Active filter state
  var activeAuthorFilter = '';   // '' means "all"
  var activeTopicFilter  = '';   // '' means no topic filter

  // ── Escaping ──
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  // ── Build the filter toolbar (two groups) ──
  function renderFilterToolbar(container, authorFilters, topicFilters, defaultFilter) {
    container.innerHTML = '';

    // --- Author filter group ---
    var authorGroup = document.createElement('div');
    authorGroup.className = 'filter-group filter-group--author';
    authorGroup.setAttribute('role', 'group');
    authorGroup.setAttribute('aria-label', 'Filter by author role');

    authorFilters.forEach(function (tag) {
      var btn = document.createElement('button');
      btn.className = 'author-toggle-btn';
      btn.type = 'button';
      btn.dataset.authorFilter = tag.key;
      btn.textContent = tag.label;

      var isDefault = (tag.key === defaultFilter) || (tag.key === 'all' && !defaultFilter);
      if (isDefault) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        if (tag.key !== 'all') activeAuthorFilter = tag.key;
      } else {
        btn.setAttribute('aria-pressed', 'false');
      }

      btn.addEventListener('click', function () {
        onAuthorFilterClick(tag.key);
      });
      authorGroup.appendChild(btn);
    });
    container.appendChild(authorGroup);

    // --- Separator ---
    var sep = document.createElement('div');
    sep.className = 'filter-separator';
    container.appendChild(sep);

    // --- Topic filter group ---
    var topicGroup = document.createElement('div');
    topicGroup.className = 'filter-group filter-group--topic';
    topicGroup.setAttribute('role', 'group');
    topicGroup.setAttribute('aria-label', 'Filter by research topic');

    // "All Topics" chip
    var allBtn = document.createElement('button');
    allBtn.className = 'paper-filter-chip is-active';
    allBtn.type = 'button';
    allBtn.dataset.topicFilter = 'all';
    allBtn.textContent = 'All Topics';
    allBtn.setAttribute('aria-pressed', 'true');
    allBtn.addEventListener('click', function () {
      onTopicFilterClick('all');
    });
    topicGroup.appendChild(allBtn);

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
      topicGroup.appendChild(btn);
    });
    container.appendChild(topicGroup);
  }

  // ── Render a single author name (bold + sup for †) ──
  function renderAuthor(name, highlightAuthor) {
    var baseName = name.replace(/†/g, '').trim();
    var hasDagger = name.indexOf('†') !== -1;
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
    return html;
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
      venue.textContent = paper.venue;
      article.appendChild(venue);

      // Links row
      var validLinks = (paper.links || []).filter(function (link) { return link.url; });
      if (validLinks.length) {
        var linksRow = document.createElement('div');
        linksRow.className = 'work-links-row';
        validLinks.forEach(function (link) {
          var a = document.createElement('a');
          a.className = 'paper-link-button';
          a.href = link.url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.textContent = link.label;
          linksRow.appendChild(a);
        });
        article.appendChild(linksRow);
      }

      container.appendChild(article);
    });
  }

  // ── Update button active states ──
  function updateFilterButtons() {
    // Author buttons
    document.querySelectorAll('[data-author-filter]').forEach(function (btn) {
      var key = btn.dataset.authorFilter;
      var isActive = (key === 'all' && !activeAuthorFilter) || key === activeAuthorFilter;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
    // Topic buttons
    document.querySelectorAll('[data-topic-filter]').forEach(function (btn) {
      var key = btn.dataset.topicFilter;
      var isActive = (key === 'all' && !activeTopicFilter) || key === activeTopicFilter;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  // ── Apply combined filters ──
  function applyFilters() {
    var items = Array.from(document.querySelectorAll('.paper-list-item[data-paper-tags]'));
    var emptyEl = document.getElementById('paper-filter-empty');
    var visible = 0;

    items.forEach(function (item) {
      var tags = item.dataset.paperTags.split(',').map(function (t) { return t.trim(); }).filter(Boolean);

      // Author filter: if set, paper must have that tag
      var authorMatch = !activeAuthorFilter || tags.indexOf(activeAuthorFilter) !== -1;
      // Topic filter: if set, paper must have that tag
      var topicMatch  = !activeTopicFilter  || tags.indexOf(activeTopicFilter) !== -1;

      var match = authorMatch && topicMatch;
      item.hidden = !match;
      if (match) visible++;
    });

    if (emptyEl) emptyEl.hidden = visible !== 0;
    updateFilterButtons();
  }

  // ── Author filter click (radio / binary toggle) ──
  function onAuthorFilterClick(key) {
    if (key === 'all') {
      activeAuthorFilter = '';
    } else {
      activeAuthorFilter = key;
    }
    applyFilters();
  }

  // ── Topic filter click (single-select, toggle off to show all) ──
  function onTopicFilterClick(key) {
    if (key === 'all' || activeTopicFilter === key) {
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
