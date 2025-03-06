# El Mundo Viral

Un portal de noticias moderno desarrollado con Astro y Supabase.

![El Mundo Viral](https://example.com/screenshot.png)

## Características Principales

- Portal de noticias moderno con diseño responsivo
- Clasificación de noticias por tipo: Destacados, Tendencias, Virales y Última Hora
- Filtrado de contenido por categorías
- Panel de administración para la gestión de contenidos
- Sistema de autenticación para administradores

## Stack Tecnológico

- **Frontend**: Astro, Tailwind CSS
- **Backend**: Supabase (Base de datos, Autenticación)
- **Gestión de Estado**: nanostores
- **Despliegue**: Compatible con cualquier servicio de hosting estático

## Estructura del Proyecto

```text
/
├── public/               # Archivos estáticos
├── src/
│   ├── assets/           # Imágenes y recursos
│   ├── components/       # Componentes reutilizables
│   ├── layouts/          # Plantillas de página
│   ├── lib/              # Utilidades y funciones helper
│   ├── pages/            # Páginas de la aplicación
│   ├── store/            # Estado global (nanostores)
│   └── types/            # Tipos TypeScript
├── supabase/
│   └── migrations/       # Migraciones de la base de datos
└── documentation.md      # Documentación detallada
```

## Modelo de Datos

El proyecto utiliza una base de datos PostgreSQL en Supabase con las siguientes tablas principales:

- **articles**: Artículos del portal
- **categories**: Categorías para los artículos
- **article_categories**: Relación muchos a muchos entre artículos y categorías
- **users**: Usuarios administradores

## Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- Cuenta en Supabase

### Configuración del Proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/el-mundo-viral.git
   cd el-mundo-viral
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` con las siguientes variables:
   ```
   PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=tu-clave-anonima
   ```

4. Inicializa la base de datos:
   - Ejecuta las migraciones de la carpeta `supabase/migrations`
   - Asegúrate de que las políticas de RLS estén correctamente configuradas

### Desarrollo Local

```bash
npm run dev
```

Visita `http://localhost:4321` para ver la aplicación.

### Compilación para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

## Uso

### Navegación para Usuarios

- Accede a la página principal para ver las últimas noticias
- Navega entre las secciones Destacados, Tendencias, Virales y Última Hora
- Filtra noticias por categorías
- Cambia entre vistas de cuadrícula y lista según tu preferencia

### Panel de Administración

1. Accede a `/jjbb-admin/login` e inicia sesión con tus credenciales
2. Gestiona artículos y categorías desde el panel de control
3. Crea, edita o elimina contenido según sea necesario

## Documentación Completa

Para información más detallada sobre la arquitectura, componentes y funcionalidades, consulta el archivo [documentation.md](./documentation.md).

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
