# Juks i påskelabyrinten med playwright

Jeg ble grundig slått i påskelabyrinten, og måtte ty til uredelige triks for å bli best i familien igjen. 

## Kjør programmet

1. `npm install`
2. Hvis du vil logge inn før spillet starter, så må du lage en .env-fil med NRK_USERNAME og NRK_PASSWORD. 
3. `npm start`

## Koden

`spill.js` er et node-program som spiller påskelabyrinten på nrk.no ved hjelp av playwright. Svarene er hardkodet i et objekt i den samme fila. De fant jeg i kildekoden, og gjorde dem om til et objekt med spørsmål som nøkler og svar som verdier. 

Det viser seg at du kan bruke playwright som et bibliotek, ikke bare for å kjøre tester. Installer det med `npm install -D playwright` så er du i gang. 

Hvis du har lagt inn brukernavn og passord, så logger vi deg inn før vi starter.

Programmet åpner spillet på nrk sine sider og trykker på "Start spillet". Etter det kjører den i en evig løkke som leser spørsmålet, finner svaret, og trykker på knappen med svaret. Hvis spørsmålet er det samme som forrige gang, altså at UI-et ikke har kommet til neste spørsmål enda, så prøver vi bare igjen. 

I et lite øyeblikk finnes det to spørsmål på siden samtidig, derfor må vi bruke playwright-funksjonen `last()` for å hente ut det siste elementet i lista.

Noen av svaralternativene er veldig like ("Gran" og "Grane") så det er nødvendig med en regex som sjekker at vi klikker på nøyaktig den samme teksten som svaret. 

Tilslutt er vi i mål på 8 sekunder 🎉

Programmet venter på input i terminalen før det avslutter. 

God påske!
