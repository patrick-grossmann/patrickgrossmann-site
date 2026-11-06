// Erstgespräch: öffnet die Google-Terminbuchung als Pop-up. Ohne JavaScript öffnet der Link normal im neuen Tab.
(function () {
  var EMBED = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1PBdqnaSLjBTAie2TmqvCkAiI71FhoDGc5wZ5mOzqZz0KuW2coYLK2PFV_ny9uvFKgqa4UpuGR?gv=true';
  var dlg = document.getElementById('booking-dialog');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var frame = dlg.querySelector('iframe');

  document.querySelectorAll('[data-booking]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (frame.getAttribute('src') !== EMBED) frame.setAttribute('src', EMBED);
      dlg.showModal();
    });
  });

  dlg.querySelector('.dialog-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
})();
