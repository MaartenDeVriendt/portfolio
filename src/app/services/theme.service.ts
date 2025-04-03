import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light-theme' | 'dark-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>('dark-theme');
  public theme$ = this.themeSubject.asObservable();
  
  constructor() {
    // Verwijder alle bestaande theme classes
    document.body.classList.remove('light-theme', 'dark-theme');
    
    // Controleer op opgeslagen voorkeur
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      // Standaard dark theme toepassen als er geen voorkeur is opgeslagen
      this.setTheme('dark-theme');
    }
  }

  public setTheme(theme: Theme): void {
    // Opslaan in localStorage voor persistentie
    localStorage.setItem('theme', theme);
    
    // Update de observable
    this.themeSubject.next(theme);
    
    // Verwijder huidige theme class en voeg nieuwe toe
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
    
    console.log('Theme set to:', theme);
  }

  public toggleTheme(): void {
    const currentTheme = this.themeSubject.getValue();
    const newTheme: Theme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    this.setTheme(newTheme);
  }
}
