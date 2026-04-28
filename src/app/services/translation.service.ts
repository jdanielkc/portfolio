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
    languages: string;
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
        certifications: 'Certificaciones',
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
        description: '<p>Soy un ingeniero electrónico con experiencia en desarrollo de software full stack y arquitectura cloud. He participado en la integración de importantes empresas del país, como Grupo Éxito, Supergiros y Carvajal Tecnología y Servicios. Mis fortalezas técnicas incluyen Java, Spring Boot, Angular, AWS, PL/SQL y arquitecturas modernas como Hexagonal y Orientada a Eventos.</p><p>Como Candidato a Magíster en Ingeniería de Software por la Universidad de los Andes, complemento mi experiencia técnica con conocimientos avanzados en arquitectura ágil, desarrollo nativo en la nube, pruebas automatizadas y prácticas DevOps.</p><p>A lo largo de mi carrera he trabajado traduciendo requisitos del negocio en soluciones técnicas efectivas, aplicando principios SOLID y Clean Code, optimizando recursos cloud y abordando desafíos complejos en distintos dominios del desarrollo de software. Mi formación multidisciplinaria me permite adaptarme a diversos contextos tecnológicos y contribuir en diferentes áreas de la ingeniería de software.</p>'
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
        soft: 'Habilidades Blandas',
        languages: 'Idiomas'
      },
      projects: {
        title: 'Proyectos',
        viewProject: 'Ver Proyecto'
      },
      contact: {
        title: 'Contacto',
        description: '',
        email: 'Correo',
        phone: 'Teléfono',
        location: 'Ubicación'
      },
      certifications: {
        title: 'Certificaciones'
      },
      awards: {
        title: 'Reconocimientos'
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
        certifications: 'Certifications',
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
        description: '<p>I am an electronic engineer with experience in full-stack software development and cloud architecture. I have participated in the integration of major companies in the country, such as Grupo Éxito, Supergiros, and Carvajal Tecnología y Servicios. My technical strengths include Java, Spring Boot, Angular, AWS, PL/SQL, and modern architectures such as Hexagonal and Event-Driven.</p><p>As a Master\'s candidate in Software Engineering at Universidad de los Andes, I complement my technical experience with advanced knowledge in agile architecture, cloud-native development, automated testing, and DevOps practices.</p><p>Throughout my career, I have worked translating business requirements into effective technical solutions, applying SOLID and Clean Code principles, optimizing cloud resources, and addressing complex challenges across different software development domains. My multidisciplinary background enables me to adapt to diverse technological contexts and contribute to various areas of software engineering.</p>'
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
        soft: 'Soft Skills',
        languages: 'Languages'
      },
      projects: {
        title: 'Projects',
        viewProject: 'View Project'
      },
      contact: {
        title: 'Contact',
        description: '',
        email: 'Email',
        phone: 'Phone',
        location: 'Location'
      },
      certifications: {
        title: 'Certifications'
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
  }
}
