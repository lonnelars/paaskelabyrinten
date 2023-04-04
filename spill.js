const { chromium } = require("playwright");

const svar = {
  "Kjøp deg en leirkrukke med vin i Georgias største by": "Tbilisi",
  "Reis til oldtidsbyen hvor det store kirkemøtet ble holdt i år 325": "Nikea",
  "Ta Hurtigruten til byen som ligger på den største øya i Fastlands-Norge":
    "Harstad",
  "Følg tråden og kle deg opp i denne berømte skreddergata i London":
    "Savile Row",
  "«The Reform Club» er en selskapsklubb for herrer i denne gata i London":
    "Pall Mall",
  "Bli med til Stjørdal, der et stedsnavn ofte får internasjonal oppmerksomhet":
    "Hell",
  "På hvilken øy foregår den italienske filmen «Cinema Paradiso»?": "Sicilia",
  "Kle deg godt og bli med til topps på vulkanen Beerenberg på denne polarøya":
    "Jan Mayen",
  "USAs nasjonalforsamling ligger i denne byen": "Washington D.C.",
  "Den polske byen Ząbkowice Śląskie het tidligere det samme som et monster":
    "Frankenstein",
  "Få på deg paljettene og dra til byen som skal arrangere årets Eurovision":
    "Liverpool",
  "Marsjer til militærleiren der TV-serien «Kompani Lauritzen» er spilt inn":
    "Setnesmoen",
  "Sett deg i 90-graderen der årets «Mesternes mester» ble spilt inn":
    "Larvik og Sandefjord",
  "Hvor kan du gå på Edvard Munch videregående skole?": "Oslo",
  "Ta trikken i byen hvor den Oscar-nominerte «Nattrikken» er spilt inn":
    "Trondheim",
  "Dra til strøket i Oslo hvor det nye Nasjonalmuseet ligger": "Vika",
  "Politikeren Hadia Tajik inviterer deg med hjem til fylket hun kommer fra":
    "Rogaland",
  "Hvor er figuren Ola Halvorsen i «Førstegangstjenesten» fra?": "Haugenstua",
  "Det sørlige endepunktet på Follobanen ligger på dette stedet": "Ski",
  "Hvor ble fotballegenden Pelé født?": "Brasil",
  "I hvilket land ligger verdens største kullkraftverk?": "Kina",
  "Regjeringen har sluttet å kalle landet Hviterussland. Hvilket navn gjelder nå?":
    "Belarus",
  "Sett seil med Leiv Eiriksson, og bli med til landet han «oppdaget»":
    "Vinland",
  "Hva heter endestasjonen på Ofotbanen?": "Narvik",
  "Hvor er «Verdens ende»?": "Tjøme",
  "Hva er Norges sørligste punkt på fastlandet?": "Lindesnes fyr",
  "Astrid Lindgrens roman «Brødrene Løvehjerte» foregår i dette oppdiktede landet":
    "Nangijala",
  "I hvilket fylke ligger Finnskogen?": "Innlandet",
  "Hvor ligger Fantoft stavkirke?": "Bergen",
  "Hvilket europeisk fjellområde er kjent for jodling?": "Alpene",
  "Hvor ble krysseren «Blücher» senket i 1940?": "Drøbaksundet",
  "Slaget om denne byen blir kalt Hitlers første nederlag": "Narvik",
  "Reis til landet som har gulasj som nasjonalrett": "Ungarn",
  "Her finner du øygruppen Polynesia": "Stillehavet",
  "Denne staten er verdens minste etter folketall": "Vatikanstaten",
  "Her har Verdens helseorganisasjon hovedkvarter": "Geneve",
  "Hvor kommer den blodtørstige «grev Dracula» fra?": "Transilvania",
  "Hvor er Lågendeltaet?": "Lillehammer",
  "Her avsluttes alltid siste etappe av Tour de France": "Champs-Élysées ",
  "Lytt til sambarytmene i Brasils hovedstad": "Brasília",
  "Her lå Oslo lufthavn før flyplassen ble flytta til Gardermoen": "Fornebu",
  "Du trenger ikke være rakettforsker for å vite at Cape Canaveral ligger i denne delstaten":
    "Florida",
  "Artisten Beyoncé inviterer deg til byen der hun mottok sin 32. Grammy-pris":
    "Los Angeles",
  "I november gjenerobret ukrainske styrker denne regionhovedstaden": "Kherson",
  "Lula Da Silva er president i dette landet": "Brasil",
  "P-pillet ble funnet opp i dette landet": "USA",
  "Marsjer mot Lincoln-monumentet hvor talen «I have a dream» ble holdt":
    "Washington D.C.",
  "Dette er verdens lengste veitunnel": "Lærdalstunnelen",
  "Hvor ligger verdens nordligste barnehage?": "Longyearbyen",
  "Dette er verdens største land målt i areal": "Russland",
  "Den brutale erobreren Djengis Khan var hersker i dette riket":
    "Mongol-riket",
  "Du vil til topps i verdens høyeste bygning og drar hit": "Dubai",
  "Her ble Norges laveste temperatur målt til –51,4 grader": "Karasjok",
  "Bli med på cruise til hovedstaden Nassau i denne øystaten": "Bahamas",
  "Besøk stedet der folk lenket seg sammen i protest mot utbygginga av Altaelva":
    "Stilla",
  "Orkanger er en by i Trøndelag, men hvilken kommune ligger byen i?":
    "Orkland",
  "Sett en fjær i hatten og bli med til fylket der vi finner stedet Hønseby":
    "Troms og Finnmark",
  "Musikeren Herb Alpert ga gruppa si navn etter denne meksikanske byen":
    "Tijuana",
  "Dette er navnet på et geografisk sted i både Texas, Tasmania og Trondheim":
    "Port Arthur",
  "Jamestown var første faste britiske bosetning i Amerika, men i hvilken delstat?":
    "Virginia",
  "Bli med til den engelske byen der de innfødte kalles «brummies»":
    "Birmingham",
  "Sett deg på charterflyet til den nest største byen i Andalucía": "Málaga",
  "I denne byen ligger den legendariske countrybaren «Tootsie's Orchid Lounge»":
    "Nashville",
  "Nordic Mining har planer om et sjødeponi i denne fjorden": "Førdefjorden",
  "Rosemarie Köhn var Norges første kvinnelige biskop. I hvilken by?": "Hamar",
  "Ta en selfie med Willy Wonka på Roald Dahl-museet her": "Buckinghamshire",
  "Reis til kommunen der han som skrev «Helene Harefrøken» er fra": "Ringsaker",
  "I hvilket land ligger havnebyen La Rochelle?": "Frankrike",
  "Ta med deg sparepengene og dra dit bygningen til Oslo Børs ligger":
    "Tollbugata",
  "Knyt på deg skøytene i Thialf isstadion i denne nederlandske byen":
    "Heerenveen",
  "Dette tettstedet i Høyanger heter det samme som en kjent norsk sanger":
    "Kyrkjebø",
  "Navnet på denne byen betyr «nestekjærlighetens by»": "Philadelphia",
  "Syng visa om «Anne Knutsdotter», og fortell hva hjemstedet hennes heter":
    "Uren Luren",
  "Besøk hjemmet til polfareren Roald Amundsen": "Uranienborg",
  "Da elva Moksa gikk over sine bredder i 1995 tok den med seg flere hus her":
    "Tretten",
  "Reis til byen på Helgeland som ligger i Vefsn kommune": "Mosjøen",
  "Forfatterne Oscar Wilde, James Joyce og Samuel Beckett er alle født i denne byen":
    "Dublin",
  "På dette stedet ble en berømt fredsavtale undertegnet i juni 1919":
    "Versailles",
  "Sett deg i hundesleden og bli med til byen som har målgang for Iditarod-løpet ":
    "Nome",
  "Ta plass i toget og bli med til endepunktet for Flåmsbana": "Myrdal",
  "I hvilket svensk län ligger byen Östersund?": "Jämtland",
  "Sett kursen østover og reis til hovedstaden i Kasakhstan": "Astana",
  "Inkariket hadde sitt senter i dette landet, men hva heter hovedstaden i dag?":
    "Lima",
  "Forfatter Ingvar Ambjørnsen inviterer deg med til byen han vokste opp i":
    "Larvik",
  "Dra til stranda utenfor Bodø som artisten Terje Nilsen lengtet til":
    "Mjelle",
  "Dette nordiske landet erklærte seg som selvstendig 17. juni 1944": "Island",
  "Fotballtreneren José Mourhino gir deg et sjeldent smil og viser deg rundt i fødebyen":
    "Setúbal",
  "Fregatten KNM «Helge Ingstad» sank i denne fjorden i 2018": "Hjeltefjorden",
  "I mai 1968 startet et studentopprør ved Sorbonne-universitetet. I hvilken by?":
    "Paris",
  "I februar kom et dataspill som har navn fra Harry Potter-universet. Hvilket sted?":
    "Hogwart",
  "TV-serien «Vi lover et helvete» foregår på dette oppdiktede stedet":
    "Utfjord",
  "Følg Tom Cruise dit hvor deler av neste «Mission Impossible» spilles inn":
    "Svalbard",
  "Du trenger prevensjon. Reis til landet der RFSU har sitt hovedkontor":
    "Sverige",
  "I denne byen var det i fjor konsert med artisten Justin Bieber": "Trondheim",
  "Syng av full hals sammen med «Girl in red» i hennes hjemby": "Horten",
  "Ta av deg den gule ulvemaska og bli med Gaute Ormåsen til dalen han kommer fra":
    "Brumunddal",
  "Ta med deg det norske flagget og bli med til landet som i år arrangerte ski-VM":
    "Slovenia",
  "Durek Verrett vokste opp i denne delstaten i USA": "California",
  "Ali Khamenei er øverste leder i dette landet": "Iran",
  "Bli med på kamp på hjemmebanen til nyopprykkede Stabæk Fotball": "Nadderud",
  "Politikeren Ron DeSantis er guvernør i denne delstaten": "Florida",
  "Handlingen i filmen «Avatar: The Way of Water» foregår på denne planeten":
    "Pandora",
  "Ro med Roy Jacobsen til den fiktive øya romanserien hans foregår": "Barrøy",
  "Reis dit Sametinget har møtene sine": "Karasjok",
  "Ro til øya der «Akerendam» forliste med en stor skatt om bord": "Runde",
  "Sigurd Jorsalfare reiste på korstog hit": "Jerusalem",
  "Memfis var en oldtidsby, men hvor lå den?": "Egypt",
  "La deg rive med i strømmen av turister til Spanias mest besøkte landemerke":
    "La Sagrada Familia",
  "Ta på deg danseskoene og dra dit mamboen kommer fra": "Cuba",
  "Hvor ligger øystaten Tonga?": "Stillehavet",
  "Daniel Craig løser et mysterium på ei øy i filmen «Glass Onion». I hvilket land?":
    "Hellas",
  "Du kan beundre «Nattverden» av Leonardo da Vinci i denne byen": "Milano",
  "Bli med på fotballkamp på «St James' Park» i denne byen": "Newcastle",
  "Nyt utsikten fra fastlandsnorges nordligste punkt": "Knivskjelodden",
  "Her ble ostehøvelen oppfunnet i 1925": "Lillehammer",
  "Ta en slurk av styrkedrikken i området Asterix bodde": "Aremorica",
  "Palasset Alhambra ligger i denne spanske byen": "Granada",
  "Reis til landet du få servert hákarl, fermentert hai": "Island",
  "Gå ut og stjæl hester i kommunen der Bjørkelangen er sentrum":
    "Aurskog-Høland",
  "Ta en båttur på elva der byen Karlsruhe ligger ved bredden": "Rhinen",
  "Den berømte Woodstock-festivalen ble arrangert i 1969, men hva heter stedet?":
    "Bethel",
  "Ta på deg grønne strømpebukser og bli med Herodes Falsk til byen han kommer fra":
    "Drammen",
  "Du befinner deg i hovedstaden i Liberia, men hva heter byen?": "Monrovia",
  "Rebekka West er hovedperson i Ibsen-skuespillet som foregår her":
    "Rosmersholm",
  "Humorserien «ORION» på NRK TV foregår på en romstasjon, men hvor ligger den?":
    "Ved Pluto",
  "Indiepop-bandet «Pikekyss» inviterer deg til dans i byen de kommer fra":
    "Oslo",
  "Ta på deg solbrillene og besøk byen der influenser Fetisha Williams er født":
    "Miami",
  "Reis til landet der klimatoppmøtet 2022 ble holdt": "Egypt",
  "Artisten Aurora synger en sang for deg på stedet hun kommer fra": "Os",
  "Magnus Carlsen initerer deg til et parti sjakk på stedet han er født":
    "Tønsberg",
  "Columbus kalte øya Santiago. Hva kaller vi den?": "Jamaica",
  "Bli lett andpusten på vei opp til Nederlands høyeste fjell": "Vaalserberg",
  "Granitten til skulpturen «Monolitten» kommer fra dette stedet i Østfold":
    "Idd",
  "Ved hvilken fjord ligger fjellet Nussir i Finnmark?": "Repparfjorden",
  "Det russiske marinefartøyet «Murmansk» sank i fjæresteinene her i 1994":
    "Sørvær",
  "Bjøro Håland løfter på hatten og inviterer deg til stedet hvor han er født":
    "Audnedal",
  "Denne russiske byen heter Kolosjoki på finsk": "Nikel",
  "En «ulljyde» ber deg med hjem til byen hun kommer fra i Danmark": "Herning",
  "Klatre til topps på Gullfjellet, som er det høyeste fjellet i denne bykommunen":
    "Bergen",
  "Nyt et bedre måltid på Granvolden Gjæstgiveri i denne kommunen": "Gran",
  "I hvilken kommune ligger kommandoen for de landmilitære styrkene i Finnmark":
    "Porsanger",
  "Flyselskapet Aeroflot har sin hovedbase på denne flyplassen utenfor Moskva":
    "Sjeremetjevo",
  "Hvor ble FN-pakten undertegnet i 1945?": "San Fransisco",
  "Bli med artist og skuespiller Ella Marie Hætta Isaksen til stedet hun kommer fra":
    "Tana/Deatnu",
  "William Høyem Ribe vant MGPjr med en tankefull låt. Hvor kommer han fra?":
    "Røyken",
  "Artisten Maryann Noor ber deg med på konsert i byen hun kommer fra":
    "Harstad",
  "Influenser Ellen Irene Aabol ber deg med på et bedre måltid i byen hun kommer fra":
    "Moss",
  "I hvilket fylke ligger Guri Kunna videregående skole?": "Trøndelag",
  "Padeltennis er en voksende sport. Hvor kommer den fra?": "Latin-Amerika",
  "Stonewall-opprøret regnes som starten på homobevegelsen. Hvor skjedde det?":
    "New York",
  "Ifølge Statistisk sentralbyrå har dette stedet i Nord-Norge flest innbyggere":
    "Bodø",
  "Du treffer skiskytter Johannes Thingnes Bø i kommunen han kommer fra":
    "Stryn",
  "Stridsvognen «Leopard 2» lages i dette landet": "Tyskland",
  "Ta på deg kofta og bli med på museet «Saemien Sijte»": "Snåsa",
  "Reis til landet der «lek» er myntenheten": "Albania",
  "Hva er hovedstaden i Burkina Faso?": "Ouagadougou",
  "Hvor lever verdens giftigste slange?": "Australia",
  "Ro sørover til verdens mest avisdesliggende ubebodde øy": "Bouvetøya",
  "Hvor finner du «Prins Harald kyst»?": "Dronning Maud Land",
};

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://www.nrk.no/trondelag/xl/paskelabyrinten-2023_-test-deg-i-geografi-quiz-med-nrks-spill-1.13969203"
  );
  await page.getByText("Start spillet").click();
  let previousQuestion = "";
  while (true) {
    const q = await page.locator("p.question-text").last().textContent();
    if (q === previousQuestion) {
      continue;
    }
    const a = svar[q];
    console.table({ q, a });
    await page.getByText(new RegExp("^" + a + "$")).click();
    previousQuestion = q;
  }
})();
