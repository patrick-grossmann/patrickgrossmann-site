// Desktop: Hero-Buttons öffnen den passenden Kasten als Pop-up. Mobil bleibt der Sprunglink.
(function () {
  var mq = window.matchMedia('(min-width: 821px)');
  var dlg = document.getElementById('hero-dialog');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var slot = dlg.querySelector('.dialog-body');

  document.querySelectorAll('[data-dialog-card]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (!mq.matches) return;
      var card = document.getElementById(btn.getAttribute('data-dialog-card'));
      if (!card) return;
      e.preventDefault();
      var copy = card.cloneNode(true);
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(function (el) { el.removeAttribute('id'); });
      copy.removeAttribute('aria-labelledby');
      var title = copy.querySelector('h3');
      if (title) { title.id = 'hero-dialog-title'; }
      slot.replaceChildren(copy);
      dlg.showModal();
    });
  });

  dlg.querySelector('.dialog-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', function () { slot.replaceChildren(); });
})();
