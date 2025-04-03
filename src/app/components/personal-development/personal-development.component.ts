import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';

interface PopSession {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  hasDateRange: boolean;
  details: string[];
  building: string;
}

@Component({
  selector: 'app-personal-development',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule, 
    MatListModule,
    MatChipsModule
  ],
  templateUrl: './personal-development.component.html',
  styleUrl: './personal-development.component.scss'
})
export class PersonalDevelopmentComponent {
  popSessions: PopSession[] = [
    {
      id: 1,
      title: 'Projectweek 2TIN',
      description: 'Een week gevuld met POP-sessies, infosessies als voorbereiding op het researchproject',
      location: 'PXL Gebouw B',
      date: '12 februari 2024 - 16 februari 2024',
      time: '09:00 - 16:00',
      startDate: '12 februari 2024',
      startTime: '09:00',
      endDate: '16 februari 2024',
      endTime: '16:00',
      hasDateRange: true,
      details: [],
      building: 'Hogeschool PXL'
    },
    {
      id: 2,
      title: 'POP-sessie 2TIN',
      description: 'POPping',
      location: 'PXL Gebouw B',
      date: '5 maart 2024',
      time: '10:30 - 12:30',
      hasDateRange: false,
      details: [
        'Workshop om kennis te maken met je teamgenoten en andere teams'
      ],
      building: 'Hogeschool PXL'
    },
    {
      id: 3,
      title: 'POP-sessie 2TIN',
      description: 'Brein aan het werk! Niet storen!',
      location: 'PXL Gebouw B',
      date: '5 maart 2024',
      time: '8:30 - 10:30',
      hasDateRange: false,
      details: [
        'Workshop waarbij je de sterkte -en zwakte punten van jou en jou team leerde kennen en bespreken'
      ],
      building: 'Hogeschool PXL'
    },
    {
      id: 4,
      title: 'POP-sessie 3TIN',
      description: 'My Team and I',
      location: 'Corda 7',
      date: '9 oktober 2024',
      time: '13:30 - 15:30',
      hasDateRange: false,
      details: [
        'Workshop over samenwerken in teamverband als voorbereiding op het IT-project'
      ],
      building: 'Corda Campus'
    }
  ];

  // Locatie coördinaten
  locations = [
    {
      name: 'Corda Campus',
      address: 'Kempische Steenweg 293, 3500 Hasselt',
      lat: 50.9507,
      lng: 5.3573
    },
    {
      name: 'Hogeschool PXL',
      address: 'Elfde-Liniestraat 24, 3500 Hasselt',
      lat: 50.9314,
      lng: 5.3414
    }
  ];

  // Geselecteerde locatie voor de kaart
  selectedLocation = this.locations[1]; // Standaard PXL als eerste
  mapUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.updateMapUrl();
  }

  // Selecteer een locatie om op de kaart te tonen
  showOnMap(building: string) {
    if (building === 'Corda Campus') {
      this.selectedLocation = this.locations[0];
    } else {
      this.selectedLocation = this.locations[1];
    }
    this.updateMapUrl();
  }

  // Update de kaart URL
  updateMapUrl() {
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${this.selectedLocation.name},Hasselt+Belgium`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
