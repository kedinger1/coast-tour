/**
 * The 1916 Company - Coast to Coast Tour
 * Events Page JavaScript
 */

(function() {
  'use strict';

  let currentFilter = 'all';

  /**
   * Render event card HTML
   */
  function renderEventCard(event) {
    const badgeClass = event.status === 'upcoming' ? 'event-card__badge--upcoming' : '';
    const badgeText = event.status === 'upcoming' ? 'Upcoming' : 'Completed';

    return `
      <a href="event.html?id=${event.id}" class="event-card">
        <div class="event-card__image">
          <img src="${event.thumbnailImage}" alt="${event.location}" loading="lazy">
          <span class="event-card__badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="event-card__content">
          <h3 class="event-card__location">${event.location}</h3>
          <p class="event-card__dates">${TourUtils.formatDateRange(event.dates)}</p>
          <span class="event-card__link">View Details</span>
        </div>
      </a>
    `;
  }

  /**
   * Render events to the grid
   */
  function renderEvents(filter) {
    const grid = document.getElementById('events-grid');
    const emptyState = document.getElementById('empty-state');

    if (!grid) return;

    let events;
    switch (filter) {
      case 'upcoming':
        events = TourUtils.getUpcomingEvents();
        break;
      case 'completed':
        events = TourUtils.getPastEvents();
        break;
      default:
        events = TourUtils.getAllEvents();
    }

    // Sort events: upcoming first (by date), then completed (most recent first)
    events.sort((a, b) => {
      if (a.status === 'upcoming' && b.status === 'completed') return -1;
      if (a.status === 'completed' && b.status === 'upcoming') return 1;

      const dateA = new Date(a.dates.start);
      const dateB = new Date(b.dates.start);

      if (a.status === 'upcoming') {
        return dateA - dateB; // Upcoming: soonest first
      }
      return dateB - dateA; // Completed: most recent first
    });

    if (events.length === 0) {
      grid.innerHTML = '';
      emptyState.style.display = 'block';
    } else {
      emptyState.style.display = 'none';
      grid.innerHTML = events.map(renderEventCard).join('');
    }
  }

  /**
   * Initialize filter tabs
   */
  function initFilterTabs() {
    const tabs = document.querySelectorAll('.filter-tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Update active state
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // Filter events
        currentFilter = this.dataset.filter;
        renderEvents(currentFilter);
      });
    });
  }

  /**
   * Check URL for filter parameter
   */
  function checkUrlFilter() {
    const filter = window.getUrlParam ? window.getUrlParam('filter') : null;
    if (filter && ['all', 'upcoming', 'completed'].includes(filter)) {
      currentFilter = filter;

      // Update active tab
      const tabs = document.querySelectorAll('.filter-tab');
      tabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === filter);
      });
    }
  }

  /**
   * Initialize events page
   */
  function init() {
    checkUrlFilter();
    initFilterTabs();
    renderEvents(currentFilter);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
