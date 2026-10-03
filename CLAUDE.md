# TecnoSmart App

App di TecnoSmart Srl ("RUN Giornaliero e Report Dettagliato"), usata dai negozi.

## Com'è fatta
- Questo repo e' solo il **contenitore** pubblicato su GitHub Pages: `index.html` mostra in un iframe
  l'app vera, che sta su **Google Apps Script** (URL dentro `index.html`).
- `manifest.json` + `sw.js` + `icons/`: installazione come app sul telefono.
- Notifiche push con **OneSignal**; il tag `negozio` indica il negozio che ha fatto login.
- L'interfaccia che gli utenti vedono NON e' in questo repo: per cambiarla serve il codice di Apps Script.

## Come lavorare con me
- L'utente non e' un programmatore: spiegare in italiano semplice, passi brevi, niente gergo.
- Obiettivo: rendere l'app molto piu' professionale, come un sito/app vero.
- Prima di cambiare qualcosa di grosso, dire cosa si cambia e perche'.
- Non fare pull request ne' merge senza che lo chieda.
- Il progetto Jarvis e' separato (repo `tecnsomart-app`): qui non c'entra.

## Plugin
Configurati in `.claude/settings.json`: `document-skills` (Word, Excel, PDF, PowerPoint)
e `frontend-design` (grafica).
