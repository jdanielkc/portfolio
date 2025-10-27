import { Injectable, signal } from '@angular/core';

export interface Translation {
  nav: {
    home: string;
    about: string;
    experience: string;
    education: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    downloadCV: string;
    contactMe: string;
  };
  about: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
    present: string;
  };
  education: {
    title: string;
  };
  skills: {
    title: string;
    technical: string;
    soft: string;
  };
  projects: {
    title: string;
    viewProject: string;
  };
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLanguage = signal<'en' | 'es'>('es');

  private readonly translations: Record<'en' | 'es', Translation> = {
    es: {
      nav: {
        home: 'Inicio',
        about: 'Sobre Mí',
        experience: 'Experiencia',
        education: 'Educación',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto'
      },
      hero: {
        greeting: 'Hola, soy',
        name: 'Jose Daniel Garcia Arias',
        title: 'Ingeniero Electrónico | MSc en Ingeniería de Software',
        description: 'Ingeniero electrónico con experiencia en desarrollo de software. He participado en la integración de grandes empresas del país como Grupo Éxito y Supergiros. Mis fortalezas técnicas incluyen Java, Python, Spring, PL/SQL, y diversas tecnologías clave para el desarrollo web y móvil.',
        downloadCV: 'Descargar CV',
        contactMe: 'Contáctame'
      },
      about: {
        title: 'Sobre Mí',
        description: 'Soy un ingeniero electrónico con experiencia en desarrollo de software. He participado en la integración de grandes empresas del país, tales como Grupo Éxito y Supergiros. Mis fortalezas técnicas incluyen Java, Python, Spring, PL/SQL, y diversas tecnologías clave para el desarrollo web y móvil. Actualmente estoy cursando una Maestría en Ingeniería de Software, profundizando mis conocimientos en arquitectura de software, desarrollo web, testing automatizado y aplicaciones móviles. Mi enfoque consiste en traducir requisitos de negocio en soluciones técnicas efectivas, destacándome en el abordaje de desafíos complejos con una visión integral y especializada del ciclo de vida del desarrollo de software.'
      },
      experience: {
        title: 'Experiencia Profesional',
        present: 'Presente'
      },
      education: {
        title: 'Educación'
      },
      skills: {
        title: 'Habilidades',
        technical: 'Habilidades Técnicas',
        soft: 'Habilidades Blandas'
      },
      projects: {
        title: 'Proyectos',
        viewProject: 'Ver Proyecto'
      },
      contact: {
        title: 'Contacto',
        description: '¿Tienes un proyecto en mente? ¡Hablemos!',
        email: 'Correo',
        phone: 'Teléfono',
        location: 'Ubicación'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hello, I am',
        name: 'Jose Daniel Garcia Arias',
        title: 'Electronic Engineer | MSc in Software Engineering',
        description: 'Electronic engineer with experience in software development. I have participated in the integration of major companies in the country such as Grupo Éxito and Supergiros. My technical strengths include Java, Python, Spring, PL/SQL, and various key technologies for web and mobile development.',
        downloadCV: 'Download CV',
        contactMe: 'Contact Me'
      },
      about: {
        title: 'About Me',
        description: 'I am an electronic engineer with experience in software development. I have participated in the integration of major companies in the country, such as Grupo Éxito and Supergiros. My technical strengths include Java, Python, Spring, PL/SQL, and various key technologies for web and mobile development. I am currently pursuing an MSc in Software Engineering, deepening my knowledge in software architecture, web development, automated testing, and mobile applications. My approach is to translate business requirements into effective technical solutions, excelling in tackling complex challenges with a comprehensive and specialized vision of the software development lifecycle.'
      },
      experience: {
        title: 'Professional Experience',
        present: 'Present'
      },
      education: {
        title: 'Education'
      },
      skills: {
        title: 'Skills',
        technical: 'Technical Skills',
        soft: 'Soft Skills'
      },
      projects: {
        title: 'Projects',
        viewProject: 'View Project'
      },
      contact: {
        title: 'Contact',
        description: 'Have a project in mind? Let\'s talk!',
        email: 'Email',
        phone: 'Phone',
        location: 'Location'
      }
    }
  };

  getTranslations(): Translation {
    return this.translations[this.currentLanguage()];
  }

  setLanguage(lang: 'en' | 'es'): void {
    this.currentLanguage.set(lang);
  }
}
