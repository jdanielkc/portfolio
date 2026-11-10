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
    certifications: string;
    contact: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    title: string;
    description: string;
    downloadCV: string;
    contactMe: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    pillarsTitle: string;
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
    software: string;
    soft: string;
    languages: string;
  };
  projects: {
    title: string;
    personalTitle: string;
    personalSubtitle: string;
    professionalTitle: string;
    professionalSubtitle: string;
    privateRepo: string;
  };
  footer: {
    rights: string;
  };
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
  };
  certifications: {
    title: string;
  };
  awards: {
    title: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private static readonly storageKey = 'portfolio-lang';

  currentLanguage = signal<'en' | 'es'>(TranslationService.detectInitialLanguage());

  private static detectInitialLanguage(): 'en' | 'es' {
    if (typeof window === 'undefined') {
      return 'es';
    }
    try {
      const saved = window.localStorage.getItem(TranslationService.storageKey);
      if (saved === 'en' || saved === 'es') {
        return saved;
      }
    } catch {
      // localStorage can be blocked (privacy mode); fall back to the browser language.
    }
    return window.navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
  }

  private readonly translations: Record<'en' | 'es', Translation> = {
    es: {
      brand: 'JDGA',
      nav: {
        home: 'Inicio',
        about: 'Sobre Mí',
        experience: 'Experiencia',
        education: 'Educación',
        skills: 'Habilidades',
        projects: 'Proyectos',
        certifications: 'Certificaciones',
        contact: 'Contacto'
      },
      hero: {
        badge: 'Desarrollador Senior Full Stack',
        greeting: 'Hola, soy',
        name: 'Jose Daniel Garcia Arias',
        title: 'Ingeniero Electrónico | MSc en Ingeniería de Software',
        description: 'Construyo sistemas con Java, Spring Boot, Angular y AWS bajo arquitecturas Hexagonal y Orientada a Eventos. Hoy trabajo en Carvajal Tecnología y Servicios en un sistema de gestión documental para Colombia, México y Perú.',
        downloadCV: 'Descargar CV',
        contactMe: 'Contáctame'
      },
      about: {
        title: 'Sobre Mí',
        subtitle: 'Ingeniería de software a gran escala, arquitectura cloud y liderazgo técnico',
        description: '<p>Soy <strong>Ingeniero Electrónico</strong> y <strong>Magíster en Ingeniería de Software por la Universidad de los Andes</strong>, con amplia experiencia en desarrollo de software full stack y arquitectura cloud. Trabajo en Carvajal Tecnología y Servicios y he participado en integraciones de gran escala para empresas del país como Grupo Éxito y Supergiros. Mis fortalezas técnicas incluyen Java, Spring Boot, Angular, AWS, PL/SQL y arquitecturas modernas como Hexagonal y Orientada a Eventos.</p><p>Mi formación de posgrado respalda mi experiencia práctica con conocimientos avanzados en arquitectura ágil, desarrollo nativo en la nube, pruebas automatizadas y prácticas DevOps.</p><p>A lo largo de mi carrera he trabajado traduciendo requisitos del negocio en soluciones técnicas efectivas, aplicando principios SOLID y Clean Code, optimizando recursos cloud y abordando desafíos complejos en distintos dominios del desarrollo de software. Mi perfil multidisciplinario me permite adaptarme a diversos contextos tecnológicos y liderar soluciones en diferentes áreas de la ingeniería de software.</p>',
        pillarsTitle: 'Pilares de Especialización'
      },
      experience: {
        title: 'Experiencia Profesional',
        present: 'Actualmente'
      },
      education: {
        title: 'Educación'
      },
      skills: {
        title: 'Competencias y Ecosistema Técnico',
        technical: 'Habilidades Duras',
        software: 'Cloud, DevOps y Herramientas',
        soft: 'Habilidades Blandas y Liderazgo',
        languages: 'Idiomas'
      },
      projects: {
        title: 'Proyectos',
        personalTitle: 'Proyectos propios y freelance',
        personalSubtitle: 'Productos que diseño y construyo de punta a punta',
        professionalTitle: 'Casos profesionales',
        professionalSubtitle: 'Algunos sistemas en los que trabajé como parte de un equipo',
        privateRepo: 'Repositorio privado · demo bajo solicitud'
      },
      footer: {
        rights: 'Todos los derechos reservados.'
      },
      contact: {
        title: 'Contacto',
        description: 'Disponible para liderar desafíos de arquitectura, desarrollo full stack e ingeniería cloud.',
        email: 'Correo',
        phone: 'Teléfono',
        location: 'Ubicación'
      },
      certifications: {
        title: 'Certificaciones y Cursos'
      },
      awards: {
        title: 'Reconocimientos'
      }
    },
    en: {
      brand: 'JDGA',
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        certifications: 'Certifications',
        contact: 'Contact'
      },
      hero: {
        badge: 'Senior Full Stack Developer',
        greeting: 'Hello, I am',
        name: 'Jose Daniel Garcia Arias',
        title: 'Electronic Engineer | MSc in Software Engineering',
        description: 'I build systems with Java, Spring Boot, Angular, and AWS using Hexagonal and Event-Driven architectures. I currently work at Carvajal Tecnología y Servicios on a document management system for Colombia, Mexico, and Peru.',
        downloadCV: 'Download CV',
        contactMe: 'Contact Me'
      },
      about: {
        title: 'About Me',
        subtitle: 'Large-scale software engineering, cloud architecture, and technical leadership',
        description: '<p>I am an <strong>Electronic Engineer</strong> and hold a <strong>Master\'s degree in Software Engineering from Universidad de los Andes</strong>, with extensive experience in full-stack software development and cloud architecture. I work at Carvajal Tecnología y Servicios and have taken part in large-scale integrations for major Colombian companies such as Grupo Éxito and Supergiros. My technical strengths include Java, Spring Boot, Angular, AWS, PL/SQL, and modern architectures such as Hexagonal and Event-Driven.</p><p>My postgraduate background backs my practical experience with advanced knowledge in agile architecture, cloud-native development, automated testing, and DevOps practices.</p><p>Throughout my career, I have worked translating business requirements into effective technical solutions, applying SOLID and Clean Code principles, optimizing cloud resources, and addressing complex challenges across different software development domains. My multidisciplinary profile enables me to adapt to diverse technological contexts and lead solutions across different areas of software engineering.</p>',
        pillarsTitle: 'Core Engineering Pillars'
      },
      experience: {
        title: 'Professional Experience',
        present: 'Present'
      },
      education: {
        title: 'Education'
      },
      skills: {
        title: 'Technical Stack & Competencies',
        technical: 'Core Technical Skills',
        software: 'Cloud, DevOps & Tooling',
        soft: 'Leadership & Soft Skills',
        languages: 'Languages'
      },
      projects: {
        title: 'Projects',
        personalTitle: 'Own & Freelance Projects',
        personalSubtitle: 'Products I design and build end to end',
        professionalTitle: 'Professional Work',
        professionalSubtitle: 'Systems I worked on as part of a team',
        privateRepo: 'Private repository · demo on request'
      },
      footer: {
        rights: 'All rights reserved.'
      },
      contact: {
        title: 'Contact',
        description: 'Available for software architecture, senior full-stack development, and cloud engineering opportunities.',
        email: 'Email',
        phone: 'Phone',
        location: 'Location'
      },
      certifications: {
        title: 'Certifications & Courses'
      },
      awards: {
        title: 'Awards'
      }
    }
  };

  getTranslations(): Translation {
    return this.translations[this.currentLanguage()];
  }

  setLanguage(lang: 'en' | 'es'): void {
    this.currentLanguage.set(lang);
    try {
      window.localStorage.setItem(TranslationService.storageKey, lang);
    } catch {
      // Ignore: the choice just won't persist between visits.
    }
  }
}
