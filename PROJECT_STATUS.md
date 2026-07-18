# Project Alpha – arbeidsstatus

Oppdatert: 19. juli 2026

## Produksjon

- Nettside: https://projectalpha.heimdalconsult.no
- Kildekode: https://github.com/kenheimd/project-alpha
- Produksjon publiseres automatisk fra `main` via Vercel.
- Clerk håndterer innlogging. Produksjonsnøkler ligger i Vercel og lokale testnøkler i `.env.local`; hemmelige nøkler skal aldri lagres i Git.

## Ferdig

- Beskyttet innlogging og privat brukerområde.
- Felles hovedmeny på arbeidsflaten og undersidene.
- Eget menypunkt for rapporter.
- Innstillinger med konto, AI-agenter, varsler, språk og utseende, startside, abonnement, hjelp, juridisk informasjon og utlogging.
- Fast applikasjonsskall uten vanlig sidescrolling.
- Innstillingsmenyen ligger fast til venstre ved hovedmenyen.
- Valgt innhold ruller internt og bruker resten av tilgjengelig skjermbredde.
- Responsivt oppsett for store skjermer, mindre PC-er og smale skjermer.
- Aktivt hovedmenyvalg har fet tekst uten understrek; øvrige valg har normal skriftvekt.
- Visuell profil er oppdatert til varm grafitt, dempet grønn og messing, med roligere kort og navigasjon.
- Egen geometrisk Alpha-logo brukes i merkevare, innlogging og intro.
- Egen Alpha Text-nettfont med normal og fet vekt brukes i grensesnittet; begge vekter deler tegnbredder, har faste sidebearings, tabulære tall, optisk kerning og konsistent ordmellomrom.
- Introen tegner logoens konstruksjonsrutenett, vinkler og målelinjer i roligere tempo før flatene fylles.
- Etter ferdig logo skrives en lokal, klokkeslettstyrt hilsen bokstav for bokstav i arbeidsflatens header med brukerens Clerk-fornavn.
- Logoen zoomer ut av introen uten et separat størrelseshopp, mens et større og mer nedtonet konstruksjonsmerke tegnes og tones inn i bakgrunnen.
- Dato, forklaring, hovedmeny og arbeidskort tones først inn etter at velkomsthilsenen i headeren er ferdig skrevet.
- Logoens diagonaler er lukkede geometriske former med tydelige horisontale endestykker i topp og bunn.
- Arbeidsflaten har en subtil animert bakgrunn som viderefører Alpha-merket.

## Låste designprinsipper

1. Hovedmenyen skal være den samme på alle sider.
2. Aktivt hovedmenyvalg skal være tydelig markert.
3. Undermeny og sideheader skal ligge fast til venstre, tett på hovedmenyen.
4. Hovedfeltet skal være delen som vokser og krymper med skjermbredden.
5. Menyer, rapporter og lange tekster kan rulle internt; bakgrunn og resten av siden skal stå stille.
6. Brukergrensesnittet skal være på norsk.
7. Utviklingen skjer visuelt: én tydelig endring, publisering og kontroll på live-siden.

## Nåværende porteføljedata i prototypen

- AF Gruppen (AFG): 5 aksjer, kjøpskurs 198,80 kr, langsiktig.
- Storebrand (STB): 2 aksjer, kjøpskurs 197,50 kr, trading.
- Oppgitt tradingreserve: ca. 605 kr før kurtasje.

## Neste startpunkt

1. Kontroller den klokkeslettstyrte konstruksjonsintroen, skriveanimasjonen, velkomstpausen og den rene zoomovergangen på live-siden.
2. Kontroller Alpha Text visuelt på live-siden og noter eventuelle enkeltpar som trenger ytterligere optisk justering.
3. Deretter bygges funksjonene bak menyene gradvis; dummydata må erstattes med database og markedsdata.

## Arbeidsform

- Codex gjør endringer, tester, committer og pusher.
- Brukeren skal ikke måtte kopiere kode manuelt.
- Før større oppgaver gis et kort tidsanslag.
- Ikke gjenta ferdig oppsett eller tidligere avklaringer uten behov.
