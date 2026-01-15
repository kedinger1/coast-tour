/**
 * The 1916 Company - Coast to Coast Tour
 * Gallery & Lightbox JavaScript
 */

(function() {
  'use strict';

  let lightbox = null;
  let currentImages = [];
  let currentIndex = 0;

  /**
   * Transform image URL for optimized thumbnail display
   * Adds Cloudinary transformations for better quality thumbnails
   */
  function getThumbnailUrl(url, width = 600, height = 450) {
    if (!url) return url;

    // Handle Cloudinary URLs
    if (url.includes('res.cloudinary.com')) {
      // Insert transformation after /upload/
      return url.replace(
        '/upload/',
        `/upload/q_auto:best,f_auto,w_${width},h_${height},c_fill,g_auto/`
      );
    }

    // Handle imgix URLs
    if (url.includes('.imgix.net')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}w=${width}&h=${height}&fit=crop&q=80&auto=format`;
    }

    return url;
  }

  /**
   * Get full resolution URL for lightbox
   * Adds quality optimization without resizing
   */
  function getFullResUrl(url) {
    if (!url) return url;

    // Handle Cloudinary URLs - optimize quality without resizing
    if (url.includes('res.cloudinary.com')) {
      return url.replace(
        '/upload/',
        '/upload/q_auto:best,f_auto/'
      );
    }

    // Handle imgix URLs
    if (url.includes('.imgix.net')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}q=90&auto=format`;
    }

    return url;
  }

  /**
   * Create lightbox HTML structure
   */
  function createLightbox() {
    if (document.getElementById('lightbox')) return;

    const lightboxHTML = `
      <div class="lightbox" id="lightbox">
        <button class="lightbox__close" aria-label="Close">&times;</button>
        <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous">&larr;</button>
        <button class="lightbox__nav lightbox__nav--next" aria-label="Next">&rarr;</button>
        <div class="lightbox__content">
          <img class="lightbox__image" src="" alt="">
          <div class="lightbox__caption">
            <span class="lightbox__caption-text"></span>
            <span class="lightbox__caption-event"></span>
          </div>
        </div>
        <div class="lightbox__counter"></div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    lightbox = document.getElementById('lightbox');

    // Event listeners
    lightbox.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox__nav--prev').addEventListener('click', showPrev);
    lightbox.querySelector('.lightbox__nav--next').addEventListener('click', showNext);

    // Close on background click
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('active')) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          showPrev();
          break;
        case 'ArrowRight':
          showNext();
          break;
      }
    });
  }

  /**
   * Open lightbox with specific image
   */
  function openLightbox(index) {
    if (!lightbox) createLightbox();

    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Close lightbox
   */
  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  /**
   * Show previous image
   */
  function showPrev() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightboxImage();
  }

  /**
   * Show next image
   */
  function showNext() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightboxImage();
  }

  /**
   * Update lightbox with current image
   */
  function updateLightboxImage() {
    if (!lightbox || currentImages.length === 0) return;

    const image = currentImages[currentIndex];
    const img = lightbox.querySelector('.lightbox__image');
    const captionText = lightbox.querySelector('.lightbox__caption-text');
    const captionEvent = lightbox.querySelector('.lightbox__caption-event');
    const counter = lightbox.querySelector('.lightbox__counter');

    // Fade out
    img.style.opacity = '0';

    setTimeout(() => {
      img.src = getFullResUrl(image.url);
      img.alt = image.caption || 'Gallery image';
      captionText.textContent = image.caption || '';
      captionEvent.textContent = image.eventLocation ? `${image.eventLocation} Event` : '';
      counter.textContent = `${currentIndex + 1} / ${currentImages.length}`;

      // Fade in
      img.style.opacity = '1';
    }, 150);
  }

  /**
   * Initialize gallery lightbox with images
   * @param {Array} images - Array of image objects with url, caption, eventLocation
   */
  window.initGalleryLightbox = function(images) {
    currentImages = images;
    createLightbox();

    // Bind click events to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', function() {
        const itemIndex = parseInt(this.dataset.index, 10);
        openLightbox(isNaN(itemIndex) ? index : itemIndex);
      });
    });
  };

  /**
   * Initialize main gallery page
   */
  function initMainGallery() {
    const galleryGrid = document.getElementById('main-gallery');
    const filterButtons = document.querySelectorAll('.gallery-filter__btn');

    if (!galleryGrid) return;

    let allImages = TourUtils.getAllGalleryImages();
    currentImages = allImages;

    function renderGallery(images) {
      currentImages = images;

      if (images.length === 0) {
        galleryGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: var(--space-xl) 0;">
            <h3>No photos available</h3>
            <p style="color: var(--color-text-light);">Check back after upcoming events.</p>
          </div>
        `;
        return;
      }

      galleryGrid.innerHTML = images.map((img, index) => `
        <div class="gallery-item" data-index="${index}">
          <img src="${getThumbnailUrl(img.url)}" alt="${img.caption || 'Event photo'}" loading="lazy">
          <span class="gallery-item__event">${img.eventLocation}</span>
          ${img.caption ? `<div class="gallery-item__caption">${img.caption}</div>` : ''}
        </div>
      `).join('');

      // Re-bind click events
      const items = galleryGrid.querySelectorAll('.gallery-item');
      items.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
      });
    }

    // Initial render
    renderGallery(allImages);
    createLightbox();

    // Filter functionality
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.event;

        if (filter === 'all') {
          renderGallery(allImages);
        } else {
          const filtered = allImages.filter(img => img.eventId === filter);
          renderGallery(filtered);
        }
      });
    });
  }

  // Auto-initialize if on gallery page
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMainGallery);
  } else {
    initMainGallery();
  }
})();
