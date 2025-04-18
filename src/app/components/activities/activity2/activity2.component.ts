import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-activity2',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './activity2.component.html',
  styleUrls: ['./activity2.component.scss']
})
export class Activity2Component {
  title = '2TIN Projectweek';
  
  doelstellingen = [
    'De projectweek, voorafgaand aan het 14 weken durende Research Project in het tweede jaar van de opleiding Toegepaste Informatica aan Hogeschool PXL, had als doel studenten voor te bereiden op het grotere project. Gedurende deze week werden er sessies georganiseerd om meer te leren over jezelf en je team, en om je klaar te stomen voor de komende samenwerking. Het was een moment om stil te staan bij hoe je functioneert in groep, wat je sterktes zijn en waar je op moet letten bij het werken in teamverband.'
  ];
  
  eigenDoelstellingen = [
    'Tijdens de projectweek wilde ik vooral beter begrijpen hoe ik functioneer binnen een team en wat mijn rol daarin is. Het was een goede kans om stil te staan bij mijn eigen manier van communiceren en samenwerken. In het vervolgproject van 14 weken wou ik die inzichten gebruiken om sterker in een groep te staan, mijn technische kennis te verdiepen en te groeien in projectmatig werken. Daarnaast zag ik het als een uitdaging om leren omgaan met stress, meningsverschillen en onverwachte situaties binnen het team.'
  ];
  
  teamsamenstelling = [
    'Voor aanvang van het Research Project wilde ik een enquête in via Talento, waarin mijn karaktereigenschappen werden beoordeeld om teams te creëren die elkaar aanvullen. Deze methode resulteerde in groepen met een gevarieerde mix van vaardigheden, persoonlijkheden en denkpatronen, wat positief bijdroeg aan een effectieve samenwerking en het behalen van de projectdoelen.'
  ];
  
  kern = [
    'De projectweek in het tweede jaar van de opleiding Toegepaste Informatica aan Hogeschool PXL gaf een duidelijk overzicht van wat we konden verwachten van het Research Project. Tijdens de week werd er aandacht besteed aan zowel de inhoudelijke kant van het project als aan samenwerken en een aantal praktische vaardigheden die ons zouden helpen tijdens het vervolg van het onderzoeksproject dat we in de weken erna verder uitwerkten.',
    'De maandag begon met een algemene verwelkoming waarin het programma en de doelen van de projectweek werden toegelicht. Aansluitend kregen we uitleg over het i-Talentraject, dat focust op persoonlijke en professionele groei. Tijdens deze sessie werd ook de link gelegd met de X-Factor van PXL waarin studenten gestimuleerd worden om zich te ontwikkelen dan alleen maar de vakinhoud.',
    'Daarna volgde de sessie "Ken Jezelf", waarbij de resultaten van het eerder ingevulde Talento-competentierapport besproken werden. Dit rapport gaf inzicht in onder andere onze communicatiestijl, werkhouding en samenwerkingsvaardigheden. Op basis van deze gegevens werden de componeergroepen samengesteld. Vervolgens namen we deel aan een interactieve workshop rond teamoefeningen, samenwerken en reflecteren. Tijdens deze sessie leerden we onze teamkwaliteiten, valkuilen, uitdagingen en allergiën herkennen, wat hielp om effectiever te functioneren in een team.',
    'Op dinsdag werd het concrete project voorgesteld waaraan we de komende 14 weken zouden werken. Er kwam een gastondernemer, Jeff Gebhauer bij de case, die ons adviseerde over het ontwikkelen van een mobiele applicatie. Het volledige focusproces digitaal op te volgen. Tot slot gaven we toe gehonwe alles manueel, van het noteren van het bijhouden van bevindingen en vragen, tot het invullen van een gebruiksvriendelijke tool waarmee patiënten toegevoegd konden worden, afdekkingen geregsitreerd, zwangerschappen opgevolgd en implementatiesjablonen bijgehouden. De app moest daarnaast ook gebruikersvriendelijk ondersteunbaar zijn met extra functies zoals klantengegevens of filters.',
    'In de voormiddag kregen we op de projectuitleg ook een workshop over academisch schrijven. Hierin werd uitgelegd hoe we een onderzoeksvraag opstellen, met aandacht voor opbouw, bronvermelding en schrijfstijl. In de namiddag leerden we over professioneel netwerken en onderzoekend handelen. De netwerksessie, gegeven door Ann Beckers, liet ons nadenken over de kracht van de tweede graad binnen ons netwerk en hoe we bruggen kunnen bouwen aan connecties. In de workshop onderzoekend handelen, gegeven door Amber Cox, leerden we formuleren van onderzoeksvragen en het opstellen van een correcte methodologie.',
    'De woensdag was een andere dag, met een POP-sessie rond feedback, gegeven door Learning Path. De nadruk lag op het leren geven en ontvangen van feedback, zolder anderen te kwetsen. In het 4G-model. Er werd uitgelegd waarom feedback essentieel is in teams en hoe het effectief toegast zonder te kritiek te verwarden.',
    'Op donderdag startten we met een LinkedIn-sessie waarin we aan onze online professionele zichtbaarheid werkten. Vervolgens begon de praktische start van het project. De rollen binnen het team werden verdeeld en de eerste sprintvoorbereidingen gingen van start. In de namiddag namen we deel aan het PXL-bezoek in Trace. Daar kregen we de kans om bedrijven te ontmoeten, informatie uit te wisselen en onze netwerkvaarigheden in de praktijk te brengen.',
    'Vrijdag begon met een korte introductie tot het agile werkproces. Daarna werkten we verder aan het Research Project. Tijdens de eerste fase werd gewerkt aan de functionele analyse, wireframes en het technisch concept. Er werd gebruikgemaakt van tools zoals Jira voor taakopvolging en GitHub voor versiebeheer. De backend werd voorzien in Java, de frontend in Vue.js. Binnen het team was er een goede samenwerking: iedereen nam verantwoordelijkheid en leverde input binnen zijn expertisegebied. Taken werden verdeeld volgens de sterktes van de teamleden, wat het proces efficiënt maakte.',
    'Het project zelf verliep vrij goed. Binnen het team verliep de communicatie duidelijk en er werd goed samengewerkt. Iedereen wist wat zijn taken waren en er was regelmatig overleg om af te stemmen. Naast het bouwen van de applicatie werkten we ook aan een onderzoek. Dat onderzoek ging over hoe Progressive Web Apps (PWA\'s) zich verhouden tot de DMA-wetgeving (Digital Markets Act). We bekeken bijvoorbeeld op welke manier PWA\'s bijdragen aan meer openheid in het app-landschap, iets waar de DMA sterk op inzet. Het was interessant om dit mee te nemen in het project, omdat het ook invloed had op keuzes die we moesten maken tijdens het ontwikkelen. Zo werd het technische werk ondersteund door actueel en relevant onderzoek.',
    'De projectweek vormde zo een sterke basis voor de verdere uitwerking van het Research Project. Het programma combineerde theorie, praktijk, persoonlijke groei en professionele vaardigheden op een gestructureerde manier. Dankzij de verschillende sessies en workshops kregen we niet alleen technische input, maar ook ondersteuning bij vaardigheden zoals reflectie, communicatie, samenwerking en zelfkennis.'
  ];
  
  reflectie = [
    'Tijdens de projectweek merkte ik dat samenwerken in een team niet altijd vanzelfsprekend is. Ik was eerlijk gezegd wat terughoudend in het begin, vooral omdat ik in een vorig researchproject in een team zat waar de samenwerking volledig is misgelopen. Dat had best wat impact op mij, waardoor ik in het begin van deze projectweek nog wat twijfelde of ik kon vertrouwen. Gelukkig bleek al snel dat mijn nieuwe team het wel serieus nam, hetgeen toonde dat ze wel bereid om er echt samen iets van te maken. Dat heeft me geholpen om dat vertrouwen stilaan terug op te bouwen. Het deed gewoon deugd om te merken dat ik er niet alleen voor stond en dat we allemaal dezelfde richting uit wilden.',
    'Achteraf bekeken was het een positieve ervaring, vooral op het vlak van teamwork. De kliks goed binnen het team en we hebben mooie resultaten behaald voor het werk op dat moment zelfs samen met een van mijn teamleden van toen op onze stage. Dat zegt wel iets over hoe goed de samenwerking zat.',
    'Wat ik vooral geleerd heb, is dat ik best zelfreflec mag zijn over mijn sterke punten, maar dat ik ook moet durven toegeven dat ik zwakke punten heb. In het verleden nam ik snel het voortouw als ik het gevoel had dat anderen dit minder serieus namen, maar nu heb ik geleerd dat ik beter kan openstaan beter te vertrouwen op de groep.',
    'De link met de opleiding is duidelijk. De technische kennis die we in de lessen hebben meegekregen, kan ik echt toepassen in het project. Maar ook de zachte kant komt terug, zoals omgaan met feedback, samenwerken en communiceren. De opleiding bereidt ons niet alleen voor op het werken met de techniek, maar ook op hoe je goed omgaat met verschillende situaties, zowel positieve als negatieve. Het leerproces stopt nooit, en dat is me nu nog duidelijker geworden.',
    'Ik heb dit project gekozen omdat het voor mij echt een keerpunt was. Het heeft ervoor gezorgd dat ik terug vertrouwen kreeg in samenwerken, en dat heeft me gebracht waar ik nu sta in mijn opleiding en in mijn stage.'
  ];
}
