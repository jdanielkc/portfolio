import { Injectable } from '@angular/core';

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly data = {
    es: {
      experiences: [
        {
          company: 'Red Empresarial de Servicios S.A',
          position: 'Ingeniero de Desarrollo',
          period: '10/2022 - Presente',
          description: [
            'Desarrollo FullStack de aplicaciones web y móviles, participando en el diseño, desarrollo y despliegue de integraciones a gran escala para empresas como Supergiros y Grupo Éxito',
            'Desarrollo y mantenimiento de proyectos en producción utilizando versiones LTS de Java (8, 11, 17) e implementación de protocolos de seguridad TLS/SSL y Mutual TLS',
            'Optimización de flujos de trabajo mejorando el diseño de bases de datos en Postgres y Oracle, asegurando la integridad y eficiencia de los datos',
            'Integración de sistemas mediante múltiples APIs REST y actualización de aplicaciones móviles con Angular, Spring Framework y Flutter',
            'Ejecución de pruebas de carga y pruebas unitarias con JMeter, JUnit, Mockito y Spring Test'
          ],
          technologies: ['Spring Framework', 'Java Spring Boot', 'Angular', 'JMeter', 'Azure', 'Microservicios', 'PL/SQL', 'SQL', 'Git', 'Docker', 'HTML', 'CSS', 'JavaScript']
        },
        {
          company: 'Accenture Colombia',
          position: 'Analytic and Big Data Intern',
          period: '01/2022 - 07/2022',
          description: [
            'Colaboración en el desarrollo, implementación y entrega de un modelo de machine learning para predecir el abandono de compras',
            'Optimización de modelos utilizando técnicas como Support Vector Machine, Random Forest y Deep Networks',
            'Desarrollo de bases de datos optimizadas para el entrenamiento de modelos de Machine Learning',
            'Diseño de dashboards en PowerBI para monitoreo de resultados'
          ],
          technologies: ['Python', 'NumPy', 'Apache Spark', 'Pandas', 'PowerBI', 'Machine Learning', 'Keras', 'TensorFlow']
        },
        {
          company: 'Diverjuegos SAS',
          position: 'Tecnólogo de Informática y Soporte',
          period: '01/2019 - 12/2021',
          description: [
            'Diseño, desarrollo e implementación de requerimientos de software y soporte técnico de la infraestructura tecnológica',
            'Diseño de arquitectura de microservicios para portal administrativo tipo wiki para capacitación de nuevos empleados',
            'Desarrollo de BackEnd y FrontEnd utilizando Spring Data, Spring Boot, Spring Gateway y Angular',
            'Creación de aplicación web SPA con Bootstrap, HTML, CSS y Angular',
            'Mantenimiento y soporte técnico en las distintas sedes de la empresa'
          ],
          technologies: ['Spring Framework', 'Java', 'Spring Boot', 'Angular', 'Docker', 'HTML', 'CSS', 'JavaScript', 'Seguridad Informática']
        }
      ],
      education: [
        {
          institution: 'Universidad de los Andes',
          degree: 'Maestría en Ingeniería de Software',
          period: '2024 - Presente',
          description: 'Actualmente curso el segundo semestre de la maestría, abarcando temas como ingeniería y arquitectura de software web, pruebas automatizadas, aplicaciones web, aplicaciones en la nube, entre otras.'
        },
        {
          institution: 'Universidad del Valle',
          degree: 'Ingeniería Electrónica',
          period: '2015 - 2023',
          description: 'Trabajo de grado: Clasificación de patologías cardiovasculares con máquinas de aprendizaje profundo a partir de señales ECG.'
        },
        {
          institution: 'Universidad Tecnológica de Pereira',
          degree: 'Diplomado en Programación Web',
          period: '2021',
          description: 'El diplomado abarcó 4 áreas: Python, JAVA, desarrollo de software y aplicaciones web a lo largo de 800 horas.'
        }
      ],
      projects: [
        {
          title: 'Sistema de Clasificación de Patologías Cardiovasculares',
          description: 'Diseño e implementación de un sistema de clasificación de patologías cardiovasculares utilizando redes neuronales recurrentes y convolucionales a partir de señales electrocardiográficas.',
          technologies: ['Python', 'Keras', 'TensorFlow', 'Deep Learning', 'Procesamiento de Señales ECG'],
          github: 'https://github.com/jdanielkc'
        },
        {
          title: 'Portal Wiki Administrativo con Microservicios',
          description: 'Arquitectura de microservicios para portal de documentación y capacitación de nuevos empleados con autenticación y gestión de contenidos.',
          technologies: ['Spring Boot', 'Spring Data', 'Spring Gateway', 'Angular', 'PostgreSQL', 'Docker'],
          github: 'https://github.com/jdanielkc'
        },
        {
          title: 'Modelo de Predicción de Abandono de Compras',
          description: 'Desarrollo de modelo de machine learning para predecir la probabilidad de abandono de compra utilizando técnicas de optimización y visualización en PowerBI.',
          technologies: ['Python', 'Scikit-learn', 'Random Forest', 'SVM', 'PowerBI', 'Apache Spark'],
          github: 'https://github.com/jdanielkc'
        },
        {
          title: 'Integraciones Empresariales de Gran Escala',
          description: 'Desarrollo y despliegue de integraciones para empresas como Supergiros y Grupo Éxito utilizando arquitectura de microservicios y patrones de diseño.',
          technologies: ['Java', 'Spring Framework', 'Angular', 'Flutter', 'PL/SQL', 'Oracle', 'Postgres'],
          github: 'https://github.com/jdanielkc'
        }
      ],
      skills: {
        technical: [
          { name: 'Java', level: 100 },
          { name: 'Git y GitHub', level: 100 },
          { name: 'SQL', level: 100 },
          { name: 'Spring Framework', level: 80 },
          { name: 'JMeter', level: 80 },
          { name: 'Angular', level: 80 },
          { name: 'PL/SQL', level: 80 },
          { name: 'HTML', level: 80 },
          { name: 'CSS', level: 80 },
          { name: 'Python', level: 80 },
          { name: 'Docker', level: 80 },
          { name: 'Maven', level: 80 },
          { name: 'AWS', level: 60 },
          { name: 'JavaScript', level: 60 }
        ],
        soft: [
          'Trabajo en equipo',
          'Curiosidad',
          'Iniciativa',
          'Adaptabilidad',
          'Gestión del tiempo',
          'Comunicación',
          'Resolución de Problemas',
          'Liderazgo'
        ]
      },
      contact: {
        email: 'jose.garcia960711@gmail.com',
        phone: '+57 317 863 1915',
        location: 'Cali, Colombia',
        linkedin: 'https://www.linkedin.com/in/jgarciaarias/',
        github: 'https://github.com/jdanielkc'
      },
      languages: [
        { name: 'Español', level: 100 },
        { name: 'Inglés', level: 60 }
      ],
      awards: [
        {
          title: 'Mejor Promedio Académico',
          issuer: 'Universidad del Valle - Programa de Ingeniería Electrónica',
          date: 'Agosto 2020 - Diciembre 2020',
          description: 'Reconocimiento por obtener el mejor promedio académico del semestre'
        },
        {
          title: 'Mejor Promedio Académico',
          issuer: 'Universidad del Valle - Programa de Ingeniería Electrónica',
          date: 'Octubre 2021 - Abril 2022',
          description: 'Reconocimiento por obtener el mejor promedio académico del semestre'
        }
      ],
      certifications: [
        {
          name: 'Simulacro de Prueba SFPC',
          issuer: 'AMV',
          date: '2023',
          icon: 'bi-award'
        },
        {
          name: 'Simulacro de Prueba SFC',
          issuer: 'AMV',
          date: '2023',
          icon: 'bi-award'
        },
        {
          name: 'AWS Cloud Practitioner',
          issuer: 'AWS',
          date: 'En curso',
          icon: 'bi-cloud'
        },
        {
          name: 'Control de versiones con Git y GitHub',
          issuer: 'Platzi',
          date: '2024',
          icon: 'bi-github'
        },
        {
          name: 'Curso de Diagramas de UML',
          issuer: 'Platzi',
          date: '2024',
          icon: 'bi-diagram-3'
        },
        {
          name: 'Curso de Python',
          issuer: 'Platzi',
          date: '2024',
          icon: 'bi-code-slash'
        },
        {
          name: 'Curso de PL/SQL',
          issuer: 'Platzi',
          date: '2023',
          icon: 'bi-database'
        },
        {
          name: 'Curso Profesional de Git y GitHub',
          issuer: 'Platzi',
          date: '2022',
          icon: 'bi-github'
        }
      ],
      software: [
        'Azure',
        'Microsoft Office',
        'Power BI',
        'Postman',
        'PostgreSQL',
        'LibreOffice',
        'LaTeX',
        'Keras',
        'Oracle Database',
        'JMeter',
        'Linux',
        'Windows',
        'Pandas'
      ]
    },
    en: {
      experiences: [
        {
          company: 'Red Empresarial de Servicios S.A',
          position: 'Development Engineer - FullStack Developer',
          period: '10/2022 - Present',
          description: [
            'Serve as a FullStack Developer in the design, development, and maintenance of web and mobile applications',
            'Participated in the design, development, and deployment of large-scale integrations for major companies such as Supergiros and Grupo Éxito',
            'Developed and maintained production projects using LTS versions of Java (8, 11, 17) and implemented TLS/SSL and Mutual TLS security protocols',
            'Optimized workflows by enhancing the design of databases in Postgres and Oracle',
            'Integrated systems through multiple REST APIs and contributed to updating the mobile application',
            'Conducted load testing and unit testing with JMeter, JUnit, Mockito, and Spring Test'
          ],
          technologies: ['Java', 'Spring Framework', 'Angular', 'JMeter', 'Azure', 'Microservices', 'PL/SQL', 'Git', 'GitLab', 'GitHub']
        },
        {
          company: 'Accenture Colombia',
          position: 'Analytic and Big Data Intern',
          period: '01/2022 - 07/2022',
          description: [
            'Served as a Junior Data Engineer, collaborating in the development and implementation of a machine learning model to predict purchase abandonment',
            'Optimized AI models through hyperparameter tuning using techniques such as SVM, Random Forest, and Deep Networks',
            'Developed optimized databases for training Machine Learning models',
            'Designed PowerBI dashboards for monitoring results'
          ],
          technologies: ['Python', 'NumPy', 'Apache Spark', 'Pandas', 'PowerBI', 'Machine Learning', 'Keras', 'TensorFlow']
        },
        {
          company: 'Diverjuegos SAS',
          position: 'IT Technician and Support',
          period: '01/2019 - 12/2021',
          description: [
            'Responsible for the design, development, and implementation of software requirements',
            'Designed the microservices architecture for an administrative wiki portal for documenting new employee training',
            'Developed both back-end and front-end using Spring Data, Spring Boot, Spring Gateway, and Angular',
            'Created a Single Page Application (SPA) using Bootstrap, HTML, CSS, and Angular',
            'Provided maintenance and technical support across company locations'
          ],
          technologies: ['Spring Framework', 'Java', 'Spring Boot', 'Angular', 'HTML', 'CSS', 'JavaScript']
        }
      ],
      education: [
        {
          institution: 'University of the Andes',
          degree: 'MSc in Software Engineering',
          period: '2024 - Present',
          description: 'Currently in the second semester, covering topics such as software and web architecture, automated testing, web applications, cloud applications'
        },
        {
          institution: 'University of the Valley',
          degree: 'Electronic Engineering',
          period: '2015 - 2023',
          description: 'Thesis: Classification of cardiovascular pathologies using deep learning techniques based on ECG signals'
        },
        {
          institution: 'Technological University of Pereira',
          degree: 'Diploma in Web Programming',
          period: '2021',
          description: 'The diploma covered 4 areas: Python, JAVA, software development, and web applications over 800 hours'
        }
      ],
      projects: [
        {
          title: 'Cardiovascular Pathology Classification System',
          description: 'Design and implementation of a classification system for cardiovascular pathologies using recurrent and convolutional neural networks based on ECG signals',
          technologies: ['Python', 'Keras', 'TensorFlow', 'Deep Learning', 'ECG Signal Processing'],
          github: 'https://github.com/jdanielkc'
        },
        {
          title: 'Administrative Wiki Portal with Microservices',
          description: 'Microservices architecture for documentation portal and training of new employees with authentication and content management',
          technologies: ['Spring Boot', 'Spring Data', 'Spring Gateway', 'Angular', 'PostgreSQL', 'Docker'],
          github: 'https://github.com/jdanielkc'
        },
        {
          title: 'Purchase Abandonment Prediction Model',
          description: 'Development of machine learning model to predict the probability of purchase abandonment using optimization techniques and PowerBI visualization',
          technologies: ['Python', 'Scikit-learn', 'Random Forest', 'SVM', 'PowerBI', 'Apache Spark'],
          github: 'https://github.com/jdanielkc'
        },
        {
          title: 'Large-Scale Enterprise Integrations',
          description: 'Development and deployment of integrations for companies such as Supergiros and Grupo Éxito using microservices architecture and design patterns',
          technologies: ['Java', 'Spring Framework', 'Angular', 'Flutter', 'PL/SQL', 'Oracle', 'Postgres'],
          github: 'https://github.com/jdanielkc'
        }
      ],
      skills: {
        technical: [
          { name: 'Java', level: 100 },
          { name: 'Git and GitHub', level: 100 },
          { name: 'SQL', level: 100 },
          { name: 'Spring Framework', level: 80 },
          { name: 'JMeter', level: 80 },
          { name: 'Angular', level: 80 },
          { name: 'PL/SQL', level: 80 },
          { name: 'HTML', level: 80 },
          { name: 'CSS', level: 80 },
          { name: 'Python', level: 80 },
          { name: 'Docker', level: 80 },
          { name: 'Maven', level: 80 },
          { name: 'AWS', level: 60 },
          { name: 'JavaScript', level: 60 }
        ],
        soft: [
          'Teamwork',
          'Curiosity',
          'Initiative',
          'Adaptability',
          'Time Management',
          'Communication',
          'Problem Solving',
          'Leadership'
        ]
      },
      contact: {
        email: 'jose.garcia960711@gmail.com',
        phone: '+57 317 863 1915',
        location: 'Cali, Colombia',
        linkedin: 'https://www.linkedin.com/in/jgarciaarias/',
        github: 'https://github.com/jdanielkc'
      },
      languages: [
        { name: 'Spanish', level: 100 },
        { name: 'English', level: 60 }
      ],
      awards: [
        {
          title: 'Best Academic Average',
          issuer: 'University of the Valley - Electronic Engineering Program',
          date: 'August 2020 - December 2020',
          description: 'Recognition for obtaining the best academic average of the semester'
        },
        {
          title: 'Best Academic Average',
          issuer: 'University of the Valley - Electronic Engineering Program',
          date: 'October 2021 - April 2022',
          description: 'Recognition for obtaining the best academic average of the semester'
        }
      ],
      certifications: [
        {
          name: 'Scrum Foundation Professional Certificate (SFPC)',
          issuer: 'CertiProf',
          date: '2023',
          icon: 'bi-award'
        },
        {
          name: 'Scrum Fundamentals Certified (SFC)',
          issuer: 'Scrumstudy',
          date: '2023',
          icon: 'bi-award'
        },
        {
          name: 'AWS Academy Cloud Foundations',
          issuer: 'Amazon Web Services',
          date: 'In Progress',
          icon: 'bi-cloud'
        },
        {
          name: 'Version Control with Git and GitHub',
          issuer: 'University of the Andes',
          date: '2024',
          icon: 'bi-github'
        },
        {
          name: 'Introduction to UML',
          issuer: 'University of the Andes',
          date: '2024',
          icon: 'bi-diagram-3'
        },
        {
          name: 'Python Programming',
          issuer: 'University of the Andes',
          date: '2024',
          icon: 'bi-code-slash'
        },
        {
          name: 'PL/SQL From Scratch',
          issuer: 'Udemy',
          date: '2023',
          icon: 'bi-database'
        },
        {
          name: 'Professional Git and GitHub Course',
          issuer: 'Platzi',
          date: '2022',
          icon: 'bi-github'
        }
      ],
      software: [
        'Azure',
        'Microsoft Office',
        'Power BI',
        'Postman',
        'PostgreSQL',
        'LibreOffice',
        'LaTeX',
        'Keras',
        'Oracle Database',
        'JMeter',
        'Linux',
        'Windows',
        'Pandas'
      ]
    }
  };

  getData(lang: 'en' | 'es') {
    return this.data[lang];
  }
}
