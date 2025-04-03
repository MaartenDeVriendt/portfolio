import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activities = [
    {
      title: 'Seminars',
      description: 'Overzicht van gevolgde seminars en workshops',
      route: '/seminars'
    },
    {
      title: 'Persoonlijke Ontwikkeling',
      description: 'Mijn persoonlijke groei en leerervaringen',
      route: '/personal-development'
    },
    {
      title: 'Innovatie',
      description: 'Innovatieve projecten en initiatieven',
      route: '/innovation'
    },
    {
      title: 'Internationalisering',
      description: 'Internationale ervaringen en samenwerkingen',
      route: '/internationalization'
    },
    {
      title: 'Extra\'s',
      description: 'Aanvullende activiteiten en prestaties',
      route: '/extras'
    }
  ];

  detailedActivities = [
    {
      title: 'Activiteit 1: Projectmanagement',
      description: 'Een gedetailleerd overzicht van mijn projectmanagement vaardigheden en ervaringen.',
      route: '/activities/1'
    },
    {
      title: 'Activiteit 2: Programmeren',
      description: 'Mijn programmeervaardigheden en softwareprojecten in detail toegelicht.',
      route: '/activities/2'
    },
    {
      title: 'Activiteit 3: Onderzoek',
      description: 'Onderzoeksprojecten en academische bijdragen die ik heb geleverd.',
      route: '/activities/3'
    },
    {
      title: 'Activiteit 4: Teamleiderschap',
      description: 'Mijn ervaringen als teamleider en de resultaten die we hebben bereikt.',
      route: '/activities/4'
    }
  ];
}
