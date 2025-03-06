# El Mundo Viral - Documentation

## Índice
1. [Introducción](#introducción)
2. [Arquitectura](#arquitectura)
3. [Modelo de Datos](#modelo-de-datos)
4. [Características Principales](#características-principales)
5. [Componentes](#componentes)
6. [Páginas](#páginas)
7. [Funcionalidades](#funcionalidades)
8. [Stack Tecnológico](#stack-tecnológico)
9. [Configuración y Despliegue](#configuración-y-despliegue)

## Introducción

El Mundo Viral es un portal de noticias moderno desarrollado con Astro y Supabase. La aplicación ofrece una interfaz intuitiva para visualizar noticias clasificadas en diferentes categorías y tipos de contenido, con un diseño responsivo que se adapta a dispositivos móviles y de escritorio.

El portal permite a los usuarios navegar por diferentes secciones de contenido, filtrar por categorías, y cambiar entre vistas de cuadrícula y lista. También cuenta con un panel de administración protegido por autenticación para gestionar el contenido.

## Arquitectura

La aplicación sigue un patrón similar a MVC:

- **Modelo**: Interacciones con la base de datos Supabase (`src/lib/supabase.ts`)
- **Vista**: Componentes y páginas de Astro 
- **Controlador**: Lógica dentro de las páginas Astro y funciones JavaScript

El flujo de datos es el siguiente:

1. Las páginas de Astro realizan consultas a Supabase a través de funciones helper
2. Los datos se procesan y se pasan a los componentes
3. Los componentes renderan la interfaz de usuario
4. Las interacciones del usuario se manejan con JavaScript y Astro

## Modelo de Datos

### Tablas principales

**articles**
- `id` (UUID): Identificador único del artículo
- `titulo` (texto): Título del artículo
- `slug` (texto, único): URL amigable para el artículo
- `extracto` (texto): Resumen breve del artículo
- `contenido` (texto): Contenido completo del artículo
- `imagen_principal` (texto): URL de la imagen principal
- `created_at` (timestamp): Fecha de creación
- `updated_at` (timestamp): Fecha de última actualización
- `destacado` (booleano): Indica si es un artículo destacado
- `trending` (booleano): Indica si es tendencia
- `viral` (booleano): Indica si es viral
- `ultima_hora` (booleano): Indica si es noticia de última hora

**categories**
- `id` (UUID): Identificador único de la categoría
- `nombre` (texto): Nombre de la categoría
- `slug` (texto, único): URL amigable para la categoría
- `descripcion` (texto): Descripción de la categoría

**article_categories** (tabla de unión)
- `article_id` (UUID, clave foránea): ID del artículo
- `category_id` (UUID, clave foránea): ID de la categoría

**users**
- `id` (UUID): Identificador único del usuario
- `email` (texto): Correo electrónico del usuario
- `nombre` (texto): Nombre del usuario
- `rol` (texto): Rol del usuario en el sistema

### Relaciones

- **Artículos y Categorías**: Relación muchos a muchos a través de la tabla `article_categories`

### Políticas de Seguridad

- La tabla `articles` tiene habilitada la seguridad a nivel de fila (RLS)
- La tabla `categories` tiene habilitada la seguridad a nivel de fila (RLS)
- La tabla `article_categories` tiene habilitada la seguridad a nivel de fila (RLS)
- Existen políticas para permitir operaciones CRUD según el rol del usuario

## Características Principales

### Clasificación de Contenido

El portal organiza el contenido en diferentes tipos:

1. **Destacados** (`/destacados`): Artículos importantes seleccionados por el equipo editorial
2. **Tendencias** (`/tendencias`): Noticias que están ganando popularidad rápidamente
3. **Virales** (`/virales`): Contenido que se comparte masivamente en redes sociales
4. **Última Hora** (`/ultima-hora`): Noticias recientes publicadas en las últimas 2 horas

### Navegación y Filtrado

- **Navegación principal**: Acceso a las principales secciones
- **Filtrado por categorías**: Permite filtrar artículos por categoría
- **Alternador de vistas**: Cambio entre vista de cuadrícula y lista
- **Diseño responsivo**: Adaptable a dispositivos móviles y de escritorio

### Panel de Administración

- **Sistema de inicio de sesión**: Acceso restringido mediante autenticación
- **Gestión de artículos**: Crear, editar, y eliminar artículos
- **Gestión de categorías**: Administrar categorías
- **Dashboard**: Resumen estadístico de contenidos

## Componentes

### Componentes de UI

1. **Header.astro**
   - Navegación principal del sitio
   - Menú desplegable para categorías
   - Menú móvil para dispositivos pequeños

2. **Footer.astro**
   - Enlaces a secciones importantes
   - Información de contacto y legal
   - Acceso al panel de administración

3. **NewsCard.astro**
   - Visualización de artículos en formato tarjeta
   - Soporte para dos modos de visualización (grid/list)
   - Muestra de información relevante del artículo

4. **CategoryFilter.astro**
   - Filtrado de artículos por categoría
   - Indicador visual de categoría activa

5. **ViewToggle.astro**
   - Cambio entre vista de cuadrícula y lista
   - Persistencia de preferencia del usuario

6. **Breadcrumb.astro**
   - Navegación de migas de pan
   - Ayuda a la ubicación del usuario en el sitio

### Utilidades y Stores

1. **viewStore.ts**
   - Almacenamiento persistente para preferencias de visualización
   - Gestionado con nanostores

## Páginas

### Páginas Públicas

1. **index.astro**
   - Página principal
   - Muestra destacados, tendencias, virales y últimas noticias
   - Filtros de categorías

2. **articulo/[slug].astro**
   - Página de detalle de artículo
   - Muestra contenido completo del artículo
   - Artículos relacionados
   - Sección de comentarios (maquetada, sin funcionalidad)

3. **categoria/[slug].astro**
   - Lista de artículos de una categoría específica
   - Filtrado y cambio de vista

4. **ultima-hora.astro**
   - Noticias recientes (últimas 2 horas)
   - Actualización automática de contenido

5. **destacados.astro**
   - Artículos destacados por el equipo editorial

6. **tendencias.astro**
   - Artículos que están ganando popularidad

7. **virales.astro**
   - Contenido más compartido

8. **404.astro**
   - Página de error personalizada

### Páginas de Administración

1. **jjbb-admin/index.astro**
   - Dashboard del panel de administración
   - Resumen estadístico

2. **jjbb-admin/login.astro**
   - Inicio de sesión para administradores

3. **jjbb-admin/articulos/**
   - CRUD de artículos

4. **jjbb-admin/categorias/**
   - CRUD de categorías

## Funcionalidades

### Sistema de Visualización de Artículos

- **Diferentes layouts**: Visualización en cuadrícula o lista
- **Categorización por tipo**: Destacados, tendencias, virales, última hora
- **Artículos relacionados**: Sugerencias basadas en categorías

### Consulta de Datos

- **Consultas a Supabase**: Funciones para diferentes tipos de contenido
- **Filtrado por categoría**: Búsqueda de artículos específicos
- **Consultas por tiempo**: Filtrado para noticias recientes

### Interfaz de Usuario

- **Diseño responsivo**: Adaptable a diferentes dispositivos
- **Navegación móvil**: Menú especial para dispositivos pequeños
- **Modales de filtro**: Acceso fácil a filtros en móvil

### Panel de Administración

- **Autenticación**: Sistema de login con Supabase Auth
- **Operaciones CRUD**: Gestión completa de artículos y categorías
- **Interfaz de administración**: Panel intuitivo para gestores de contenido

## Stack Tecnológico

### Frontend

- **Framework**: [Astro](https://astro.build/) v5.2.5
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) v3.4.1
- **Tipografía**: [Inter](https://fonts.google.com/specimen/Inter)
- **Iconos**: SVG inline

### Backend y Base de Datos

- **Base de Datos**: [Supabase](https://supabase.com/)
- **Autenticación**: Supabase Auth
- **Almacenamiento**: Supabase Storage (para imágenes)

### Gestión de Estado

- **Stores**: [nanostores](https://github.com/nanostores/nanostores) v0.9.5
- **Persistencia**: [@nanostores/persistent](https://github.com/nanostores/persistent) v0.9.1

### Desarrollo

- **TypeScript**: v5.4.2
- **Node.js**: v18+

## Configuración y Despliegue

### Variables de Entorno

La aplicación requiere las siguientes variables de entorno:

```
PUBLIC_SUPABASE_URL=<URL de tu proyecto Supabase>
PUBLIC_SUPABASE_ANON_KEY=<Key anónima de Supabase>
```

### Comandos de Desarrollo

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Compila el proyecto para producción
- `npm run preview`: Vista previa de la compilación de producción

### Despliegue

La aplicación está preparada para ser desplegada en cualquier plataforma compatible con Node.js o cualquier servicio de hosting estático.

### Consideraciones de Seguridad

- Las políticas de RLS de Supabase están configuradas para proteger los datos
- El panel de administración está protegido con autenticación
- Las claves API de Supabase están correctamente configuradas para limitar el acceso
