import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Seminar {
  id: number;
  title: string;
  company: string;
  description: string;
  date: string;
  time: string;
  location: string;
  building: string;
}

@Component({
  selector: 'app-seminars',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './seminars.component.html',
  styleUrl: './seminars.component.scss'
})
export class SeminarsComponent {
  seminars: Seminar[] = [
    {
      id: 1,
      title: 'Outsystems, met nadruk op genAI!',
      company: 'Harmony Group',
      description: 'Deze seminarie was een vervolg op de introductie met Outsystems waar we in aanraking kwamen met de AI tools die Outsystems te bieden had.',
      date: '23 oktober 2024',
      time: '13:30 - 17:00',
      location: 'Corda 7',
      building: 'Corda Campus'
    },
    {
      id: 2,
      title: 'Flutter',
      company: 'ITLicious',
      description: 'Tijdens de seminarie werd ons een crashcourse in flutter gegeven waar we daarna a.d.h.v. de uitleg een oefening kregen om een todo lijstje te maken in Corda 7.',
      date: '6 november 2024',
      time: '13:30 - 16:30',
      location: 'Corda 7',
      building: 'Corda Campus'
    },
    {
      id: 3,
      title: 'Behavior Driven Development: writing tests made fun!',
      company: 'ACA',
      description: 'Tijdens deze seminarie werd ons een nieuw manier van coderen getoond waar de focus lag in de samenwerking tussen developers, testers en business stakeholders.',
      date: '27 november 2024',
      time: '13:30 - 17:30',
      location: 'Corda 7',
      building: 'Corda Campus'
    },
    {
      id: 4,
      title: 'State management for angular',
      company: 'AE',
      description: 'Tijdens deze seminarie zijn we in aanraking gekomen met een nieuwe manier van state management in angular genaamd Signals.',
      date: '11 december 2024',
      time: '13:30 - 16:30',
      location: 'Corda 7',
      building: 'Corda Campus'
    },
    {
      id: 5,
      title: 'ChatGPT implementaties voor bedrijven',
      company: 'MbarQ',
      description: 'Tijdens deze seminarie werden we kort voorgesteld aan hoe AI gebruikt wordt in bedrijven en hoe AI modellen ontwikkeld en getraind worden.',
      date: '23 april 2024',
      time: '8:30 - 12:30',
      location: 'PXL Gebouw G',
      building: 'Hogeschool PXL'
    },
    {
      id: 6,
      title: 'Outsystems',
      company: 'Harmony Group',
      description: 'Tijdens deze seminarie kwamen we voor het eerst in aanraking met een tool genaamd outsystems waar we met low-code een app hebben gemaakt a.d.h.v. een tutorial.',
      date: '28 februari 2023',
      time: '09:00 - 12:00',
      location: 'PXL Gebouw G',
      building: 'Hogeschool PXL'
    },
    {
      id: 7,
      title: 'Crashcourse Design',
      company: 'Axsee',
      description: 'Een praktische crashcourse over moderne UI/UX design principes.',
      date: '15 januari 2024',
      time: '13:00 - 16:00',
      location: 'PXL Gebouw G',
      building: 'Hogeschool PXL'
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
  selectedLocation = this.locations[0];
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
