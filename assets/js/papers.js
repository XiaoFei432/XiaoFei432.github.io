(function () {
  'use strict';

  var DATA_URL = '/data/papers.json';
  var activePaperFilters = new Set();
  var paperData = null;

  // ── Escaping ──
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  // ── Tag label mapping (key → display label from filterTags) ──
  var tagLabelMap = {};

  function getTagLabel(key) {
    return tagLabelMap[key] || key;
  }

  // ── Build the filter toolbar ──
  function renderFilterToolbar(container, filterTags, defaultFilter) {
    container.innerHTML = '';
    var row = document.createElement('div');
    row.className = 'paper-filter-row';
    row.id = 'paper-filter-row';
    row.setAttribute('role', 'group');
    row.setAttribute('aria-label', 'Filter papers by tags');

    filterTags.forEach(function (tag) {
      tagLabelMap[tag.key] = tag.label;
      var btn = document.createElement('button');
      btn.className = 'paper-filter-chip';
      btn.type = 'button';
      btn.dataset.filterTag = tag.key;
      btn.textContent = tag.label;
      if (tag.key === defaultFilter) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.setAttribute('aria-pressed', 'false');
      }
      btn.addEventListener('click', function () {
        onFilterClick(tag.key);
      });
      row.appendChild(btn);
    });

    container.appendChild(row);
  }

  // ── Render a single author name (bold + sup for †) ──
  function renderAuthor(name, highlightAuthor) {
    // strip † for comparison
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
      if (paper.links && paper.links.length) {
        var linksRow = document.createElement('div');
        linksRow.className = 'work-links-row';
        paper.links.forEach(function (link) {
          if (link.url) {
            var a = document.createElement('a');
            a.className = 'paper-link-button';
            a.href = link.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = link.label;
            linksRow.appendChild(a);
          } else {
            var span = document.createElement('span');
            span.className = 'paper-link-button paper-link-button--disabled';
            span.setAttribute('aria-disabled', 'true');
            span.textContent = link.label;
            linksRow.appendChild(span);
          }
        });
        article.appendChild(linksRow);
      }

      container.appendChild(article);
    });
  }

  // ── Filter logic ──
  function updateFilterButtons() {
    var allActive = activePaperFilters.size === 0;
    document.querySelectorAll('[data-filter-tag]').forEach(function (btn) {
      var tag = btn.dataset.filterTag;
      var isActive = tag === 'all' ? allActive : activePaperFilters.has(tag);
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function applyFilters() {
    var items = Array.from(document.querySelectorAll('.paper-list-item[data-paper-tags]'));
    var emptyEl = document.getElementById('paper-filter-empty');
    var activeArr = Array.from(activePaperFilters);
    var visible = 0;

    items.forEach(function (item) {
      var tags = item.dataset.paperTags.split(',').map(function (t) { return t.trim(); }).filter(Boolean);
      var match = activeArr.length === 0 || activeArr.every(function (t) { return tags.indexOf(t) !== -1; });
      item.hidden = !match;
      if (match) visible++;
    });

    if (emptyEl) emptyEl.hidden = visible !== 0;
    updateFilterButtons();
  }

  function onFilterClick(tag) {
    if (tag === 'all') {
      activePaperFilters.clear();
    } else if (activePaperFilters.has(tag)) {
      activePaperFilters.delete(tag);
    } else {
      activePaperFilters.add(tag);
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
        if (defaultFilter) activePaperFilters.add(defaultFilter);

        renderFilterToolbar(toolbar, data.filterTags, defaultFilter);
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
