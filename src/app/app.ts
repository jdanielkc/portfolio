import { Component, computed, signal, inject, OnInit, AfterViewInit, HostListener, DOCUMENT } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslationService } from './services/translation.service';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  private readonly translationService = inject(TranslationService);
  private readonly portfolioService = inject(PortfolioService);
  private readonly doc = inject(DOCUMENT);

  currentLanguage = this.translationService.currentLanguage;
  translations = computed(() => this.translationService.getTranslations());
  portfolioData = computed(() => this.portfolioService.getData(this.currentLanguage()));

  isMenuOpen = signal(false);
  isLanguageDropdownOpen = signal(false);
  activeSection = signal('home');
  currentYear = new Date().getFullYear();

  private readonly sections: string[] = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'certifications', 'contact'];
  private intersectionObserver?: IntersectionObserver;

  ngOnInit(): void {
    this.updateActiveSection();
  }

  ngAfterViewInit(): void {
    this.initIntersectionObserver();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-selector')) {
      this.isLanguageDropdownOpen.set(false);
    }
  }

  private initIntersectionObserver(): void {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            this.intersectionObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    this.doc.querySelectorAll('.animate-on-scroll').forEach(el => {
      this.intersectionObserver!.observe(el);
    });
  }

  private updateActiveSection(): void {
    const scrollPosition = window.scrollY + 100;

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.doc.getElementById(this.sections[i]);
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
    this.doc.documentElement.lang = lang;
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  toggleLanguageDropdown(): void {
    this.isLanguageDropdownOpen.update(value => !value);
  }

  scrollToSection(sectionId: string): void {
    const element = this.doc.getElementById(sectionId);
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
    window.open(cvUrl, '_blank', 'noopener,noreferrer');
  }
}
