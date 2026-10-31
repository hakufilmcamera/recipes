// The inner pages' bar turns to light glass with dark type once the dark
// masthead has scrolled out from under it (light appearance only); the
// homepage does the same per section in its own script.
(function () {
  var nav = document.querySelector('.nav'), dark = matchMedia('(prefers-color-scheme: dark)'), queued = false;
  if (!nav) return;
  function check() {
    queued = false;
    var head = document.querySelector('.masthead');
    var below = !head || head.getBoundingClientRect().bottom < nav.getBoundingClientRect().bottom - 8;
    nav.classList.toggle('over-light', below && !dark.matches);
  }
  addEventListener('scroll', function () { if (!queued) { queued = true; requestAnimationFrame(check); } }, { passive: true });
  addEventListener('resize', check);
  new MutationObserver(check).observe(document.body, { childList: true, subtree: true });
  check();
})();
