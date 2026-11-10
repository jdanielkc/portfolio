import { Injectable } from '@angular/core';

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  logo?: string;
}

export type ProjectStatus = 'production' | 'development' | 'design' | 'completed';

export interface Project {
  title: string;
  category: 'personal' | 'professional';
  context: string;
  status?: ProjectStatus;
  statusLabel?: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  icon: string;
  image?: string;
  github?: string;
  privateRepo?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  tier: string;
}

export interface Highlight {
  value: string;
  label: string;
  detail: string;
  icon: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
  tags: string[];
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
      highlights: [
        {
          value: '+5 Años',
          label: 'En Tecnología y Software',
          detail: 'Desde 2019: Full Stack, Cloud y Datos',
          icon: 'bi-briefcase-fill'
        },
        {
          value: 'MSc',
          label: 'Ingeniería de Software',
          detail: 'Universidad de los Andes (2026)',
          icon: 'bi-mortarboard-fill'
        },
        {
          value: '3 Países',
          label: 'Impacto Regional',
          detail: 'Sistemas en Colombia, México y Perú',
          icon: 'bi-globe-americas'
        },
        {
          value: 'Cloud & Arch',
          label: 'Arquitectura Moderna',
          detail: 'AWS, Hexagonal, Event-Driven y SOLID',
          icon: 'bi-cloud-check-fill'
        }
      ],
      pillars: [
        {
          title: 'Arquitectura Backend & Microservicios',
          description: 'Diseño y construcción de sistemas desacoplados, resilientes y escalables bajo principios SOLID, Clean Code y patrones empresariales.',
          icon: 'bi-diagram-3-fill',
          tags: ['Java (8/11/17)', 'Spring Boot', 'Hexagonal', 'Event-Driven', 'SAGA']
        },
        {
          title: 'Ingeniería Cloud & DevOps',
          description: 'Despliegue nativo en la nube, orquestación de contenedores y optimización de costos operativos mediante gestión inteligente del ciclo de vida.',
          icon: 'bi-cloud-arrow-up-fill',
          tags: ['AWS EKS / ECS', 'S3 Glacier / Deep Archive', 'Cognito / IAM', 'Docker', 'CI/CD']
        },
        {
          title: 'Desarrollo Full Stack & Integración',
          description: 'Integraciones transaccionales de gran escala y aplicaciones web modernas con comunicación segura bajo estándares corporativos.',
          icon: 'bi-layers-fill',
          tags: ['Angular', 'TypeScript', 'REST APIs', 'TLS/SSL & mTLS', 'PostgreSQL / Oracle']
        },
        {
          title: 'Calidad de Software & Liderazgo Ágil',
          description: 'Aseguramiento de atributos de calidad críticos (disponibilidad, rendimiento, seguridad) mediante pruebas automatizadas y liderazgo técnico en Scrum.',
          icon: 'bi-shield-check',
          tags: ['JUnit / Mockito', 'JMeter', 'Scrum', 'Clean Code', 'Liderazgo Técnico']
        }
      ],
      experiences: [
        {
          company: 'Carvajal Tecnología y Servicios',
          position: 'Desarrollador Senior Profesional',
          period: '05/2025 - Actualmente',
          description: [
            'Participación en un equipo de desarrollo de alto nivel en la construcción y evolución de un sistema de gestión documental regional (Colombia, México y Perú), enfocado en soluciones full stack, optimización cloud y estándares de calidad de software',
            'Implementación de estrategias de almacenamiento eficiente en AWS (S3 Deep Archive, Glacier), logrando una reducción de costos operativa mediante la gestión inteligente del ciclo de vida de la información',
            'Desarrollo de componentes bajo arquitectura Hexagonal y Orientada a Eventos, desplegados en servicios de contenedores (EKS, ECS) y gestionados mediante servicios de identidad (AWS Cognito, IAM)',
            'Aplicación de principios SOLID, Clean Code y patrones de diseño en un entorno de metodologías ágiles, asegurando la mantenibilidad y escalabilidad del código entregado'
          ],
          technologies: ['Java', 'Spring Boot', 'Angular', 'AWS (S3, EKS, ECS, IAM, Cognito)', 'Arquitectura Hexagonal', 'Event-Driven Architecture', 'TypeScript', 'Scrum', 'HTML', 'CSS'],
          logo: 'assets/images/companies/cts_logo.jpg'
        },
        {
          company: 'Red Empresarial de Servicios S.A. (Supergiros)',
          position: 'Ingeniero de Desarrollo',
          period: '10/2022 - 05/2025',
          description: [
            'Desarrollador FullStack en integraciones de gran escala (Supergiros, Grupo Éxito) bajo Scrum, ejerciendo liderazgo técnico con principios SOLID y patrones de arquitectura (MVC, SAGA) en soluciones web y móviles',
            'Desarrollo seguro en Java LTS (8, 11, 17) implementando protocolos TLS/SSL y mTLS',
            'Diseño y optimización de bases de datos (Postgres, Oracle) asegurando integridad y eficiencia',
            'Integración de sistemas vía API REST y migración móvil a stack moderno (Angular, Spring, Flutter)',
            'Ejecución de pruebas de carga y unitarias (JMeter, JUnit, Mockito, Spring Test)'
          ],
          technologies: ['Java', 'Spring Boot', 'Angular', 'PL/SQL', 'Oracle/Postgres', 'Docker', 'Azure', 'Microservicios', 'JMeter', 'Git/SVN/Flow', 'CI/CD'],
          logo: 'assets/images/companies/supergiros_logo.svg'
        },
        {
          company: 'Accenture Colombia',
          position: 'Analytic and Big Data Intern',
          period: '01/2022 - 07/2022',
          description: [
            'Ingeniero de datos junior colaborando en el desarrollo, implementación y entrega de un modelo de aprendizaje automático para predecir la probabilidad de abandono de compra',
            'Optimización de modelos utilizando técnicas como Support Vector Machine, Random Forest y Deep Networks mediante ajuste de hiperparámetros',
            'Desarrollo de bases de datos optimizadas para el entrenamiento de modelos de Machine Learning',
            'Diseño de dashboards en Power BI para la visualización y monitoreo de resultados'
          ],
          technologies: ['Python', 'NumPy', 'Inteligencia Artificial', 'Apache Spark', 'Pandas', 'Power BI', 'Machine Learning', 'Keras', 'TensorFlow'],
          logo: 'assets/images/companies/accenture_colombia_logo.jpeg'
        },
        {
          company: 'Diverjuegos SAS',
          position: 'Tecnólogo de Informática y Soporte',
          period: '01/2019 - 12/2021',
          description: [
            'Responsable del diseño, desarrollo e implementación de requerimientos de software, soporte técnico de la infraestructura tecnológica y supervisión de seguridad informática',
            'Diseño de la arquitectura de microservicios para un portal administrativo tipo wiki, destinado a documentar las capacitaciones de nuevos empleados',
            'Desarrollo del BackEnd y FrontEnd utilizando Spring Data, Spring Boot, Spring Gateway y Angular',
            'Mantenimiento y soporte técnico en las distintas sedes de la empresa'
          ],
          technologies: ['Spring Framework', 'Java', 'Spring Boot', 'Angular', 'Docker', 'Seguridad Informática', 'Diseño de Sistemas IP', 'HTML', 'CSS', 'JavaScript'],
          logo: 'assets/images/companies/Diverjuegos_logo.png'
        }
      ],
      education: [
        {
          institution: 'Universidad de los Andes',
          degree: 'Maestría en Ingeniería de Software',
          period: '2024 - 2026',
          description: 'Formación avanzada en el diseño, construcción y evolución de sistemas de software complejos a gran escala. Especialización en arquitecturas ágiles y nativas de la nube orientadas a atributos de calidad críticos (escalabilidad, disponibilidad, seguridad y resiliencia), ingeniería de pruebas automatizadas, prácticas DevOps (CI/CD) y liderazgo técnico de equipos bajo metodologías ágiles.',
          logo: 'assets/images/universities/universidad-de-los-andes-logo.png'
        },
        {
          institution: 'Universidad del Valle',
          degree: 'Ingeniería Electrónica',
          period: '2015 - 2023',
          description: 'Trabajo de grado: Clasificación de patologías cardiovasculares con máquinas de aprendizaje profundo a partir de señales ECG.',
          logo: 'assets/images/universities/universidad-del-valle-logo.png'
        },
        {
          institution: 'Universidad Tecnológica de Pereira',
          degree: 'Diplomado en Programación Web',
          period: '2021',
          description: 'El diplomado abarcó 4 áreas: Python, Java, desarrollo de software y aplicaciones web a lo largo de 800 horas.',
          logo: 'assets/images/universities/universidad_tecnologica_pereira_logo.png'
        }
      ],
      projects: [
        {
          title: 'AG Project Manager',
          category: 'personal',
          context: 'Proyecto propio · Sector inmobiliario',
          status: 'production',
          statusLabel: 'En producción',
          description: 'Sistema de gestión de proyectos y operación para el sector inmobiliario: tableros Kanban por empresa y área, inventario de inmuebles, calendario con recordatorios, organigrama y dashboard de productividad.',
          highlights: [
            'Monolito modular con Spring Modulith (11 módulos con fronteras verificadas en tests) y microservicios de notificaciones y auditoría',
            'Outbox transaccional hacia RabbitMQ, correos disparados por eventos y auditoría append-only en MongoDB',
            'Multi-empresa con permisos granulares, API Gateway con JWT y despliegue on-premise con Docker Compose y TLS'
          ],
          technologies: ['Java 25', 'Spring Boot 4', 'Spring Modulith', 'Spring Cloud Gateway', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'MinIO', 'Angular 21', 'Docker'],
          icon: 'bi-kanban-fill',
          privateRepo: true
        },
        {
          title: 'LegalBridge',
          category: 'personal',
          context: 'Proyecto propio',
          status: 'development',
          statusLabel: 'En desarrollo',
          description: 'Plataforma para trámites vehiculares en Colombia: toma los datos del vehículo desde el RUNT con extracción asistida por el operador, registra consentimiento y auditoría según la Ley 1581 y genera contratos de compraventa en PDF.',
          highlights: [
            'API Gateway y 4 microservicios con arquitectura hexagonal validada con ArchUnit, una base de datos por servicio y eventos sobre RabbitMQ',
            'Extensión de Chrome (Manifest V3) que solo lee lo que el portal ya entregó: el operador resuelve el CAPTCHA y dispara cada acción',
            'Ninguna ingesta se guarda sin consentimiento vigente (fail-closed); contratos finales con hash SHA-256 en Cloudflare R2'
          ],
          technologies: ['Java 25', 'Spring Boot 4', 'Spring Cloud Gateway', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'Keycloak', 'Angular 21', 'Docker', 'Cloudflare R2'],
          icon: 'bi-file-earmark-lock2-fill',
          privateRepo: true
        },
        {
          title: 'AssistantAI',
          category: 'personal',
          context: 'Proyecto propio',
          status: 'design',
          statusLabel: 'En diseño',
          description: 'Asistente de WhatsApp que agenda, reprograma y cancela citas médicas sobre la API de Saludtools, con panel web para el profesional y paso a una persona cuando el bot no debe responder.',
          highlights: [
            'El LLM solo interpreta y redacta: la disponibilidad, las reservas y las confirmaciones las decide el backend',
            'Motor de disponibilidad propio y cero dobles reservas mediante restricciones EXCLUDE en PostgreSQL',
            'Monolito modular hexagonal con Spring Modulith y proveedor de LLM intercambiable con Spring AI'
          ],
          technologies: ['Java 21', 'Spring Boot 3', 'Spring Modulith', 'Spring AI', 'Gemini', 'PostgreSQL', 'WhatsApp Cloud API'],
          icon: 'bi-chat-dots-fill'
        },
        {
          title: 'Clasificación de Patologías Cardiovasculares',
          category: 'personal',
          context: 'Trabajo de grado · Universidad del Valle',
          status: 'completed',
          statusLabel: 'Finalizado',
          description: 'Sistema de clasificación de patologías cardiovasculares con redes neuronales recurrentes y convolucionales a partir de señales electrocardiográficas (ECG).',
          technologies: ['Python', 'Keras', 'TensorFlow', 'Deep Learning', 'Señales ECG'],
          icon: 'bi-heart-pulse-fill',
          image: 'assets/images/projects/ecg-classification.png',
          github: 'https://github.com/jdanielkc/DeteccionECG'
        },
        {
          title: 'Gestión Documental Regional',
          category: 'professional',
          context: 'Carvajal Tecnología y Servicios',
          description: 'Sistema de gestión documental para Colombia, México y Perú, con almacenamiento por ciclo de vida en AWS (S3 Glacier / Deep Archive) y arquitectura Hexagonal y Orientada a Eventos.',
          technologies: ['Java', 'Spring Boot', 'Angular', 'AWS (S3, EKS, ECS, Cognito, IAM)', 'Event-Driven'],
          icon: 'bi-cloud-haze2-fill'
        },
        {
          title: 'Integraciones Empresariales',
          category: 'professional',
          context: 'Red Empresarial de Servicios (Supergiros)',
          description: 'Integraciones para Supergiros y Grupo Éxito con comunicación segura TLS/mTLS, patrones MVC y SAGA, y migración móvil a Angular, Spring y Flutter.',
          technologies: ['Java', 'Spring Boot', 'Angular', 'Flutter', 'Oracle', 'PostgreSQL', 'JMeter'],
          icon: 'bi-diagram-3-fill'
        },
        {
          title: 'Predicción de Abandono de Compra',
          category: 'professional',
          context: 'Accenture Colombia',
          description: 'Modelo de Machine Learning para predecir el abandono de compra, con ajuste de hiperparámetros y dashboards en Power BI.',
          technologies: ['Python', 'Random Forest', 'SVM', 'Apache Spark', 'Power BI'],
          icon: 'bi-graph-up-arrow'
        }
      ] as Project[],
      skills: {
        technical: [
          { name: 'Java', level: 5, tier: 'Experto' },
          { name: 'Git y GitHub', level: 5, tier: 'Experto' },
          { name: 'SQL', level: 5, tier: 'Experto' },
          { name: 'AWS', level: 4, tier: 'Avanzado' },
          { name: 'Spring Framework', level: 4, tier: 'Avanzado' },
          { name: 'JMeter', level: 4, tier: 'Avanzado' },
          { name: 'Angular', level: 4, tier: 'Avanzado' },
          { name: 'PL/SQL', level: 4, tier: 'Avanzado' },
          { name: 'HTML', level: 4, tier: 'Avanzado' },
          { name: 'CSS', level: 4, tier: 'Avanzado' },
          { name: 'Python', level: 4, tier: 'Avanzado' },
          { name: 'Docker', level: 4, tier: 'Avanzado' },
          { name: 'Maven / Gradle', level: 4, tier: 'Avanzado' },
          { name: 'JavaScript', level: 3, tier: 'Intermedio' }
        ] as Skill[],
        soft: [
          'Trabajo en equipo',
          'Liderazgo',
          'Resolución de Problemas',
          'Comunicación',
          'Adaptabilidad',
          'Gestión del tiempo',
          'Iniciativa',
          'Curiosidad'
        ]
      },
      contact: {
        email: 'jose.garcia960711@gmail.com',
        phone: '+57 317 863 1915',
        location: 'Cali, Colombia (Disponible para viajes y traslado)',
        linkedin: 'https://www.linkedin.com/in/jgarciaarias/',
        github: 'https://github.com/jdanielkc'
      },
      languages: [
        { name: 'Español', level: 5, tier: 'Nativo' },
        { name: 'Inglés', level: 3, tier: 'Intermedio-alto' }
      ] as Skill[],
      awards: [
        {
          title: 'Distinción al Mejor Promedio Académico',
          issuer: 'Universidad del Valle - Ingeniería Electrónica',
          date: '08/2020 - 12/2020',
          description: 'Reconocimiento al mejor promedio académico del semestre.'
        },
        {
          title: 'Distinción al Mejor Promedio Académico',
          issuer: 'Universidad del Valle - Ingeniería Electrónica',
          date: '10/2021 - 04/2022',
          description: 'Reconocimiento al mejor promedio académico del semestre.'
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
          name: 'Control de versiones con Git y GitHub',
          issuer: 'Universidad de los Andes',
          date: '2024',
          icon: 'bi-github'
        },
        {
          name: 'Introducción a UML',
          issuer: 'Universidad de los Andes',
          date: '2024',
          icon: 'bi-diagram-3'
        },
        {
          name: 'PL/SQL Desde Cero',
          issuer: 'Udemy',
          date: '2023',
          icon: 'bi-database'
        },
        {
          name: 'Python for Everybody (Specialization)',
          issuer: 'University of Michigan',
          date: '2022',
          icon: 'bi-code-slash'
        }
      ],
      software: [
        'Kubernetes (EKS)',
        'AWS ECS / S3',
        'AWS Cognito',
        'Azure',
        'CI/CD',
        'TypeScript',
        'PostgreSQL',
        'Oracle DB',
        'JUnit / Mockito',
        'Postman',
        'Power BI',
        'Apache Spark',
        'Linux'
      ]
    },
    en: {
      highlights: [
        {
          value: '5+ Years',
          label: 'In Technology & Software',
          detail: 'Since 2019: Full-Stack, Cloud & Data',
          icon: 'bi-briefcase-fill'
        },
        {
          value: 'MSc',
          label: 'Software Engineering',
          detail: 'Universidad de los Andes (2026)',
          icon: 'bi-mortarboard-fill'
        },
        {
          value: '3 Countries',
          label: 'Regional Footprint',
          detail: 'Systems across Colombia, Mexico & Peru',
          icon: 'bi-globe-americas'
        },
        {
          value: 'Cloud & Arch',
          label: 'Modern Architecture',
          detail: 'AWS, Hexagonal, Event-Driven & SOLID',
          icon: 'bi-cloud-check-fill'
        }
      ],
      pillars: [
        {
          title: 'Backend & Microservices Architecture',
          description: 'Design and construction of decoupled, resilient, and scalable systems under SOLID principles, Clean Code, and enterprise patterns.',
          icon: 'bi-diagram-3-fill',
          tags: ['Java (8/11/17)', 'Spring Boot', 'Hexagonal', 'Event-Driven', 'SAGA']
        },
        {
          title: 'Cloud Engineering & DevOps',
          description: 'Cloud-native deployment, container orchestration, and operational cost optimization through intelligent information lifecycle management.',
          icon: 'bi-cloud-arrow-up-fill',
          tags: ['AWS EKS / ECS', 'S3 Glacier / Deep Archive', 'Cognito / IAM', 'Docker', 'CI/CD']
        },
        {
          title: 'Full-Stack Development & Integration',
          description: 'Large-scale transactional integrations and modern web applications with secure communication protocols under corporate standards.',
          icon: 'bi-layers-fill',
          tags: ['Angular', 'TypeScript', 'REST APIs', 'TLS/SSL & mTLS', 'PostgreSQL / Oracle']
        },
        {
          title: 'Software Quality & Agile Leadership',
          description: 'Assurance of critical quality attributes (availability, performance, security) through automated testing and technical leadership in Scrum.',
          icon: 'bi-shield-check',
          tags: ['JUnit / Mockito', 'JMeter', 'Scrum', 'Clean Code', 'Technical Leadership']
        }
      ],
      experiences: [
        {
          company: 'Carvajal Tecnología y Servicios',
          position: 'Senior Professional Developer',
          period: '05/2025 - Present',
          description: [
            'Part of a high-level development team building and evolving a regional document management system (Colombia, Mexico, and Peru), focusing on full-stack solutions, cloud resource optimization, and software quality standards',
            'Implementation of efficient storage strategies in AWS (S3 Deep Archive, Glacier), achieving operational cost reduction through intelligent information lifecycle management',
            'Development of components under Hexagonal and Event-Driven Architecture, deployed in container services (EKS, ECS) and managed via identity services (AWS Cognito, IAM)',
            'Application of SOLID principles, Clean Code, and design patterns in an agile environment, ensuring code maintainability and scalability'
          ],
          technologies: ['Java', 'Spring Boot', 'Angular', 'AWS (S3, EKS, ECS, IAM, Cognito)', 'Hexagonal Architecture', 'Event-Driven Architecture', 'TypeScript', 'Scrum', 'HTML', 'CSS'],
          logo: 'assets/images/companies/cts_logo.jpg'
        },
        {
          company: 'Red Empresarial de Servicios S.A. (Supergiros)',
          position: 'Development Engineer',
          period: '10/2022 - 05/2025',
          description: [
            'FullStack Developer in large-scale integrations (Supergiros, Grupo Éxito) using Scrum. Technical leadership applying SOLID principles and architecture patterns (MVC, SAGA) in web and mobile solutions',
            'Secure development in Java LTS (8, 11, 17) implementing TLS/SSL and mTLS protocols',
            'Design and optimization of databases (Postgres, Oracle) ensuring integrity and efficiency',
            'System integration via REST APIs and mobile migration to modern stack (Angular, Spring, Flutter)',
            'Execution of load and unit testing (JMeter, JUnit, Mockito, Spring Test)'
          ],
          technologies: ['Java', 'Spring Boot', 'Angular', 'PL/SQL', 'Oracle/Postgres', 'Docker', 'Azure', 'Microservices', 'JMeter', 'Git/SVN/Flow', 'CI/CD'],
          logo: 'assets/images/companies/supergiros_logo.svg'
        },
        {
          company: 'Accenture Colombia',
          position: 'Analytic and Big Data Intern',
          period: '01/2022 - 07/2022',
          description: [
            'Served as a Junior Data Engineer, collaborating in the development, implementation, and delivery of a machine learning model to predict purchase abandonment',
            'Optimized AI models through hyperparameter tuning using techniques such as Support Vector Machine, Random Forest, and Deep Networks',
            'Developed optimized databases for training Machine Learning models',
            'Designed Power BI dashboards for visualizing and monitoring results'
          ],
          technologies: ['Python', 'NumPy', 'Artificial Intelligence', 'Apache Spark', 'Pandas', 'Power BI', 'Machine Learning', 'Keras', 'TensorFlow'],
          logo: 'assets/images/companies/accenture_colombia_logo.jpeg'
        },
        {
          company: 'Diverjuegos SAS',
          position: 'IT Technician and Support',
          period: '01/2019 - 12/2021',
          description: [
            'Responsible for the design, development, and implementation of software requirements, as well as technical support for technological infrastructure and information security oversight',
            'Designed the microservices architecture for an administrative wiki portal aimed at documenting new employee training',
            'Developed both back-end and front-end using Spring Data, Spring Boot, Spring Gateway, and Angular',
            'Provided maintenance and technical support across the company\'s various locations'
          ],
          technologies: ['Spring Framework', 'Java', 'Spring Boot', 'Angular', 'Docker', 'Information Security', 'IP Systems Design', 'HTML', 'CSS', 'JavaScript'],
          logo: 'assets/images/companies/Diverjuegos_logo.png'
        }
      ],
      education: [
        {
          institution: 'Universidad de los Andes',
          degree: 'MSc in Software Engineering',
          period: '2024 - 2026',
          description: 'Advanced training in the design, construction, and evolution of complex large-scale software systems. Specialization in agile and cloud-native architectures oriented toward critical quality attributes (scalability, availability, security, and resilience), automated testing engineering, DevOps practices (CI/CD), and technical team leadership under agile methodologies.',
          logo: 'assets/images/universities/universidad-de-los-andes-logo.png'
        },
        {
          institution: 'Universidad del Valle',
          degree: 'Electronic Engineering',
          period: '2015 - 2023',
          description: 'Thesis: Classification of cardiovascular pathologies using deep learning techniques based on ECG signals.',
          logo: 'assets/images/universities/universidad-del-valle-logo.png'
        },
        {
          institution: 'Universidad Tecnológica de Pereira',
          degree: 'Diploma in Web Programming',
          period: '2021',
          description: 'The diploma covered 4 areas: Python, Java, software development, and web applications over 800 hours.',
          logo: 'assets/images/universities/universidad_tecnologica_pereira_logo.png'
        }
      ],
      projects: [
        {
          title: 'AG Project Manager',
          category: 'personal',
          context: 'Own project · Real estate sector',
          status: 'production',
          statusLabel: 'In production',
          description: 'Project and operations management system for the real estate sector: Kanban boards per company and area, property inventory, calendar with reminders, org chart, and productivity dashboard.',
          highlights: [
            'Spring Modulith modular monolith (11 modules with boundaries verified in tests) plus notification and audit microservices',
            'Transactional outbox to RabbitMQ, event-driven emails, and append-only audit trail in MongoDB',
            'Multi-company with fine-grained permissions, JWT API Gateway, and on-premise deployment with Docker Compose and TLS'
          ],
          technologies: ['Java 25', 'Spring Boot 4', 'Spring Modulith', 'Spring Cloud Gateway', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'MinIO', 'Angular 21', 'Docker'],
          icon: 'bi-kanban-fill',
          privateRepo: true
        },
        {
          title: 'LegalBridge',
          category: 'personal',
          context: 'Own project',
          status: 'development',
          statusLabel: 'In development',
          description: 'Vehicle paperwork platform for Colombia: captures vehicle data from RUNT through operator-assisted extraction, records consent and audit under Law 1581, and generates sale contracts as PDF.',
          highlights: [
            'API Gateway and 4 microservices with hexagonal architecture enforced by ArchUnit, a database per service, and events over RabbitMQ',
            'Chrome extension (Manifest V3) that only reads what the portal already delivered: the operator solves the CAPTCHA and triggers every action',
            'No data is stored without valid consent (fail-closed); final contracts are hashed with SHA-256 and stored in Cloudflare R2'
          ],
          technologies: ['Java 25', 'Spring Boot 4', 'Spring Cloud Gateway', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'Keycloak', 'Angular 21', 'Docker', 'Cloudflare R2'],
          icon: 'bi-file-earmark-lock2-fill',
          privateRepo: true
        },
        {
          title: 'AssistantAI',
          category: 'personal',
          context: 'Own project',
          status: 'design',
          statusLabel: 'In design',
          description: 'WhatsApp assistant that books, reschedules, and cancels medical appointments through the Saludtools API, with a web panel for the practitioner and handoff to a person when the bot should not answer.',
          highlights: [
            'The LLM only interprets and writes replies: availability, bookings, and confirmations are decided by the backend',
            'In-house availability engine and zero double bookings through PostgreSQL EXCLUDE constraints',
            'Hexagonal modular monolith with Spring Modulith and a swappable LLM provider via Spring AI'
          ],
          technologies: ['Java 21', 'Spring Boot 3', 'Spring Modulith', 'Spring AI', 'Gemini', 'PostgreSQL', 'WhatsApp Cloud API'],
          icon: 'bi-chat-dots-fill'
        },
        {
          title: 'Cardiovascular Pathology Classification',
          category: 'personal',
          context: 'Undergraduate thesis · Universidad del Valle',
          status: 'completed',
          statusLabel: 'Completed',
          description: 'Classification system for cardiovascular pathologies using recurrent and convolutional neural networks on electrocardiogram (ECG) signals.',
          technologies: ['Python', 'Keras', 'TensorFlow', 'Deep Learning', 'ECG Signal Processing'],
          icon: 'bi-heart-pulse-fill',
          image: 'assets/images/projects/ecg-classification.png',
          github: 'https://github.com/jdanielkc/DeteccionECG'
        },
        {
          title: 'Regional Document Management',
          category: 'professional',
          context: 'Carvajal Tecnología y Servicios',
          description: 'Document management system for Colombia, Mexico, and Peru, with lifecycle-based AWS storage (S3 Glacier / Deep Archive) and Hexagonal and Event-Driven Architecture.',
          technologies: ['Java', 'Spring Boot', 'Angular', 'AWS (S3, EKS, ECS, Cognito, IAM)', 'Event-Driven'],
          icon: 'bi-cloud-haze2-fill'
        },
        {
          title: 'Enterprise Integrations',
          category: 'professional',
          context: 'Red Empresarial de Servicios (Supergiros)',
          description: 'Integrations for Supergiros and Grupo Éxito with secure TLS/mTLS communication, MVC and SAGA patterns, and a mobile migration to Angular, Spring, and Flutter.',
          technologies: ['Java', 'Spring Boot', 'Angular', 'Flutter', 'Oracle', 'PostgreSQL', 'JMeter'],
          icon: 'bi-diagram-3-fill'
        },
        {
          title: 'Purchase Abandonment Prediction',
          category: 'professional',
          context: 'Accenture Colombia',
          description: 'Machine Learning model to predict purchase abandonment, with hyperparameter tuning and Power BI dashboards.',
          technologies: ['Python', 'Random Forest', 'SVM', 'Apache Spark', 'Power BI'],
          icon: 'bi-graph-up-arrow'
        }
      ] as Project[],
      skills: {
        technical: [
          { name: 'Java', level: 5, tier: 'Expert' },
          { name: 'Git and GitHub', level: 5, tier: 'Expert' },
          { name: 'SQL', level: 5, tier: 'Expert' },
          { name: 'AWS', level: 4, tier: 'Advanced' },
          { name: 'Spring Framework', level: 4, tier: 'Advanced' },
          { name: 'JMeter', level: 4, tier: 'Advanced' },
          { name: 'Angular', level: 4, tier: 'Advanced' },
          { name: 'PL/SQL', level: 4, tier: 'Advanced' },
          { name: 'HTML', level: 4, tier: 'Advanced' },
          { name: 'CSS', level: 4, tier: 'Advanced' },
          { name: 'Python', level: 4, tier: 'Advanced' },
          { name: 'Docker', level: 4, tier: 'Advanced' },
          { name: 'Maven / Gradle', level: 4, tier: 'Advanced' },
          { name: 'JavaScript', level: 3, tier: 'Intermediate' }
        ] as Skill[],
        soft: [
          'Teamwork',
          'Leadership',
          'Problem Solving',
          'Communication',
          'Adaptability',
          'Time Management',
          'Initiative',
          'Curiosity'
        ]
      },
      contact: {
        email: 'jose.garcia960711@gmail.com',
        phone: '+57 317 863 1915',
        location: 'Cali, Colombia (Available for travel & relocation)',
        linkedin: 'https://www.linkedin.com/in/jgarciaarias/',
        github: 'https://github.com/jdanielkc'
      },
      languages: [
        { name: 'Spanish', level: 5, tier: 'Native' },
        { name: 'English', level: 3, tier: 'Upper-intermediate' }
      ] as Skill[],
      awards: [
        {
          title: 'Best Academic Average Distinction',
          issuer: 'Universidad del Valle - Electronic Engineering',
          date: '08/2020 - 12/2020',
          description: 'Recognition for achieving the highest academic average of the semester.'
        },
        {
          title: 'Best Academic Average Distinction',
          issuer: 'Universidad del Valle - Electronic Engineering',
          date: '10/2021 - 04/2022',
          description: 'Recognition for achieving the highest academic average of the semester.'
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
          name: 'Version Control with Git and GitHub',
          issuer: 'Universidad de los Andes',
          date: '2024',
          icon: 'bi-github'
        },
        {
          name: 'Introduction to UML',
          issuer: 'Universidad de los Andes',
          date: '2024',
          icon: 'bi-diagram-3'
        },
        {
          name: 'PL/SQL From Scratch',
          issuer: 'Udemy',
          date: '2023',
          icon: 'bi-database'
        },
        {
          name: 'Python for Everybody (Specialization)',
          issuer: 'University of Michigan',
          date: '2022',
          icon: 'bi-code-slash'
        }
      ],
      software: [
        'Kubernetes (EKS)',
        'AWS ECS / S3',
        'AWS Cognito',
        'Azure',
        'CI/CD',
        'TypeScript',
        'PostgreSQL',
        'Oracle DB',
        'JUnit / Mockito',
        'Postman',
        'Power BI',
        'Apache Spark',
        'Linux'
      ]
    }
  };

  getData(lang: 'en' | 'es') {
    return this.data[lang];
  }
}
