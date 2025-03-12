# Pokedex App

## Descripción
Pokedex App es una aplicación desarrollada con Next.js que muestra una lista de Pokémon obtenida desde la API pública de [PokeAPI](https://pokeapi.co/). Utiliza Axios para realizar las solicitudes a la API y presenta los datos con React y Tailwind CSS.

## Tecnologías Utilizadas
- **Next.js** (15.2.2)
- **React** (19.0.0)
- **Axios** (1.8.2)
- **Tailwind CSS**
- **Framer Motion**
- **Three.js** (para efectos en 3D)

## Estructura del Proyecto
```
/src
 ├── app
 │   ├── favicon.ico
 │   ├── globals.css
 │   ├── layout.tsx
 │   ├── page.tsx
 │
 ├── components
 │   ├── Border.jsx
 │   ├── CardPokemon.jsx
 │   ├── Content.jsx
 │   ├── Hero.jsx
 │   ├── PixelTrail.jsx
 │
 ├── services
 │   ├── api.js
 │
 ├── .env
 ├── .gitignore
 ├── package.json
 ├── tsconfig.json
 ├── README.md
```

## Instalación y Uso
1. Clona el repositorio:
   ```bash
   git clone https://github.com/jpjimenezq/Pokedex-App
   ```

2. Ingresa al directorio del proyecto:
   ```bash
   cd pokedex-app
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Accede a la aplicación en `http://localhost:3000`

## API
La aplicación obtiene los datos de Pokémon desde [PokeAPI](https://pokeapi.co/). Para realizar las solicitudes HTTP se utiliza la librería Axios.

## Contacto
Si tienes preguntas o sugerencias, puedes abrir un issue en el repositorio. ¡Disfruta explorando los Pokémon! 🚀

