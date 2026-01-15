/**
 * The 1916 Company - Coast to Coast Tour
 * Main JavaScript - Navigation & Common Functionality
 */

(function() {
  'use strict';

  // Mobile Navigation Toggle
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (toggle && nav) {
      toggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');

        // Toggle aria-expanded
        const isExpanded = nav.classList.contains('active');
        toggle.setAttribute('aria-expanded', isExpanded);
      });

      // Close nav when clicking a link (mobile)
      const navLinks = nav.querySelectorAll('.nav__link');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          if (window.innerWidth <= 768) {
            nav.classList.remove('active');
            toggle.classList.remove('active');
          }
        });
      });

      // Close nav when clicking outside
      document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
          nav.classList.remove('active');
          toggle.classList.remove('active');
        }
      });
    }
  }

  // Set active nav link based on current page
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // Header scroll effect
  function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    if (header) {
      window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
          header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
          header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
      });
    }
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Get URL parameters
  function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Expose utility function globally
  window.getUrlParam = getUrlParam;

  // Fade in elements on scroll
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // Initialize all functionality
  function init() {
    initMobileNav();
    setActiveNavLink();
    initHeaderScroll();
    initSmoothScroll();
    initScrollAnimations();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
