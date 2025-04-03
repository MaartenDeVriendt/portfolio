import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface International {
  id: number;
  title: string;
  description: string;
  location: string;
  building: string;
  country: string;
  startDate?: string;
  endDate?: string;
  startTime?: string; 
  endTime?: string;
  sessions?: Session[];
  images?: string[];
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
  selector: 'app-internationalization',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, MatExpansionModule, MatTabsModule],
  templateUrl: './internationalization.component.html',
  styleUrl: './internationalization.component.scss'
})
export class InternationalizationComponent implements OnInit {
  // Nieuwe eigenschappen voor de lightbox
  showLightbox: boolean = false;
  lightboxImageSrc: string = '';

  internationals: International[] = [
    {
      id: 1,
      title: 'Hackathon for Good #7 The Hague',
      description: 'Een 3-daagse hackathon met 4 verschillende challenges met echte probleem cases waarvan je 1 probleem uitwerkte met AI implementatie.',
      location: 'The Hague Tech',
      building: 'The Hague Tech',
      country: 'Nederland',
      startDate: '31 januari 2025',
      endDate: '2 februari 2025',
      startTime: '13:00',
      endTime: '16:00',
      images: [
        'https://media.discordapp.net/attachments/1206607342313934990/1357302052463841321/9B870292-9E24-43EB-864F-773C621EC366.jpg?ex=67efb58a&is=67ee640a&hm=b75e3e4407922d900227acb733529766ede9ddda6d795185c94b2f8a208c4d88&=&format=webp&width=652&height=1160',
        'https://media.discordapp.net/attachments/1206607342313934990/1357302053092855859/B22F2B28-538B-465A-94E9-C64718D5276A.jpg?ex=67efb58a&is=67ee640a&hm=f88899db801cdf2b04cb7b597a7f29c0a64b2bd4465d04cdb1bf012016130cd6&=&format=webp&width=652&height=1160',
        'https://media.discordapp.net/attachments/1206607342313934990/1357302054908985437/IMG_3493.jpeg?ex=67efb58b&is=67ee640b&hm=572c712d1958c484d2a80300a0566591b875a029d8cbccf019f02ec0b7baf212&=&format=webp&width=870&height=1160',
        'https://media.discordapp.net/attachments/1206607342313934990/1357302055839989920/IMG_3501.jpeg?ex=67efb58b&is=67ee640b&hm=bf8f168bedcbe60c91fff5477c5ca11b93188643d348bb9a526b063e72f04f2b&=&format=webp&width=870&height=1160',
        'https://media.discordapp.net/attachments/1206607342313934990/1357302053902483487/IMG_3486.jpeg?ex=67efb58b&is=67ee640b&hm=cc2d5ee2ae3563a3a0fdbfde278823627c00133295db82441fb718b270ccbf73&=&format=webp&width=870&height=1160',

        
      ]
    }
  ];

  // Locatie coördinaten
  locations: Location[] = [
    {
      id: 'denhaag',
      name: 'The Hague Tech',
      address: 'Waldorpstraat 5, 2521 CA Den Haag, Nederland',
      lat: 52.0704,
      lng: 4.3233
    }
  ];

  // Geselecteerde locatie voor de kaart
  selectedLocation!: Location;
  mapUrl!: SafeResourceUrl;
  selectedImageIndex: number = 0;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Initialiseer met de eerste locatie
    this.selectedLocation = this.locations[0];
    this.updateMapUrl();
  }

  // Selecteer een locatie om op de kaart te tonen
  showOnMap(building: string): void {
    if (building === 'The Hague Tech') {
      this.selectLocationById('denhaag');
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

  // Toon volgende afbeelding
  nextImage(images: string[]): void {
    this.selectedImageIndex = (this.selectedImageIndex + 1) % images.length;
  }

  // Toon vorige afbeelding
  prevImage(images: string[]): void {
    this.selectedImageIndex = (this.selectedImageIndex - 1 + images.length) % images.length;
  }

  // Open lightbox voor vergrote weergave
  openLightbox(imageSrc: string): void {
    this.lightboxImageSrc = imageSrc;
    this.showLightbox = true;
  }

  // Sluit lightbox
  closeLightbox(): void {
    this.showLightbox = false;
  }

  // Toon volgende afbeelding in lightbox
  nextLightboxImage(images: string[]): void {
    this.selectedImageIndex = (this.selectedImageIndex + 1) % images.length;
    this.lightboxImageSrc = images[this.selectedImageIndex];
  }

  // Toon vorige afbeelding in lightbox
  prevLightboxImage(images: string[]): void {
    this.selectedImageIndex = (this.selectedImageIndex - 1 + images.length) % images.length;
    this.lightboxImageSrc = images[this.selectedImageIndex];
  }

  // Toetsenbordbesturing voor de lightbox
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.showLightbox) return;
    
    const images = this.internationals[0].images;
    if (!images) return;
    
    switch(event.key) {
      case 'Escape':
        this.closeLightbox();
        break;
      case 'ArrowLeft':
        this.prevLightboxImage(images);
        break;
      case 'ArrowRight':
        this.nextLightboxImage(images);
        break;
    }
  }
}
