# Portfolio Web - Juan Diego García Acevedo

Portfolio web profesional, moderno y responsive con soporte multiidioma (Español/Inglés).

## 🚀 Características

- ✅ Diseño responsive con Bootstrap 5
- ✅ Selector de idioma (Español/Inglés)
- ✅ Navegación suave entre secciones
- ✅ Hero section atractivo con animaciones
- ✅ Timeline de experiencia profesional
- ✅ Cards de educación elegantes
- ✅ Barras de progreso para habilidades técnicas
- ✅ Grid de proyectos
- ✅ Sección de contacto
- ✅ Iconos de Bootstrap Icons
- ✅ Animaciones y efectos hover
- ✅ Diseño moderno con gradientes
- ✅ Footer con links sociales

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm (viene con Node.js)

## 🔧 Instalación

1. Clona el repositorio o navega al directorio del proyecto

2. Instala las dependencias:
```bash
npm install
```

## 🏃‍♂️ Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

## 🏗️ Compilación para Producción

Para generar una compilación optimizada para producción:

```bash
npm run build
```

Los archivos compilados se generarán en el directorio `dist/`.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── services/
│   │   ├── translation.service.ts    # Servicio de traducción multiidioma
│   │   └── portfolio.service.ts      # Servicio de datos del portfolio
│   ├── app.ts                        # Componente principal
│   ├── app.html                      # Template HTML
│   ├── app.scss                      # Estilos del componente
│   └── app.routes.ts                 # Configuración de rutas
├── styles.scss                       # Estilos globales
└── index.html                        # Página principal
```

## 🎨 Personalización

### Cambiar Información Personal

Edita el archivo `src/app/services/portfolio.service.ts` para actualizar:
- Experiencia profesional
- Educación
- Proyectos
- Habilidades técnicas y blandas
- Información de contacto

### Cambiar Traducciones

Edita el archivo `src/app/services/translation.service.ts` para modificar los textos en español e inglés.

### Cambiar Colores

Los colores principales se definen en `src/styles.scss`:
```scss
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  --text-dark: #2d3748;
  --text-light: #ffffff;
}
```

## 🌐 Secciones del Portfolio

1. **Hero** - Presentación principal con nombre, título y botones de acción
2. **Sobre Mí** - Breve descripción profesional
3. **Experiencia** - Timeline de experiencia laboral
4. **Educación** - Formación académica
5. **Habilidades** - Habilidades técnicas (con barras de progreso) y blandas
6. **Proyectos** - Portfolio de proyectos con tecnologías utilizadas
7. **Contacto** - Información de contacto (email, teléfono, ubicación)

## 📱 Responsive Design

El portfolio está optimizado para todos los dispositivos:
- **Desktop** (> 1200px): Layout completo con todas las características
- **Tablet** (768px - 1199px): Layout adaptado
- **Mobile** (< 768px): Menú hamburguesa y diseño vertical

## 🛠️ Tecnologías Utilizadas

- Angular 19
- TypeScript
- Bootstrap 5
- Bootstrap Icons
- SCSS
- Signals API (Angular)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Juan Diego García Acevedo**

- Email: juan.garcia@email.com
- LinkedIn: [linkedin.com/in/juandiegogarcia](https://linkedin.com/in/juandiegogarcia)
- GitHub: [github.com/juandiegogarcia](https://github.com/juandiegogarcia)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes sugerencias, por favor abre un issue.

---

⭐️ Si te gusta este proyecto, dale una estrella en GitHub!
