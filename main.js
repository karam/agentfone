/* ============================================================
   AgentFone — Scroll animations & interactions
   ============================================================ */

(function () {
  'use strict';

  // -- Fade-in on scroll via IntersectionObserver --
  var fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // -- Close mobile nav on link click --
  var navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // -- Hide video placeholder if iframe loads --
  var videoWrapper = document.querySelector('.video-wrapper');
  if (videoWrapper) {
    var iframe = videoWrapper.querySelector('iframe');
    var placeholder = videoWrapper.querySelector('.video-placeholder');
    if (iframe && placeholder) {
      // If the iframe src is empty or has no video ID, show placeholder
      var src = iframe.getAttribute('src') || '';
      if (src.indexOf('embed/') !== -1) {
        var videoId = src.split('embed/')[1];
        if (videoId) {
          videoId = videoId.split('?')[0];
        }
        if (!videoId || videoId === '') {
          iframe.style.display = 'none';
          placeholder.style.display = 'flex';
        } else {
          placeholder.style.display = 'none';
        }
      }
    }
  }
})();
