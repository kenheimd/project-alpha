# Project Alpha – arbeidsstatus

Oppdatert: 18. juli 2026

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

1. Kontroller siste menystil og innstillingssiden på live-siden.
2. Juster responsiv struktur videre ut fra visuell vurdering.
3. Deretter bygges funksjonene bak menyene gradvis; dummydata må erstattes med database og markedsdata.

## Arbeidsform

- Codex gjør endringer, tester, committer og pusher.
- Brukeren skal ikke måtte kopiere kode manuelt.
- Før større oppgaver gis et kort tidsanslag.
- Ikke gjenta ferdig oppsett eller tidligere avklaringer uten behov.
