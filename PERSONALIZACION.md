# 📝 Guía de Personalización Rápida

## 1. Actualizar tu Información Personal

### Datos de Contacto
Abre `src/app/services/portfolio.service.ts` y busca la sección `contact`:

```typescript
contact: {
  email: 'TU_EMAIL@ejemplo.com',
  phone: '+57 XXX XXX XXXX',
  location: 'Tu Ciudad, País',
  linkedin: 'https://linkedin.com/in/tu-usuario',
  github: 'https://github.com/tu-usuario'
}
```

### Experiencia Profesional
En el mismo archivo, actualiza el array `experiences`:

```typescript
experiences: [
  {
    company: 'Nombre de la Empresa',
    position: 'Tu Cargo',
    period: 'Año Inicio - Año Fin (o Presente)',
    description: [
      'Logro o responsabilidad 1',
      'Logro o responsabilidad 2',
      'Logro o responsabilidad 3'
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3']
  }
]
```

### Educación
Actualiza el array `education`:

```typescript
education: [
  {
    institution: 'Nombre de la Universidad',
    degree: 'Tu Título',
    period: 'Año Inicio - Año Fin',
    description: 'Información adicional (opcional)'
  }
]
```

### Proyectos
Actualiza el array `projects`:

```typescript
projects: [
  {
    title: 'Nombre del Proyecto',
    description: 'Descripción breve del proyecto',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    image: 'assets/projects/imagen.jpg', // opcional
    github: 'https://github.com/tu-usuario/proyecto'
  }
]
```

### Habilidades Técnicas
Actualiza el array `skills.technical`:

```typescript
technical: [
  { name: 'Tecnología', level: 90 }, // nivel de 0 a 100
  { name: 'Otra Tecnología', level: 85 },
]
```

### Habilidades Blandas
Actualiza el array `skills.soft`:

```typescript
soft: [
  'Habilidad 1',
  'Habilidad 2',
  'Habilidad 3'
]
```

## 2. Cambiar Textos y Traducciones

Abre `src/app/services/translation.service.ts` para modificar los textos en español e inglés.

Por ejemplo, para cambiar el título profesional:
```typescript
hero: {
  greeting: 'Hola, soy',
  name: 'Tu Nombre Completo',
  title: 'Tu Título Profesional',
  description: 'Tu descripción profesional',
  // ...
}
```

## 3. Cambiar Colores del Portfolio

Abre `src/styles.scss` y modifica las variables CSS:

```scss
:root {
  --primary-color: #667eea;      // Color principal (azul)
  --secondary-color: #764ba2;    // Color secundario (morado)
  --accent-color: #f093fb;       // Color de acento (rosa)
  --text-dark: #2d3748;          // Color de texto oscuro
  --text-light: #ffffff;         // Color de texto claro
}
```

### Ejemplos de Combinaciones de Colores:

**Azul Profesional:**
```scss
--primary-color: #0066cc;
--secondary-color: #003d7a;
--accent-color: #66b3ff;
```

**Verde Moderno:**
```scss
--primary-color: #00c853;
--secondary-color: #00695c;
--accent-color: #69f0ae;
```

**Naranja Energético:**
```scss
--primary-color: #ff6f00;
--secondary-color: #e65100;
--accent-color: #ffb74d;
```

## 4. Añadir tu Foto de Perfil

1. Coloca tu foto en la carpeta `public/images/` (crea la carpeta si no existe)
2. Abre `src/app/app.html`
3. Busca la sección del `hero-image` y reemplaza el ícono con una imagen:

```html
<div class="profile-card">
  <img src="images/tu-foto.jpg" alt="Tu Nombre" class="profile-photo">
</div>
```

4. Añade estilos en `src/app/app.scss`:

```scss
.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
```

## 5. Añadir Imágenes a los Proyectos

1. Coloca las imágenes de tus proyectos en `public/images/projects/`
2. En `portfolio.service.ts`, actualiza la propiedad `image` de cada proyecto:

```typescript
projects: [
  {
    title: 'Mi Proyecto',
    description: 'Descripción...',
    technologies: ['Angular', 'TypeScript'],
    image: 'images/projects/mi-proyecto.jpg',
    github: 'https://github.com/...'
  }
]
```

3. Actualiza el template en `app.html`:

```html
<div class="project-image">
  @if (project.image) {
    <img [src]="project.image" [alt]="project.title">
  } @else {
    <i class="bi bi-code-square"></i>
  }
</div>
```

## 6. Modificar la Navegación

Para añadir o quitar secciones, edita:

1. **Traducciones** en `translation.service.ts`:
```typescript
nav: {
  home: 'Inicio',
  about: 'Sobre Mí',
  // añade o quita secciones aquí
}
```

2. **HTML del menú** en `app.html`:
```html
<li class="nav-item">
  <a class="nav-link" (click)="scrollToSection('nueva-seccion')">
    {{ translations().nav.nuevaSeccion }}
  </a>
</li>
```

3. **Añade la nueva sección** en el HTML con el ID correspondiente:
```html
<section id="nueva-seccion" class="section">
  <!-- Contenido de la nueva sección -->
</section>
```

## 7. Personalizar Enlaces de CV

Actualiza el método `downloadCV()` en `app.ts` si quieres apuntar a archivos PDF:

```typescript
downloadCV(): void {
  const cvPath = this.currentLanguage() === 'es' 
    ? 'documents/CV_Spanish.pdf' 
    : 'documents/CV_English.pdf';
  window.open(cvPath, '_blank');
}
```

Y coloca tus PDFs en la carpeta `public/documents/`.

## 8. Cambiar Fuentes

Para usar Google Fonts, añade en `src/index.html`:

```html
<head>
  <!-- ... -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
```

Y actualiza en `src/styles.scss`:

```scss
body {
  font-family: 'Poppins', sans-serif;
}
```

## 🎯 Checklist de Personalización

- [ ] Actualizar datos de contacto
- [ ] Añadir experiencia profesional real
- [ ] Añadir educación
- [ ] Añadir proyectos con enlaces
- [ ] Actualizar habilidades técnicas
- [ ] Actualizar habilidades blandas
- [ ] Cambiar colores del tema (opcional)
- [ ] Añadir foto de perfil (opcional)
- [ ] Añadir imágenes de proyectos (opcional)
- [ ] Revisar traducciones en ambos idiomas
- [ ] Subir CVs en PDF
- [ ] Probar en diferentes dispositivos

## 💡 Consejos

1. **Mantén la consistencia**: Asegúrate de que los datos en español e inglés estén sincronizados
2. **Sé conciso**: Las descripciones deben ser claras y directas
3. **Usa números**: Cuantifica tus logros cuando sea posible
4. **Optimiza imágenes**: Usa imágenes optimizadas (WebP, comprimidas) para mejor rendimiento
5. **Prueba todo**: Verifica que todos los enlaces funcionen correctamente

---

¿Necesitas más ayuda? Consulta el README_PORTFOLIO.md para más información.
