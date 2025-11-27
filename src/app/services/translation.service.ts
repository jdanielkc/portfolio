import { Injectable, signal } from '@angular/core';

export interface Translation {
  brand: string;
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
      brand: 'Portafolio',
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
        description: 'Ingeniero electrónico con experiencia en desarrollo de software full stack y arquitectura cloud. He participado en la integración de importantes empresas como Grupo Éxito, Supergiros y Carvajal Tecnología y Servicios. Mis fortalezas técnicas incluyen Java, Spring Boot, Angular, AWS, y arquitecturas modernas como Hexagonal y Orientada a Eventos.',
        downloadCV: 'Descargar CV',
        contactMe: 'Contáctame'
      },
      about: {
        title: 'Sobre Mí',
        description: '<p>Soy un ingeniero electrónico con experiencia en desarrollo de software full stack y arquitectura cloud. He participado en la integración de importantes empresas del país, como Grupo Éxito, Supergiros y Carvajal Tecnología y Servicios. Mis fortalezas técnicas incluyen Java, Spring Boot, Angular, AWS, PL/SQL y arquitecturas modernas como Hexagonal y Orientada a Eventos.</p><p>Actualmente curso el último semestre de mi Maestría en Ingeniería de Software en la Universidad de los Andes, profundizando mis conocimientos en arquitectura de software, desarrollo web, pruebas automatizadas y aplicaciones en la nube.</p><p>A lo largo de mi carrera he trabajado traduciendo requisitos del negocio en soluciones técnicas efectivas, aplicando principios SOLID y Clean Code, optimizando recursos cloud y abordando desafíos complejos en distintos dominios del desarrollo de software.</p>'
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
      brand: 'Portfolio',
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
        description: 'Electronic engineer with experience in full-stack software development and cloud architecture. I have participated in the integration of major companies such as Grupo Éxito, Supergiros, and Carvajal Tecnología y Servicios. My technical strengths include Java, Spring Boot, Angular, AWS, and modern architectures such as Hexagonal and Event-Driven.',
        downloadCV: 'Download CV',
        contactMe: 'Contact Me'
      },
      about: {
        title: 'About Me',
        description: '<p>I am an electronic engineer with experience in full-stack software development and cloud architecture. I have participated in the integration of major companies in the country, such as Grupo Éxito, Supergiros, and Carvajal Tecnología y Servicios. My technical strengths include Java, Spring Boot, Angular, AWS, PL/SQL, and modern architectures such as Hexagonal and Event-Driven.</p><p>I am currently in the final semester of my MSc in Software Engineering at Universidad de los Andes, deepening my knowledge in software architecture, web development, automated testing, and cloud applications.</p><p>Throughout my career, I have worked translating business requirements into effective technical solutions, applying SOLID and Clean Code principles, optimizing cloud resources, and addressing complex challenges across different software development domains.</p>'
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
