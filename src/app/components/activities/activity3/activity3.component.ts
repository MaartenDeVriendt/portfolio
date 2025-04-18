import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-activity3',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './activity3.component.html',
  styleUrls: ['./activity3.component.scss']
})
export class Activity3Component {
  title = 'POP Sessie My Team and I';
  
  doelstellingen = [
    'De POP-sessie was bedoeld om de samenwerking binnen ons team te versterken. De focus lag op het verbeteren van de communicatie en het leren omgaan met conflicten binnen groepswerk. Door een mix van theorie en praktijk leerden we beter samenwerken en elkaars werkwijze begrijpen.'
  ];
  
  eigenDoelstellingen = [
    'Voor mezelf wilde ik deze sessie gebruiken om mijn rol binnen het team beter te begrijpen en te versterken. Ik wilde mezelf uitdagen om duidelijker te communiceren, initiatief te nemen en actiever bij te dragen aan een goede groepsdynamiek. Daarnaast vond ik het belangrijk om mee te zorgen voor een omgeving waarin constructief conflict mogelijk was.'
  ];
  
  teamsamenstelling = [
    'Ons team bestond uit zes studenten, afkomstig uit verschillende afstudeerrichtingen: vier uit AON, één uit SWM en één uit SNB. Die mix zorgde voor een interessante dynamiek, omdat iedereen vanuit zijn eigen achtergrond en expertise bijdroeg aan de samenwerking. Tijdens de POP-sessie werkten we zonder vaste rolverdeling, wat ervoor zorgde dat iedereen gelijke kansen had om zich te laten horen. Door de open opzet en gezamenlijke oefeningen leerden we elkaar beter kennen en groeiden we als groep steeds dichter naar elkaar toe.'
  ];
  
  kern = [
    'Tijdens het derde jaar van de opleiding Toegepaste Informatica kregen we de kans om aan een praktijkgericht IT-project te werken voor Bewire, een externe partner uit het werkveld. We vormden een team van zes studenten, waarvan vier uit de afstudeerrichting Applicatieontwikkeling en één uit Softwaremanagement en één uit Systeem- en Netwerkbeheer. Onze opdracht was om een samenwerkingsdashboard te ontwikkelen: een digitaal platform waarop medewerkers van Bewire op één plek alle nodige informatie konden terugvinden. Denk aan personeelsgegevens, bedrijfsnieuws en evenementen. In de toekomst zouden daar eventueel ook modules bijkomen zoals verlofaanvragen of interne feedbacktools.',
    'We zijn gestart met een analysefase waarin we in gesprek gingen met mensen van het bedrijf om hun wensen en verwachting in kaart te brengen. Al snel merkten we dat die informatie voor medewerkers over meerdere platformen verspreid was. Daardoor ging er veel tijd verloren aan het zoeken naar de juiste gegevens. De bedoeling voor ons was dan ook één centrale plek voor alles zodat medewerkers zou zijn. Tijdens brainstormsessies bespraken we met het hele team welke functies absoluut in het dashboard moesten komen. We praatten samen over structuur, gebruiksvriendelijkheid en hoe we het visueel aantrekkelijk konden maken.',
    'Halverwege het project namen we deel aan een POP-sessie. De sessie werd georganiseerd om de samenwerking binnen het team te versterken. De begon met een stuk theorie waarin we kennismaakten met de principes van Lencioni. Dit model toont hoe een sterk team gebouwd wordt op vertrouwen, constructieve conflicten, betrokkenheid en duidelijke verantwoordelijkheden. We bespraken herkenbare situaties en hoe we daar als groep mee omgingen. De sessie zorgde ervoor dat we ons bewuster werden van de manier waarop we met elkaar communiceerden. Er ontstonden spontaan betere afspraken en ervoor zorgen dat onze samenwerking nadien vlotter verliep. Denk aan iedereen actief betrekken bij beslissingen en duidelijker communiceren over verwachtingen en deadlines.',
    'Na de theorie volgden een aantal teambuildingoefeningen. Eén daarvan was een fysieke opdracht waarbij we samen door een doolhof moesten blijven staan. Dit bevorderde het vertrouwen in elkaar, goed overleg, afstemming en vertrouwen. Een andere oefening was het herschikken van houten blokken, met maar één toegestane handeling per beurt. Verrasselijk vereiste dat regel drastisch. Iedereen had ideeën, maar er was geen strategie. Ik besefte op dat moment het overleg in groepen banen te leiden door taken te verdelen en af te spreken. Dat gaf me meer vertrouwen in mijn rol binnen het team, en we merkten dat de samenwerking vloeide een stuk vlotter liep.',
    'Wat we tijdens de POP-sessie leerden, hebben we ook effectief meegenomen in het verderee verloop van het project. We werkten volgens een sprintaanpak, waarbij we telkens voor een korte periode doelen vaststelden en daaraan resultaten en kwaliteiten op vaste tijdstippen evalueerden. Iedereen nam zijn verantwoordelijkheid en we zorgden er ook voor dat we elkaar bleven ondersteunen. Als iemand vastzat met een technisch probleem, dan sprong een ander bij. De open houding zorgde dat de samenwerking steeds beter ging.',
    'Op het einde van het semester leverden we een werkend prototype van het dashboard af. We presenteerden het aan Bewire en kregen positieve feedback over de structuur, de duidelijkheid en de look & feel van het platform. Voor mij persoonlijk was dit project een mooie ervaring waardoor ik niet alleen bijleerde op technisch vlak, maar vooral ook op het gebied van samenwerken, communicatie en het opnemen van verantwoordelijkheid. Het heeft me doen inzien dat goede samenwerking minstens even belangrijk is als de code zelf, en dat initiatief nemen echt het verschil kan maken.'
  ];
  
  reflectie = [
    'Tijdens dit project heb ik me vooral verdiept over de rol van technical lead binnen ons team. Dat hield in dat ik niet alleen werkte aan mijn eigen ontwikkeling van het werkfunctionaliteit, maar ook klaarstond voor de andere ontwikkelaars wanneer ze ergens op vastliepen. Ik probeerde overzicht te houden, technische keuzes mee te sturen en een aanspreekpunt te zijn bij vragen of problemen. Die ondersteunende rol nam ik graag op me, omdat ik het belangrijk vond dat iedereen vlot kon voortwerken.',
    'Toch verliep niet alles perfect. Tijdens een evaluatiemoment voor DevOps kregen we te horen dat we een belangrijk onderdeel niet hadden opgeleverd: de correcte deployment van onze website. Daardoor gingen we punten verloren. Dat moment zorgde voor frustratie in het team. De communicatie liep stroef en in eerste instantie begon ik, eerlijk gezegd, te zoeken naar wie daar verantwoordelijk voor was. Ik wees eerst naar anderen en wilde vooral aantonen dat het niet mijn fout was.',
    'Ik zelf ook een deel van de verantwoordelijkheid droeg. Als technical lead had ik beter moeten opletten op alle technische aspecten, zoals deployment, in grote waren. De fout erkennen was niet gemakkelijk, maar wel leerzaam.',
    'Sindsdien hielden we elke week een teamoverleg waarin we kort bespraken wie waarmee bezig was, of hulp nodig was en of alles nog volgens plan verliep. Dat hielp enorm om fouten te vermijden en zorgde voor betere communicatie.',
    'Wat ik uit dit project geleerd heb, is dat het belangrijker is om te zoeken naar oplossingen dan naar schuldigen, en dat leiderschap ook betekent dat je bereid bent om fouten toe te geven wanneer je zelf iets fout hebt aangepakt.',
    'Ik heb deze activiteit gekozen voor mijn portfolio omdat dit project me niet alleen technisch heeft uitgedaagd, maar vooral ook persoonlijk veel heeft bijgebracht. Ik heb geleerd hoe belangrijk goede communicatie is, hoe je in moeilijke momenten beter samen oplossingen zoekt in plaats van met de vinger te wijzen en hoe je als leider ook je eigen fouten onder ogen moet durven zien. Die lessen neem ik mee, niet alleen voor toekomstige projecten, maar ook in het dagelijkse leven. Problemen zullen er altijd zijn, maar hoe je ermee omgaat maakt echt het verschil.'
  ];
  
  media = [
    {
      type: 'image',
      path: 'assets/Piramide-van-Lencioni.webp',
      description: 'Piramide van Lencioni'
    },
    {
      type: 'image',
      path: 'assets/doekoefening.jpg',
      description: 'Oefening met het doek'
    },
    {
      type: 'image',
      path: 'assets/activiteit3.png',
      description: 'Herschikken van blokken'
    }
  ];
}
