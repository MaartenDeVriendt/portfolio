import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerService } from '../../../services/image-viewer.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
    <div class="image-viewer-overlay" *ngIf="(service.visible$ | async)" (click)="closeOnOverlayClick($event)">
      <div class="image-viewer-content">
        <div class="image-container">
          <img [src]="(service.currentImage$ | async)?.src" [alt]="(service.currentImage$ | async)?.description" />
        </div>
        <div class="image-description">
          <p>{{ (service.currentImage$ | async)?.description }}</p>
          <button mat-icon-button class="close-button" (click)="service.close()">
            <mat-icon>close</mat-icon>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .image-viewer-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 1rem;
    }

    .image-viewer-content {
      display: flex;
      flex-direction: column;
      max-width: 90vw;
      max-height: 90vh;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
    }

    .image-container {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: auto;
      max-height: 80vh;
    }

    .image-container img {
      max-width: 100%;
      max-height: 80vh;
      object-fit: contain;
    }

    .image-description {
      background-color: rgba(30, 30, 30, 0.8);
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      body.light-theme & {
        background-color: rgba(245, 245, 245, 0.9);
        color: #333;
      }
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;

      body.light-theme & {
        background-color: rgba(255, 255, 255, 0.8);
        color: #333;
      }
    }
  `]
})
export class ImageViewerComponent {
  constructor(public service: ImageViewerService) {}

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    this.service.close();
  }

  closeOnOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('image-viewer-overlay')) {
      this.service.close();
    }
  }
} 