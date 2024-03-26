import { chromium } from "playwright";
import "dotenv/config";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
rl.on("close", () => process.exit(0));

const svar = {
  "Hvilken elv renner under fjellet Mannen?": "Rauma",
  "Misjonæren som grunnla byen kalte den Godthåb. Hva heter byen nå?": "Nuuk",
  "Quasimodo med pukkelen forelsket seg i Esmeralda her": "Paris",
  "Spanias kong Filip 2. ga navn til en øystat i Stillehavet. Hvilken?":
    "Filippinene",
  "Hvor kommer rapgruppa Undergrunn fra?": "Oslo",
  "Else Kåss Furuset skal gifte seg 20. april. Hvor skal det skje?":
    "Oslo Spektrum",
  "Reis til stedet Marcus & Martinus vokste opp": "Trofors",
  "Hopp opp på rullebrettet og spark deg dit sporten startet": "California",
  "Hvor skal årets finale i Eurovision Song Contest være?": "Malmö",
  "En brann skadet 60 bygninger i en norsk bygd for ti år siden. Hvor?":
    "Lærdal",
  "Hvor er visesangeren som er kjent for «Barn av regnbuen» fra?": "Oslo",
  "Reis med båt gjennom Suezkanalen fra Middelhavet. Hvilket hav kommer du til?":
    "Rødehavet",
  "Moskeen Hagia Sofia har vært både kirke og museum. I hvilken by?":
    "Istanbul",
  "Hvor skal Åge Aleksandersen ha sine avslutningskonserter?":
    "Lerkendal stadion",
  "Silicon Valley er kjent for sine teknologiselskaper. Hvor ligger denne dalen?":
    "San Francisco",
  "Hvor startet protestbevegelsen «De gule vestene»?": "Frankrike",
  "Hvor er Fredrik X konge?": "Danmark",
  "Reis til det nedlagte kjernekraftverket Tsjernobyl i dette landet":
    "Ukraina",
  "Ta med flagget og besøk byen hvor årets Sommer-OL arrangeres": "Paris",
  "Hvilket hav er det Panamakanalen forbinder Atlanterhavet med?":
    "Stillehavet",
  "Byen het Leningrad tidligere. Hva heter den nå?": "St. Petersburg",
  "Ta på deg badetøy og ta en dukkert i Den blå lagune. Hvor?": "Island",
  "Ta med deg paraply til stedet som har norsk rekord i nedbør per døgn":
    "Indre Matre i Vestland",
  "Reis til stedet ved Glomma som har oppkalt en gate etter Ole Paus":
    "Elverum",
  "Spis paella i landet som har det som nasjonalrett": "Spania",
  "I hvilket hav ligger Færøyene, Azorene og Madeira?": "Atlanterhavet",
  "Hvor begynte de å lage tekstiler av silke?": "Kina",
  "Reis til byen der sjøforsvarets hovedbase Haakonsvern ligger": "Bergen",
  "Besøk museet Troldhaugen. Hvor drar du?": "Bergen",
  "Slå ut håret i reggaemusikkens hjemland": "Jamaica",
  "I hvilket land lever Barbie i filmen «Barbie»?": "Barbieland",
  "Hvor foregår handlinga i «Young Royals»?": "Sverige",
  "I hvilket av disse landene kan du bli syk av malariamygg?": "Sudan",
  "Hvor blir pizzaen Grandiosa produsert?": "Stranda",
  "Hvor kan du se teater på Den Nationale Scene?": "Bergen",
  "Reis til landet hvor youtuber Mr. Beast kommer fra": "USA",
  "Hvor finner du Thorbjørn Egners plass?": "Oslo",
  "Breakdance er en ny øvelse i OL. Hvor oppsto sporten?": "New York",
  "Hva er Middelhavets største øy?": "Sicilia",
  "Hvor er Abu Dhabi hovedstad?": "De forente arabiske emirater",
  "Ta på deg det svarte beltet og dra dit judo ble oppfunnet": "Japan",
  "Hvor kommer Astrid Lindgrens figur Emil fra?": "Lønneberget",
  "Hvilken by ble kalt Bjørgvin tidligere?": "Bergen",
  "Sett deg i båten og ro til verdens største øy": "Grønland",
  "Reis avgårde til landet som står bak TikTok": "Kina",
  "Reis til den vestligste øygruppa av disse": "Utvær",
  "Reis til byen fotballklubben Apoel FC hører til": "Nikosia",
  "Reis til Norges lengste og dypeste undersjøiske veitunnel":
    "Ryfylketunnelen",
  "Hvor er Nr. 91 Stomperud fra?": "Sørumsand",
  "Hva er hovedstaden i Mosambik?": "Maputo",
  "I hvilken bydel bor Kjell i Olsenbanden?": "Kampen",
  "Verdens første skipstunnel skal gå gjennom denne halvøya": "Stad",
  "Hva heter det farlige havstykket mellom Molde og Kristiansund?":
    "Hustadvika",
  "Hva heter industristrøket som oppstod fra 1500-tallet langs Akerselva?":
    "Sagene",
  "Akerselva er nevnt i Sverres saga. Hva heter den der?": "Frysja",
  "Aotearoa kalles landet av urbefolkningen. Hva kaller vi det?": "New Zealand",
  "Hvilket av disse stedene møtes Dovrebanen og Rørosbanen?": "Støren",
  "I hvilken kommune ligger et innendørs skianlegg som heter Snø?": "Lørenskog",
  "Hvor er Praia hovedstad?": "Kapp Verde",
  "Du bare må kjøpe Espa-boller, men hvilken kommune er du i da?": "Stange",
  "Arif Murakami vant P3-prisen i fjor. Hvor er han født?": "Oslo",
  "Gunnhild Sundli synger i Gåte. Hvor er hun fra?": "Storås",
  "Hvor kommer Emma Steinbakken fra?": "Jessheim",
  "Dra dit youtuber Logan Paul er fra": "Ohio",
  "Squash blir en ny øvelse i OL i 2028. Hvor kommer sporten fra?": "England",
  "I filmen «Fedrelandet» drar Margret Olin med faren til en eventyrlig dal":
    "Oldedalen",
  "Hvilken vassdrag handler det om i «Ellos eatnu – La elva leve»?":
    "Alta-Kautokeinovassdraget",
  "Hvor skal prinsesse Märtha og Durek Verret gifte seg?": "Geiranger",
  "Hvor finner du Skitbyen?": "Trondheim",
  "Hvor er FNs internasjonale domstol?": "Haag",
  "Alois Alzheimer har gitt navn til en sykdom. Hvilket land var han fra?":
    "Tyskland",
  "I krigsfilmen «Konvoi» følger vi et norsk lasteskip i 1941. I hvilket hav?":
    "Nordishavet",
  "Hvilket fotballag er «Den gule horde» supportere for?": "Bodø/Glimt",
  "Bli med Viggo Valle til området han vokste opp": "Lofoten",
  "Hvor har Taylor Swift vokst opp?": "Pennsylvania",
  "Hvor mottok Taylor Swift sin fjerde Grammy for årets album?": "Los Angeles",
  "Hvilket fylke representerer Sandra Borch (Sp) på Stortinget?": "Troms",
  "Besøk byen som er Europas kulturhovedstad i 2024": "Bodø",
  "Dra til Norges største hyttekommune": "Ringsaker",
  "Skyt ballen i mål på Romssa arena, som het noe annet annet inntil i fjor":
    "Alfheim",
  "Hvor er Javier Milei president?": "Argentina",
  "Reis til landet som gjorde likekjønna ekteskap lovlig fra februar i år":
    "Hellas",
  "Hvor holder hjørnesteinsbedriften Nammo til?": "Raufoss",
  "Hvilken norsk øygruppe er kjent for dun fra ærfugl?": "Vegaøyene",
  "Hva er Fastlands-Norges største øy?": "Hinnøya",
  "Rabarbra kom til Norge på 1700-tallet. Hvor kom den egentlig fra?": "Asia",
  "Hva er hovedstaden i Jemen?": "Sana",
  "Gjør som vikingene og reis til Miklagard. Hva heter byen nå?": "Istanbul",
  "Hvilket land har 95 prosent av markedet av krydderet safran?": "Iran",
  "Hvor ble Pablo Picasso født?": "Malaga",
  "Ta på deg solhatt og dra til stedet der rekordvarmen 35,6 grader er målt":
    "Nesbyen",
  "Reis til øya som har halloumi som nasjonalrett": "Kypros",
  "Frites er nasjonalrett i dette landet": "Belgia",
  "Hvor foregår den internasjonale urfolksfestivalen «Riddu Riđđu»?": "Kåfjord",
  "Hva er hovedstaden i Somalia?": "Mogadishu",
  "Hvor er Addis Abeba hovedstad?": "Etiopia",
  "Hvilket land produserer mest merinoull?": "Australia",
  "Hvilken øygruppe er Tórshavn hovedstaden i?": "Færøyene",
  "Ojmjakon og Verkhojansk er verdens kaldeste bebodde steder. Hvilket land?":
    "Russland",
  "Du seiler fra Det karibiske hav gjennom Panamakanalen. Hvilket hav kommer du til?":
    "Stillehavet",
  "Hva heter elva som renner gjennom Bagdad?": "Tigris",
  "Hvilken er størst av de åtte Kanariøyene det bor folk på?": "Tenerife",
  "Petter Dass skal ha gitt navn til en fjellformasjon i Nordland. Hvilken?":
    "De sju søstre",
  "Ta med deg hundespannet og still til start i Femundløpet. Hvor?": "Røros",
  "Hvor snakker de lao?": "Laos",
  "Reis med den transsibirske jernbanen fra Moskva og bli med til siste stopp":
    "Vladivostok",
  "Hvilket land kommer roquefort fra?": "Frankrike",
  "Hvilket land kommer gorgonzola fra?": "Italia",
  "Hvilket land har flest steder på UNESCOs verdensarvliste?": "Italia",
  "Ta på deg skiene og gå Vasaloppet. Hvor kommer du i mål?": "Mora",
  "Du vil besøke Eremitasjen som verdens største museum i areal. Hvor drar du?":
    "St. Petersburg",
  "Hvor finner du bydelen Rinkeby?": "Stockholm",
  "Hvor finner du Norges miljø- og biovitenskapelige universitet?": "Ås",
  "Dra til det sørligste fastlandspunktet i Europa": "Tarifa",
  "Asorene er ei øygruppe i Atlanterhavet. Hvilket land tilhører de?":
    "Portugal",
  "Et område i Trondheim, et slott i Danmark og et tidsskrift deler dette navnet":
    "Sorgenfri",
  "Reis til verdens smaleste sjøpassasje som benyttes for internasjonal skipsfart":
    "Bosporosstredet",
  "Du viser din nye film på festival og får «Gullbjørnen». Hvor?": "Berlin",
  "Hvor kommer avisa «The Guardian» ut?": "London",
  "Bank på døren på hovedkvarteret til Spotify i denne byen": "London",
  "Hvor kan du møte på ville nebbdyr?": "Australia",
  "Hvor starta Bundadsgeriljaen arbeidet for gode fødetilbud i distriktene?":
    "Kristiansund",
  "I hvilket av disse landene lever vill bengaltiger?": "India",
  "Hva er vår sørligste nasjonalpark?": "Raet",
  "Bli med forfatter Tore Renberg på byvandring i hans by": "Stavanger",
  "António Guterres er FNs generalsekretær. Hvilket land er han fra?":
    "Portugal",
  "Hva er Norges nest lengste undersjøiske veitunnel": "Karmøytunnelen",
  "Hva heter slusen i Telemarkskanalen som har fem løftekamre?": "Vrangfoss",
  "Bli med til stedet skiløperen Maiken Caspersen Falla er fra": "Fetsund",
  "Hva heter kanalen som går tvers gjennom Lindesnes-halvøya?":
    "Spangereidkanalen",
  "I hvilken kommune renner elvene Nausta, Gaula, Anga og Jølstra?":
    "Sunnfjord",
  "St. Sunniva rømte til sjøs for å slippe å gifte seg. Hvor drev hun i land?":
    "Selja",
  "Bli med Metteson til hans fødeby": "Moss",
  "Hvor er hun som lager serien «Tegnehanne» fra?": "Kværnaland",
  "Stortingspresident Masud Gharahkhani har vokst opp her": "Skotselv",
  "Jens Haugland sykler for laget Uno-X. Hvor er han fra?": "Rørvik",
  "I filmen «Sulis 1907» samler gruvearbeidere seg til et historisk møte. Hvor?":
    "Langvannsisen",
  "Dra til bygda Lars Mytting har skrevet om i «Søsterklokkene»": "Butangen",
  "I hvilket land foregår «Kvinne, liv, frihet»-protestene?": "Iran",
  "Her er verdens største cruiseskip «Icon of the Seas» bygd?": "Finland",
  "Bli med Jens Kvernmo hjem til dalen han er fra": "Ogndal",
  "Hvor er Kathrine Thorborg Johansen fra serien «Makta» født?": "Nøtterøy",
  "Her kan du stille til start i «Arctic Race of Norway» i august": "Bodø",
  "Nidelven Blå ble kåra til verdens beste ost i 2023. Hvor blir den laga?":
    "Inderøy",
  "Hvor vokste kongen Magnus Lagabøte opp?": "Bergen",
  "Bli med Silje Nordnes til stedet hun er oppvokst": "Hamarøy",
  "Tina Bru sitter på Stortinget for Høyre, men for hvilket fylke?": "Rogaland",
  "Bård Hoksrud sitter på Stortinget for FrP. Hvilket fylke er han innvalgt fra?":
    "Telemark",
  "Kristin Harila har verdenskord i å bestige høye fjell. Hvor er hun fra?":
    "Vestre Jakobselv",
  "Hvor hadde filmen «Ibelin» premiere?": "Tromsø og USA",
  "Taylor Swift skal bare ha konsert i én by i Sørøst-Asia, hvilken?":
    "Singapore",
  "Ta på deg gode sko og bestig Sveriges høyeste fjell": "Kebnekaise",
  "Hva er verdens mest forurensa by?": "Dehli",
  "Hva er den lengste jernbanetunellen i Norge?": "Blixtunellen",
  "Hva er Svalbards største øy?": "Spitzbergen",
  "Hva er Sveriges østligste by?": "Haparanda",
  "Hvor ligger Harbakhula?": "Åfjord",
  "Kongekrabbe finnes langs kysten fordi arten ble satt ut i en fjord. Hvilken?":
    "Murmanskfjorden",
  "Hva er hovedstaden i Ghana?": "Accra",
  "Dra til parken du kan se skulpturen «Livshjulet»": "Vigelandsparken",
  "Hvor foregikk boerkrigene?": "Sør-Afrika",
  "Hvor kan du besøke Trollkyrkja?": "Fræna",
  "Ta et stykke pavlova der kaka er nasjonalrett": "New Zealand",
  "På norrønt het byen Kœnugarðr. Hva heter byen i dag?": "Kyiv",
  "Hvor er Lhasa hovedstad?": "Tibet",
  "Ta på deg gode sko og gå Samaria-ravinen. Hvor er du da?": "Kreta",
  "Hvilket land kommer du til om du drar til Muskat?": "Oman",
  "Hvor må du dra for å oppleve fuglen kivi?": "New Zealand",
  "Hvilken nasjonalpark var Norges første?": "Rondane",
  "Hvor snakker de marathi?": "India",
  "Det første samelandsmøtet var i 1917. Hvor ble det holdt?": "Trondheim",
  "Tordenskiold ble en stor helt etter et sjøslag. Hvor sto slaget?":
    "Dynekilen",
  "I hvilken hovedstad finner du bydelen Vanløse?": "København",
  "Reis dit arkeologen Arthur Evans fant rester av en minoisk sivilisasjon":
    "Kreta",
  "Sett deg i båten og ro til det sørligste punktet i Europa": "Gavdos",
  "Sumerisk er et utdødd språk som ble snakka av sumererne. Hvor levde de?":
    "Mesopotamia",
  "Hvor foregår handlinga i framtidsromanen «Drømmen om et tre» av Maja Lunde?":
    "Svalbard",
  "Slå følge med forfatter Maren Uthaug til stedet hun er født": "Kautokeino",
  "Hvilken fjord ligger øya Ombo i?": "Boknafjorden",
  "Hvor kan du gå den fryktede fjellveien Vårstigen?": "Oppdal",
};

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  if (process.env.NRK_USERNAME && process.env.NRK_PASSWORD) {
    await page.goto("https://www.nrk.no/");
    await page.getByRole("link", { name: "Logg på", exact: true }).click();
    await page.locator("#btnStartLogin").click();
    await page.fill("#loginUsername", process.env.NRK_USERNAME);
    await page.fill("#loginPassword", process.env.NRK_PASSWORD);
    await page.locator("#login-button").click();
    await page.waitForURL("https://www.nrk.no/");
    await page.context().storageState();
  }

  await page.goto(
    "https://www.nrk.no/trondelag/xl/paskelabyrinten-2024_-test-deg-i-geografi-spill-med-nrks-paske-quiz-1.13969203"
  );

  await page.getByText("Start spillet").click();
  const previousQuestions = [];
  while (previousQuestions.length < 8) {
    const q = await page.locator("p.question-text").last().textContent();
    if (q === previousQuestions[previousQuestions.length - 1]) {
      continue;
    }
    const a = svar[q];
    console.table({ q, a });
    await page.getByText(new RegExp("^" + a + "$")).click();
    previousQuestions.push(q);
  }
  await rl.question("\n\nPress any key to exit...");
  rl.close();
})();
