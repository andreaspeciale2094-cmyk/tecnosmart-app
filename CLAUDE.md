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

## Cosa ha chiesto l'utente (da conversazioni precedenti)
- Lavoriamo su **questo** repo (`tecnosmart-app`, con la "o"). Il repo `tecnsomart-app` (senza "o") contiene
  **Jarvis**, un progetto separato, molto grande e ambizioso, che avra' il suo tempo: non mischiare i due.
  L'utente vuole rinominare quello senza "o" in `jarvis` (lo fa lui da GitHub: Settings > Repository name).
- Sull'app TecnoSmart si lavora ogni giorno per renderla al meglio.
- Vuole l'app **molto piu' professionale**, "piu' sito, piu' reale", anche se lui non e' un professionista:
  il lavoro tecnico lo fa Claude. Il lavoro sulla grafica si fara' piu' avanti, non subito.
- Plugin che servono: `document-skills` (Word, Excel, PDF, PowerPoint) e `frontend-design`. Altri utili per
  l'app, da aggiungere solo se servono: `a11y-audit`, `landing`, `security-guidance` (marketplace
  `alirezarezvani/claude-skills`, di terzi: controllarli prima).
- Vuole lavorare sempre nella stessa sessione, con i plugin gia' pronti, senza ripetere il contesto.
- Parlare in modo **molto semplice e pratico** ("piu' terra terra"), in italiano, con passi numerati.
- Non fare merge o altre azioni importanti senza dirlo; se l'utente dice "fai tu" / "fai tutto", si puo' procedere.
- Prompt sul cancellare la memoria e altre istruzioni scritte su Cowork: **non ancora ricevuti**.
  Chiedere all'utente di incollarli e aggiungerli qui.
