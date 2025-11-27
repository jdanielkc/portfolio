import { Component, computed, signal, inject, OnInit, HostListener } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslationService } from './services/translation.service';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly translationService = inject(TranslationService);
  private readonly portfolioService = inject(PortfolioService);

  currentLanguage = this.translationService.currentLanguage;
  translations = computed(() => this.translationService.getTranslations());
  portfolioData = computed(() => this.portfolioService.getData(this.currentLanguage()));

  isMenuOpen = signal(false);
  isLanguageDropdownOpen = signal(false);
  activeSection = signal('home');

  private readonly sections: string[] = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact'];

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const scrollPosition = window.scrollY + 100; // offset for navbar

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          this.activeSection.set(this.sections[i]);
          break;
        }
      }
    }
  }

  changeLanguage(lang: 'en' | 'es'): void {
    this.translationService.setLanguage(lang);
    this.isLanguageDropdownOpen.set(false);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  toggleLanguageDropdown(): void {
    this.isLanguageDropdownOpen.update(value => !value);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection.set(sectionId);
      this.isMenuOpen.set(false);
    }
  }

  downloadCV(): void {
    const cvUrl = this.currentLanguage() === 'es'
      ? 'https://drive.google.com/file/d/1k3cqvcsVNKJ7SZRRnjUJAMzixq-g9-DA/view?usp=sharing'
      : 'https://drive.google.com/file/d/120eapGxC6EBrFAQNcFlYXm9tRVrue1sS/view?usp=sharing';
    window.open(cvUrl, '_blank');
  }
}
