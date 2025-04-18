import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ImageViewerItem {
  src: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageViewerService {
  private _visible = new BehaviorSubject<boolean>(false);
  private _currentImage = new BehaviorSubject<ImageViewerItem | null>(null);

  visible$ = this._visible.asObservable();
  currentImage$ = this._currentImage.asObservable();

  open(image: ImageViewerItem): void {
    this._currentImage.next(image);
    this._visible.next(true);
  }

  close(): void {
    this._visible.next(false);
  }
} 