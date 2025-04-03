import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Innovation {
  id: number;
  title: string;
  description: string;
  location: string;
  building: string;
  sessions?: Session[];
  date?: string;
  time?: string;
}

interface Session {
  id: number;
  date: string;
  time: string;
  description?: string;
}

interface Location {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-innovation',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, MatExpansionModule],
  templateUrl: './innovation.component.html',
  styleUrl: './innovation.component.scss'
})
export class InnovationComponent implements OnInit {
  innovations: Innovation[] = [
    {
      id: 1,
      title: 'Innovatieroute: DDD',
      description: 'Er werd uitgelegd over een nieuwe manier van werken namelijk DDD waar de nadruk lag in de communicatie met gebruik van event storming.',
      location: 'Corda 7',
      building: 'Corda Campus',
      sessions: [
        {
          id: 1,
          date: '24 september 2024',
          time: '09:00 - 12:00',
          description: 'Introductie tot Domain-Driven Design'
        },
        {
          id: 2,
          date: '1 oktober 2024',
          time: '09:00 - 16:00',
          description: 'Event Storming workshop'
        },
        {
          id: 3,
          date: '8 oktober 2024',
          time: '09:00 - 16:00',
          description: 'Implementatie en praktijkoefeningen'
        }
      ]
    },
    {
      id: 2,
      title: 'Hackaton: Hack The Future',
      description: 'Voor deze challenge "Among The Stars" (Collide Explorer challenge) kregen we 9 opdrachten van deencryptie tot bruteforcing die moesten opgelost worden op een creatieve manier.',
      location: 'Flanders Meeting & Convention Center',
      building: 'Antwerpen',
      date: '19 november 2024',
      time: '09:00 - 21:00'
    }
  ];

  // Locatie coördinaten
  locations: Location[] = [
    {
      id: 'corda',
      name: 'Corda Campus',
      address: 'Kempische Steenweg 293, 3500 Hasselt',
      lat: 50.9507,
      lng: 5.3573
    },
    {
      id: 'antwerpen',
      name: 'Flanders Meeting & Convention Center',
      address: 'Koningin Astridplein 20, 2018 Antwerpen',
      lat: 51.2175,
      lng: 4.4210
    }
  ];

  // Geselecteerde locatie voor de kaart
  selectedLocation!: Location;
  mapUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Initialiseer met de eerste locatie
    this.selectedLocation = this.locations[0];
    this.updateMapUrl();
  }

  // Selecteer een locatie om op de kaart te tonen
  showOnMap(building: string): void {
    if (building === 'Corda Campus') {
      this.selectLocationById('corda');
    } else if (building === 'Antwerpen') {
      this.selectLocationById('antwerpen');
    }
  }

  // Selecteer locatie op ID
  selectLocationById(id: string): void {
    const location = this.locations.find(loc => loc.id === id);
    if (location) {
      this.selectedLocation = location;
      this.updateMapUrl();
    }
  }

  // Update de kaart URL
  updateMapUrl(): void {
    const query = encodeURIComponent(`${this.selectedLocation.name}, ${this.selectedLocation.address}`);
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${query}`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
