# patrickgrossmann.de – Arbeitsregeln

Persönliche Website von Patrick Grossmann: Executive Coaching (Coaching & Mentoring) und Verteiler zur Unternehmensberatung (structuralscale.com).

## Ablauf
- Dieses Repository ist die einzige Quelle der Website (seit 22.10.2026, vorher WordPress bei SiteGround).
- Statische Seite ohne Build: alles, was ausgeliefert wird, liegt in `public/`. Cloudflare Pages veröffentlicht `public/` direkt.
- Änderungen: Branch anlegen, Commit, Push. Cloudflare baut jeden Branch als Vorschau-Link; Patrick gibt frei, dann nach `main` mergen = live.
- Lokal testen: `npx wrangler pages dev public` (prüft auch `_redirects` und `_headers`).

## Inhalte
- Startseite `public/index.html`: nur zwei Bereiche, Coaching & Mentoring und Unternehmensberatung (→ structuralscale.com). Kein Running, kein Happiness Playbook auf der Startseite.
- `public/coaching/`: Executive Coaching, Calendly-Link `https://calendly.com/patrickgrossmann/kennenlerngespraech`.
- `public/running/`: Lauftreff für Väter. Muss dauerhaft unter /running/ erreichbar bleiben (QR-Code auf Flyern), wird nicht verlinkt und ist `noindex`. Niemals umleiten.
- Gemeinsames CSS in `public/assets/site.css`. Weiterleitungen alter WordPress-Adressen in `public/_redirects`.
- Impressum und Datenschutz liegen auf structuralscale.com und werden nur verlinkt.
- Kontakt: hello@patrickgrossmann.de.

## Texte
- Name „Patrick Grossmann“ mit ss (international); „ß“ nur im Impressum und auf offiziellen Dokumenten. Du-Form klein, keine Gedankenstriche (—/–) im Fließtext, „Mitarbeiter:innen“, „Founder“ ungegendert.
- Claim: „Growth needs direction“.
- Ton: direkt, klar, auf Augenhöhe; keine Wörter wie „Growth Hacking“, „10x“, „Hacks“, „Game Changer“.
