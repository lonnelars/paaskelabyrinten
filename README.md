# Juks i påskelabyrinten med playwright

Jeg ble grundig slått i påskelabyrinten, og måtte ty til uredelige triks for å bli best i familien igjen. 

## Koden

`spill.js` er et node-program som spille påskelabyrinten på nrk.no ved hjelp av playwright. Svarene er hardkodet i et objekt i den samme fila. De fant jeg i kildekoden, og gjorde dem om til et objekt med spørsmål som nøkler og svar som verdier. 

Det viser seg at du kan bruke playwright som et bibliotek, ikke bare for å kjøre tester. Installer det med `npm install -D playwright` så er du i gang. 

Programmet åpner spillet på nrk sine sider og trykker på "Start spillet". Etter det kjører den i en evig løkke som leser spørsmålet, finner svaret, og trykker på knappen med svaret. Hvis spørsmålet er det samme som forrige gang, altså at UI-et ikke har kommet til neste spørsmål enda, så prøver vi bare igjen. 

Noen av svaralternativene er veldig like ("Gran" og "Grane") så det er nødvendig med en regex som sjekker at vi klikker på nøyaktig den samme teksten som svaret. 

Tilslutt er vi i mål på 8 sekunder 🎉 Programmet blir stående å spinne til det timer ut. Dette kunne vært løst bedre, men nå har jeg rekorden og sier meg fornøyd.

God påske!
