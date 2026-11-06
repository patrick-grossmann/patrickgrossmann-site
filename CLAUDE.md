# patrickgrossmann.de – Arbeitsregeln

Persönliche Website von Patrick Grossmann: Coaching & Mentoring und Verteiler zur Unternehmensberatung (structuralscale.com).

## Ablauf
- Dieses Repository ist die einzige Quelle der Website (seit 22.10.2026, vorher WordPress bei SiteGround).
- Statische Seite ohne Build: alles, was ausgeliefert wird, liegt in `public/`. Cloudflare Pages veröffentlicht `public/` direkt.
- Änderungen: Branch anlegen, Commit, Push. Cloudflare baut jeden Branch als Vorschau-Link; Patrick gibt frei, dann nach `main` mergen = live.
- Lokal testen: `npx wrangler pages dev public` (prüft auch `_redirects` und `_headers`).

## Inhalte
- Startseite `public/index.html`: nur zwei Bereiche, Coaching & Mentoring und Unternehmensberatung (→ structuralscale.com). Kein Running, kein Happiness Playbook auf der Startseite.
- `public/coaching/`: Coaching & Mentoring (5 Schritte: Inner Clarity Review, Foundation, Blueprint, Integration, Refresh), Erstgespräch über Google-Terminbuchung `https://calendar.app.google/9hjaibtnn7CDYHsw7` (öffnet als Pop-up, `public/assets/booking.js`).
- `public/running/`: Lauftreff für Väter. Muss dauerhaft unter /running/ erreichbar bleiben (QR-Code auf Flyern), wird nicht verlinkt und ist `noindex`. Niemals umleiten.
- Englische Version unter `public/en/` (Startseite) und `public/en/coaching/`. Sprachumschalter DE | EN in der Kopfzeile links neben dem Buchungs-Button; hreflang in beiden Sprachen pflegen. Englisch: eigene Claims („Time to update who you are.“), keine Wort-für-Wort-Übersetzung. Google-Bewertungen auf Englisch nur als gekennzeichnete Übersetzung, im Pop-up im deutschen Original.
- Kopfzeile und Buttons 1:1 wie structuralscale.com: Logo 44×38, Menü 15px mit 32px Abstand, „DE | EN“ 14px, Mint-Button „Erstgespräch buchen“ (Roboto Condensed, Großbuchstaben); mobil (bis 900px) Burger-Menü. Buttons: `.btn` (dunkel, Kreis-Icon, Trennlinie, Haupt- und Unterzeile), `.btn.ghost` (weiß mit Rahmen), `.btn-mint` (großer Mint-Button im dunklen Abschluss). Buchungs-Buttons mit Kalender-Icon, alle anderen mit Pfeil.
- Gemeinsames CSS in `public/assets/site.css`. CSS und JS werden mit `?v=…` eingebunden und lange gecacht: Nach jeder Änderung an `public/assets/` die Versionsnummer in allen HTML-Seiten hochzählen, sonst sehen Besucher alte Styles. Weiterleitungen alter WordPress-Adressen in `public/_redirects`.
- Impressum und Datenschutz liegen auf structuralscale.com und werden nur verlinkt.
- Kontakt: hello@patrickgrossmann.de.

## Texte
- Name „Patrick Grossmann“ mit ss (international); „ß“ nur im Impressum und auf offiziellen Dokumenten. Du-Form klein, keine Gedankenstriche (—/–) im Fließtext, „Mitarbeiter:innen“, „Founder“ ungegendert.
- Klammer: „Ich helfe Menschen und Unternehmen, sich zu aktualisieren.“ Coaching-Claim: „Zeit für ein Update.“ Beratungs-Claim (structuralscale.com): „Strukturen, die mitwachsen.“
- Coaching-Preise (Kleinunternehmer, ohne USt.): Foundation 549 €, Blueprint 399 €, Integration 749 €, Refresh 189 €/Monat, Einzelsession 199 €. Nur die Foundation steht sichtbar im Ablauf, alle Preise in der FAQ.
- Kundenstimmen Coaching: Google-Bewertungen als Text auf der Seite und im Pop-up (`public/assets/reviews.js`), Namen abgekürzt. Niemals auf den Google-Maps-Eintrag verlinken (Privatadresse). Neue Bewertungen von Hand nachtragen.
- Ton: direkt, klar, auf Augenhöhe; keine Wörter wie „Growth Hacking“, „10x“, „Hacks“, „Game Changer“.
