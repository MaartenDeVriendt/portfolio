import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-activity1',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.scss']
})
export class Activity1Component {
  title = 'Hackathon Den Haag';
  
  doelstellingen = [
    'Voor deze activiteit deden we mee aan een driedaagse hackathon, met als opdracht: een AI-model bouwen en integreren in de website van het Rode Kruis. De bedoeling was om via een chatbot mensen sneller en beter naar de juiste info of hulp te leiden.',
    'Wat me meteen aansprak, was het maatschappelijke aspect. Het Rode Kruis is een organisatie die écht een verschil maakt, en het idee dat wij daar mee technologie iets aan konden bijdragen, zat me meteen op om erin te vliegen.',
    'De link tussen AI en ethiek: praktische hulpverlening vond ik ook super boeiend – een mooie kans om te tonen dat AI meer is dan alleen maar een hype.'
  ];
  
  eigenDoelstellingen = [
    'Voor mij was dit vooral een kans om iets volledig nieuws uit te proberen. AI is een onderwerp waar ik tot nu toe weinig mee had gewerkt, dus ik zag dit als een ideale manier om dit te verkennen.',
    'Tegelijk wist ik dat het een stevige uitdaging ging worden, zeker omdat we niet alleen tegen andere studenten streden, maar ook tegen ervaren mensen uit het werkveld zaten. Dat maakte het ergens spannend, maar ook extra motiverend.'
  ];
  
  teamsamenstelling = [
    'Ons team werkte eigenlijk best gestructureerd. Één iemand hield zich bezig met de infrastructuur, zoals serveromgeving en alles wat daarbij kwam kijken. Een ander teamlid was verantwoordelijk voor het design en de presentatie, wat enorm hielp om onze oplossing visueel sterk over te brengen.',
    'De rest van ons, drie developers inclusief ikzelf, richtte zich op het bouwen van de website en het ontwikkelen en integreren van de chatbot. Iedereen wist goed wat zijn rol was, wat ervoor zorgde dat we efficiënt konden samenwerken en elkaar makkelijk konden aanvullen.'
  ];
  
  kern = [
    'De hackathon was zonder twijfel één van de meest leerzame ervaringen uit mijn opleiding tot nu toe. We kregen drie dagen de tijd om, samen met ons team, een AI-chatbot te bouwen en te integreren in een website voor het Rode Kruis.',
    'Hoewel AI voor velen van ons nog onbekend terrein was, lukte het ons toch om op korte tijd een degelijk werkend prototype neer te zetten. Dit kwam deels door de brede technologische basis die we vanuit onze opleiding hebben meegekregen, maar ook door onze motivatie en goede samenwerking binnen het team.',
    'Op dag één werden we ontvangen met een lunch en een korte introductie over het doel van de hackathon. De opdracht was helder: ontwikkel een AI-chatbot die bezoekers van de Rode Kruis-website beter kan begeleiden. Denk aan vragen over bloed geven, vrijwilligerswerk of noodprocedures. De uitdaging sprak me meteen aan, want het voelde alsof we echt aan iets maatschappelijk relevants konden bijdragen en technologie konden inzetten om mensen sneller op de goede weg aan de slag te gaan.',
    'Na de introductie begonnen we meteen met het maken van een planning. We brainstormden eerst over welke technische haalbaar was in zo\'n korte tijd en stelden een ruwe planning op. Onze focus kwam te liggen op het bouwen van een eenvoudige maar functionele chatbot die relevante vragen van mensen echt stellen. We sloten de dag af met pizza, maar ook met een duidelijk plan. In de avond namen we zelfs nog verder met elkaar via telefoon om dingen af te stemmen over het verdelen van de taken.',
    'De tweede dag was pure uitvoer. We begonnen vroeg en werkten met een duidelijke taakverdeling. Eén teamlid zette de infrastructuur op zich, een ander werkte aan het design en de presentatie, en ikzelf, samen met twee anderen, richtte me op de frontend en het API-gedeelte. We kozen ervoor om Vue te gebruiken voor de frontend omdat we daar al vertrouwd mee waren. Zo konden we snel en efficiënt bouwen zonder tijd te verliezen aan nieuwe technologieën leren.',
    'Mijn eerste focus lag op het bouwen van de interface: een overzichtelijke en toegankelijke webpagina waarin de chatbot goed geïntegreerd zat. Nadat dit gedeelte min of meer op punt stond, hielp ik mee om het juiste AI-model te kiezen en relevante training op maat van de Rode Kruis-site te verzamelen, die we in een kennisbank onderbrachten. Vervolgens testten we verschillende taalmodellen en embeddings, zodat de chatbot contextueel juiste antwoorden kon geven. Dat was zoeken naar een goede balans tussen snelheid, nauwkeurigheid en gebruiksvriendelijkheid.',
    'Tegen het einde van dag twee hadden we een eerste versie van onze chatbot klaar. Hij kon vragen herkennen, antwoorden geven en verwerkte mensen indien nodig door naar de juiste pagina. In de avond deden we nog een gezamenlijke evaluatie van wat goed werkte en wat nog beter kon, waarna we nog wat kleine bugs oplosten.',
    'Op de derde en laatste dag werkten we de laatste puntjes af. We begonnen vroeg, finaliseerden de integratie, maakten een korte demo-video en zetten de site live via een codingomgeving. We besteedden ook aandacht aan onze presentatie: wat wilden we vertellen aan de jury, hoe brachten we onze technische keuzes over, en vooral, hoe toonden we de maatschappelijke meerwaarde van ons werk?',
    'De jurering was spannend, maar ook leuk. We werden duidelijk uitgelegd hoe ons project tot stand was gekomen en welke impact het zou kunnen hebben. Uiteindelijk werden we in de top 5 van vijftien teams geplaatst!'
  ];
  
  reflectie = [
    'Tijdens deze hackathon nam ik de rol op van developer, maar eigenlijk speelde ik al snel in een soort coördinerende functie binnen ons technische team. Zonder dat ik dit echt uitgesproken had, keek de groep regelmatig naar mij bij het nemen van beslissingen of het oplossen van problemen. Dat voelde enerzijds als een compliment, maar bracht ook wat wat druk met zich mee. Toch hielp ik graag om te zorgen voor het brengen de manier waarop we samenwerkten, zeker met de strakke deadline in het achterhoofd.',
    'We kregen meteen op dag één met een grote uitdaging te maken: onze schoolaccount op AWS bleek te beperkt om de chatbot uit te rollen. Dat leverde serieuze vertraging op, en we dreigden daardoor kostbare tijd te verliezen. Gelukkig was er iemand van Amazon aanwezig op het event die ons uit de brand hielp door een tijdelijke omgeving op te zetten. Op dat moment leerde me hoe belangrijk het is om mensen aan te spreken, vragen te stellen en gebruik te maken van het netwerk dat rond je hangt – iets wat ik normaal minder snel zou doen.',
    'Wat deze ervaring voor mij echt waardevol maakte, was de combinatie van leren en presteren. Ik had nog nooit met AI gewerkt, dus in dit project eigenlijk naast het begin van het project te leren. Maar wat erg interessant was, was dat ik op drie dagen heel veel heb bijgeleerd over AI-modellen, vector databases en hoe je op een slimme manier data inzet. Maar ik heb ook geleerd dat goed teamwerk en een duidelijke taakverdeling minstens even belangrijk zijn als technische kennis.',
    'Een van mijn sterktes bleek mijn kalmte in stressvolle situaties. Ik merkte dat, zelfs als het even misliep of we weinig tijd dreigden te hebben, ik rustig bleef denken en handelen, in plaats van in paniek te raken. Wat je wel hebben moeten bijsturen, is mijn neiging om alles zelf te willen doen. Aanvankelijk nam ik wat te veel verantwoordelijkheid op me, waardoor ik merkte dat ik minder efficiënt werkte. Gelukkig besefte ik dat op tijd en delegeerde ik meer, wat leidde tot een team ten goede kwam.',
    'Achteraf bekeken sluit onze opleiding echt goed aan bij dit soort uitdagingen. Dankzij de brede technologische basis die we meekrijgen, konden we snel schakelen en nieuwe technieken. De combinatie van technische kennis, flexibiliteit en samenwerking maakt dit project iets waar ik met trots op terugkijk. Ik heb het dan ook opgenomen in mijn portfolio – niet alleen vanwege het resultaat, maar ook door de leerervaring en het unieke karakter van de samenwerking met echte professionals.'
  ];
  
  media = [
    {
      type: 'image',
      path: 'assets/GroepsFotoDenHaag.jpeg',
      description: 'Ons team tijdens de Hackathon Den Haag'
    },
    {
      type: 'image',
      path: 'assets/feedbackHackathon.png',
      description: 'Feedback van de jury'
    },
    {
      type: 'image',
      path: 'assets/images/hackathon3.jpg',
      description: 'Presentatie van onze chatbot voor het Rode Kruis'
    },
    {
      type: 'video',
      path: 'assets/videos/hackathon-demo.mp4',
      description: 'Demonstratie van de AI-chatbot die we hebben ontwikkeld'
    }
  ];
}
