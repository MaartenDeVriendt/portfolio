import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeminarsComponent } from './components/seminars/seminars.component';
import { PersonalDevelopmentComponent } from './components/personal-development/personal-development.component';
import { InnovationComponent } from './components/innovation/innovation.component';
import { InternationalizationComponent } from './components/internationalization/internationalization.component';
import { ExtrasComponent } from './components/extras/extras.component';
import { Activity1Component } from './components/activities/activity1/activity1.component';
import { Activity2Component } from './components/activities/activity2/activity2.component';
import { Activity3Component } from './components/activities/activity3/activity3.component';
import { Activity4Component } from './components/activities/activity4/activity4.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'seminars', component: SeminarsComponent },
  { path: 'personal-development', component: PersonalDevelopmentComponent },
  { path: 'innovation', component: InnovationComponent },
  { path: 'internationalization', component: InternationalizationComponent },
  { path: 'extras', component: ExtrasComponent },
  { path: 'activities/1', component: Activity1Component },
  { path: 'activities/2', component: Activity2Component },
  { path: 'activities/3', component: Activity3Component },
  { path: 'activities/4', component: Activity4Component }
];
