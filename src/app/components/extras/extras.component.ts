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
      images: ['https://media.discordapp.net/attachments/1206607342313934990/1357379764117307412/7B4CFAA4-6876-40EA-81F7-885D4078F26F.jpeg?ex=67effdea&is=67eeac6a&hm=4c0cbab06f442aaf33d35f350c709d57e06f7613c1a74cf24e658febd4a1d953&=&format=webp&width=1310&height=1280', 'https://media.discordapp.net/attachments/1206607342313934990/1357379271747960993/CEE3D2DE-E55C-406C-A543-5B7D7DB3037B_1_105_c.jpeg?ex=67effd75&is=67eeabf5&hm=b151c99637a7612bec4eafff5cf55634fc33d1db1907093157209573cece4be4&=&format=webp&width=2364&height=1330', 'https://media.discordapp.net/attachments/1206607342313934990/1357379960091705556/CleanShot_2025-04-03_at_17.42.582x.png?ex=67effe19&is=67eeac99&hm=5e656e0bf8418413b415e688f338296bf010f491fc0113079d3dee9a21e9e619&=&format=webp&quality=lossless&width=902&height=700']
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
      images: ['https://media.discordapp.net/attachments/1206607342313934990/1357379506813272084/A960DAF4-0F8A-4505-82AA-75B54BAF2F17_1_105_c.jpeg?ex=67effdad&is=67eeac2d&hm=60804b37848bebf37bb62aeaeffdedd6850409dd83bde0d100cd0651d2bd731f&=&format=webp&width=1356&height=1808', 'https://media.discordapp.net/attachments/1206607342313934990/1357379664154198026/CleanShot_2025-04-03_at_17.41.582x.png?ex=67effdd2&is=67eeac52&hm=4ec9b71f4ae78a05fb5cc6de3ae4b2a078bab4b0ffab4709957cd1023a8ad64b&=&format=webp&quality=lossless&width=1110&height=1808']
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
