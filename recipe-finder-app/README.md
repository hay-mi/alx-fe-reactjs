# Recipe Finder App

## Description
The Recipe Finder App is a web application that allows users to search for recipes, view details about individual recipes, and explore various culinary options. The app is built using React and TypeScript, styled with Tailwind CSS for a modern and responsive design.

## Features
- Search for recipes using a user-friendly search bar.
- View a list of recipes with details including name, image, and ingredients.
- Navigate between different pages using a header navigation bar.
- Detailed view of each recipe with comprehensive information.

## Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Setup Instructions

1. **Create a new React project using Create React App with TypeScript:**
   ```
   npx create-react-app recipe-finder-app --template typescript
   ```

2. **Navigate to the project directory:**
   ```
   cd recipe-finder-app
   ```

3. **Install Tailwind CSS and its dependencies:**
   ```
   npm install -D tailwindcss postcss autoprefixer
   ```

4. **Initialize Tailwind CSS:**
   ```
   npx tailwindcss init -p
   ```

5. **Configure Tailwind to remove unused styles in production by adding the paths to your template files in `tailwind.config.js`:**
   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

6. **Add the Tailwind directives to your `src/styles/index.css`:**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

7. **Start the development server:**
   ```
   npm start
   ```

## Folder Structure
```
recipe-finder-app
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── assets
│   ├── components
│   │   ├── Header.tsx
│   │   ├── RecipeCard.tsx
│   │   └── SearchBar.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── RecipeDetail.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles
│       └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## License
This project is open-source and available under the [MIT License](LICENSE).