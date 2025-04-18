import { Component, ViewChild, TemplateRef, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

interface ExtraSeminar {
  title: string;
  company: string;
  description: string;
  details: string[];
  location: string;
  date: string;
  time: string;
}

interface Development {
  title: string;
  description: string;
  details: string[];
  location: string;
  date: string;
  images: string[];
}

interface StudentSupport {
  name: string;
  role: string;
  description: string[];
}

interface Innovation {
  title: string;
  description: string;
  date: string;
}

type ItemType = 'seminarie' | 'innovatie' | 'persoonlijk' | 'student';

@Component({
  selector: 'app-extras',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule, 
    MatDividerModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    RouterLink
  ],
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent implements OnInit {
  @ViewChild('detailsDialog') detailsDialog!: TemplateRef<any>;
  @ViewChild('fullscreenImageDialog') fullscreenImageDialog!: TemplateRef<any>;
  
  selectedItem: any;
  selectedType: ItemType = 'seminarie';
  dialogRef?: MatDialogRef<any>;
  fullscreenDialogRef?: MatDialogRef<any>;
  currentTheme: string = 'light-theme';
  fullscreenImageUrl: string = '';

  extraSeminar: ExtraSeminar = {
    title: 'Politie: Forensics',
    company: 'RCCU (Regional Computer Crime Unit)',
    description: 'Een extra seminarie over cybercrime, digitaal forensisch onderzoek, en de rol van RCCU binnen de politiediensten.',
    details: [
      'Introductie tot cybercrime en digitaal forensisch onderzoek',
      'Werkwijze en technieken van de RCCU',
      'Praktijkvoorbeelden en casestudies',
      'Carrièremogelijkheden binnen digitale forensics'
    ],
    location: 'PXL Gebouw G, Lokaal 0.01',
    date: '14/03/2024',
    time: '13:30 - 16:30'
  };

  innovation: Innovation = {
    title: 'Hackathon Ten Hague',
    description: 'Deelname aan de Ten Hague Hackathon, gericht op innovatieve IT-oplossingen voor sociale uitdagingen.',
    date: '22/02/2024 - 24/02/2024'
  };

  extraDevelopments: Development[] = [
    {
      title: 'Frag-o-matic 26.0: Counter Strike 2',
      description: 'Deelgenomen aan Frag-o-matic 26.0, een LAN-evenement gericht op gaming en technologie, specifiek in de Counter Strike 2 competitie.',
      details: [
        'Teamgebaseerde CS2 competitie met +500 deelnemers',
        'Netwerken met IT-professionals en gaming-enthousiasten',
        'Verbetering van teamcommunicatie en strategische planning onder druk',
        'Inzicht in high-performance gaming setups en netwerkarchitectuur'
      ],
      location: 'Wieze, Oktoberhallen',
      date: '28/02/2025 - 02/03/2025',
      images: ['assets/fom.jpeg']
    },
    {
      title: 'Giuliano\'s Genk',
      description: 'Studentenjob als pizzabakker bij Giuliano\'s in Genk, waar ik verantwoordelijk was voor het bereiden van pizza\'s en het coördineren van bestellingen.',
      details: [
        'Ontwikkeling van werkethiek en tijdmanagement',
        'Verbetering van communicatieve vaardigheden met klanten en collega\'s',
        'Leren werken onder druk tijdens piekmomenten',
        'Balanceren van studie en werk'
      ],
      location: 'Neerijstraat 41, 3600 Genk',
      date: '01/09/2020 - heden',
      images: ['assets/giulianoGenk.jpg']
    }
  ];

  studentEngagements: StudentSupport[] = [
    {
      name: 'Julio Montero',
      role: 'Graduaat student PXL',
      description: [
        'Bijles gegeven in C# programmeren en basis JavaScript',
        'Ondersteuning geboden bij projecten en praktische oefeningen',
        'Regelmatige feedback sessies om voortgang te monitoren',
        'Focus op praktische toepassingen van programmeerconcept'
      ]
    },
    {
      name: 'Robbe Broeders',
      role: 'AON student PXL',
      description: [
        'Geholpen met general IT knowledge en SQL',
        'Begeleiding bij het opzetten van een eerste database',
        'Uitleg over queries en data manipulatie',
        'Ondersteuning bij troubleshooting van technische problemen'
      ]
    }
  ];
  
  constructor(
    private dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document
  ) {}
  
  ngOnInit() {
    // Detecteer het huidige thema
    this.currentTheme = this.document.body.classList.contains('light-theme') 
      ? 'light-theme' 
      : 'dark-theme';
  }
  
  openDetailsDialog(item: any, type: ItemType): void {
    this.selectedItem = item;
    this.selectedType = type;
    
    // Detecteer het huidige thema opnieuw bij het openen
    this.currentTheme = this.document.body.classList.contains('light-theme') 
      ? 'light-theme' 
      : 'dark-theme';
    
    this.dialogRef = this.dialog.open(this.detailsDialog, {
      width: '700px',
      panelClass: [this.currentTheme, `${type}-dialog`],
      autoFocus: false
    });
  }
  
  openFullscreenImage(imageUrl: string): void {
    this.fullscreenImageUrl = imageUrl;
    
    // Open fullscreen dialoog voor de afbeelding
    this.fullscreenDialogRef = this.dialog.open(this.fullscreenImageDialog, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: 'auto',
      width: 'auto',
      panelClass: [this.currentTheme, 'fullscreen-image-dialog'],
      backdropClass: 'fullscreen-backdrop'
    });
  }
  
  closeFullscreenImage(): void {
    if (this.fullscreenDialogRef) {
      this.fullscreenDialogRef.close();
    }
  }
}
