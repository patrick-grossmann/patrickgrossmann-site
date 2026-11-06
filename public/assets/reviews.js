// Google-Bewertungen als Pop-up (kein Link auf Google Maps, dort steht die Privatadresse).
(function () {
  var dlg = document.getElementById('reviews-dialog');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  document.querySelectorAll('[data-reviews]').forEach(function (b) {
    b.addEventListener('click', function () { dlg.showModal(); dlg.querySelector('.reviews-list').scrollTop = 0; });
  });
  dlg.querySelector('.dialog-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
})();
