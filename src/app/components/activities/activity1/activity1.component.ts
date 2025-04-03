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
  title = 'Projectmanagement';
  skills = [
    'Agile/Scrum methodologie',
    'Risicomanagement',
    'Stakeholder management',
    'Budgetbeheer',
    'Planning en tijdsmanagement'
  ];
  
  projects = [
    {
      name: 'Webapplicatie Ontwikkeling',
      description: 'Leiding gegeven aan een team van 5 ontwikkelaars bij het bouwen van een klantportaal.',
      outcomes: 'Project op tijd en binnen budget opgeleverd, met 98% klanttevredenheid.'
    },
    {
      name: 'Procesoptimalisatie',
      description: 'Interne processen geanalyseerd en verbeterd met behulp van Lean-methodologie.',
      outcomes: 'Doorlooptijd verminderd met 30% en fouten gereduceerd met 25%.'
    }
  ];
}
