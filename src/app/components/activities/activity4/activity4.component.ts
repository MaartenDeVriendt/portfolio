import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-activity4',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './activity4.component.html',
  styleUrls: ['./activity4.component.scss']
})
export class Activity4Component {
  title = 'Counter Strike 2: Frag-o-matic';
  
  doelstellingen = [
    'Voor deze activiteit nam ik deel aan Frag-o-Matic, een driedaags evenement dat volledig in het teken stond van competitief gamen. We schreven ons in voor het Counter-Strike 2 toernooi, een van de grootste competities binnen het event. Onze algemene doelstelling was om als team zo ver mogelijk te geraken in het toernooi, waarbij we ook wilden werken aan samenwerking, communicatie.'
  ];
  
  eigenDoelstellingen = [
    'Voor mij was dit vooral een goede kans om mijn rol binnen het team verder te ontwikkelen en om mezelf uit te dagen in een competitie die groter en complexer was dan wat we gewoon zijn. Ik wilde mezelf wat meer pushen op vlak van communicatie en het nemen van beslissingen, zeker wanneer de druk wat hoger lag. Ook wou ik leren focussen op mijn aandacht te houden over een langere periode, want na een paar uur merk je toch dat dit niet vanzelf gaat, laat staan als je meerdere dagen actief bezig bent. Tegelijk zag ik het ook als een moment om wat bij te leren over mezelf, zoals hoe ik omga met druk, verwachtingen en momenten waarop het even tegenzit.'
  ];
  
  teamsamenstelling = [
    'Ons team bestond uit vijf spelers, waarbij iedereen een vaste rol opnam. Een teamlid nam de leiding tijdens de wedstrijden en bepaalde de algemene aanpak. Ikzelf nam vooral een ondersteunende rol op tijdens het begin van elke ronde, waarbij ik verantwoordelijk was voor het verzamelen van informatie en het openen van de actie. Andere teamleden richtten zich op specifieke situaties of het beschermen van bepaalde zones. Dankzij deze duidelijke taakverdeling konden we efficiënt samenwerken en optimaal voorbereiden op elk scenario.'
  ];
  
  kern = [
    'Frag-o-Matic was zonder twijfel één van de meest intense, vermoeiende, maar tegelijk ook leerrijke ervaringen uit mijn opleiding tot nu toe. Stellen je voor: honderden gamingliefhebbers die deelnemen samen in een grote hal, allemaal met hun eigen computer en uitrusting, klaar om deel te nemen aan verschillende competities. Wij deden mee aan het Counter-Strike-toernooi, een van de grootste en meest competitieve onderdelen van het weekend.',
    'Op dag één kwamen we al vroeg aan, zodat we rustig de tijd hadden om alles op te stellen en te checken of alles werkte zoals het moest. De zaal was indrukwekkend om binnen te stappen: rijen vol computers, mensen die druk bezig waren, en je voelde meteen dat iedereen er serieus mee bezig was. Nadat we onze spullen hadden klaargezet, konden we even rondkijken om de sfeer op te snuiven en de communicatie binnen het team op punt te zetten. Dat hielp om wat losser te worden en om de eerste spanning van je af te laten vallen.',
    'In de loop van de avond begonnen de eerste officiële wedstrijden van het toernooi. We speelden die avond twee rondes, beide met succes. Dankzij die overwinningen startten we sterk en konden we vol vertrouwen uitkijken naar dag twee. Wat me vooral opviel, was hoe goed we als team functioneerden. Iedereen kende zijn taak, we luisterden naar elkaar, gaven snel en duidelijk feedback, en pasten onze aanpak aan wanneer dat nodig was. Dat zorgde ervoor dat we efficiënt konden spelen, maar vooral tijdelijk of wanneer de situatie erom tegenzat.',
    'Dag twee was voor ons de lastigste van het weekend. We begonnen al wat vermoeid te raken en je merkte dat tegenstanders een stuk sterker waren dan op dag één. In de voormiddag speelden we tegen een team die ons meteen verraste met hun manier van spelen. We verloren die match, wat natuurlijk teleurstellend was, maar het liet ons wel toe om na te denken. We bespraken waar er fout liep en hoe we beter konden reageren, en besloten om onze aanpak wat bij te sturen voor de volgende match. Dat moment van bijleren en samen zoeken naar verbetering was eigenlijk even waardevol als het toernooi zelf.',
    'In de namiddag gingen we in de verliezersronde. We wisten dat hier een groep of minder was. We hadden nog één kans om door te gaan, anders lag het toernooi voor ons op. De match was spannend tot op het laatste moment, maar we wonnen nipt, zeker deel in vergelijking gewoon staan dan in de vorige ronde. Dat gaf ons net genoeg om te winnen en zo pakten we toch nog een plek in de kwartfinales van zondag.',
    'De derde dag begon vroeg, en hoewel iedereen duidelijk vermoeid was, voelden we ook motivatie. We mochten thonen dat we thuishoorden bij de beste teams. De kwartfinale bleek uiteindelijk een van de meest spannende wedstrijden. De scores lagen dicht bij elkaar en beide teams speelden op hoog niveau. Uiteindelijk verloren we met een klein verschil, waardoor we uit de halve finale misten. Toch waren we vooral trots van de presterende teams eindigen die bij tot zocht. Gezien het niveau van de competitie en de beperkte voorbereidingstijd was dat een sterk resultaat.',
    'Wat deze ervaring zo bijzonder maakte, ging verder dan alleen het competitieve aspect. De sfeer in de zaal, het continue samenwerken met je team, het doorzetten ondanks vermoeidheid en stress, dat alles zorgde ervoor dat het weekend een blijvende indruk naliet. Kleine dingen zoals pauzes om samen iets te eten waren snel tussendoor geregeld. Toch bleef de focus scherp, omdat we wisten waar we voor gingen.',
    'Een ander opvallend aspect was de sterke groepsdynamiek die gedurende het weekend groeide. We leerden elkaar beter aan te voelen, niet alleen in het spel, maar ook daarbuiten, kleine frustraties werden besproken, successen werden samen gevierd, en op moeilijke momenten steunden we elkaar. Die verbondenheid maakte het weekend niet alleen leuker, maar zorgde er ook voor dat we als groep beter functioneerden.',
    'Kortom, Frag-o-Matic was een ervaring waarin ik mijn grenzen verlegd heb op vlak van concentratie, communicatie en samenwerken onder druk. De combinatie van competitiedruk, vermoeidheid en de nood aan constante focus zorgde voor een uniek leertraject waar ik nog lang de vruchten van zal plukken.'
  ];
  
  reflectie = [
    'Tijdens Frag-o-Matic heb ik niet alleen veel geleerd op technisch vlak, maar ook over mezelf. Mijn rol vroeg veel initiatief en ik merkte dat ik goed kon omgaan met druk. In situaties van tijdsdruk hoog was of waar we achterstonden, bleef ik relatief rustig en gefocust. Die kalmte hielp niet alleen mijzelf, maar werkte ook aanstekelijk voor de rest van het team.',
    'Een uitdaging die ik al vroeg voorzag, was het combineren van prestatie met vermoeidheid. Competitief gamen lijkt voor buitenstaanders misschien eenvoudig, maar het vraagt enorm veel energie om urenlang scherp te blijven. Na een paar wedstrijden en strategieën te doorlopen over het event heb ik geleerd hoe belangrijk het is om mentale rustmomenten in te bouwen, zelfs al zijn die kort.',
    'Wat ik vooral heb geleerd, is hoe belangrijk het is om in teamverband te spelen. Elke rol binnen het team heeft zijn eigen waarde, en geen enkele positie is minder belangrijk dan de andere. Zodra je dat begint te beseffen, ga je automatisch meer vertrouwen op elkaar. Door goed samen te werken, ieders rol te respecteren, haal je als team echt het beste uit jezelf.',
    'Daarnaast heb ik ervaren hoe belangrijk effectieve communicatie is. In stressvolle en chaotische situaties moet je snel, kort, duidelijk en efficiënt te overleggen. Toch maakten we daar nu binnen stappen in, wat zich vertaalde in betere beslissingen en snellere aanpassingen tijdens wedstrijden.',
    'Het zijn deze dingen die ik geleerd heb, die me sterker hebben gemaakt. Het draait niet alleen om snel en goed spelen, maar ook om dingen zoals samenwerken, scherp blijven onder druk en leren uit je fouten. Dat zijn vaardigheden die ook buiten het gamen nuttig zijn. Ik kijk er met een goed gevoel op terug en neem zeker dat ik hier dingen uit meeneem waar ik nog iets aan heb, of dat nu bij games is of daarbuiten.'
  ];
}
