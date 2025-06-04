# TalentVare UI

  

A responsive, pixel-perfect UI for the TalentVare homepage, implemented using **React**, **Vite**, and **Bootstrap**.

  

---

  

## 🎯 Project Task

  

**Task:** Implement and Deploy TalentVare Homepage UI

  

- Convert the [Figma design](https://www.figma.com/design/8IiWesnv0NANUkvnoar4HS/Frontend-Test?node-id=0-1&p=f&t=4pC7SVp4V41O4dzs-0) into a fully functional React + Vite + Bootstrap project.

- Achieve pixel-perfect fidelity with exact alignment, spacing, fonts, and icons as in the Figma mockup.

- Optimize icons and fonts to ensure fast loading times without compromising visual quality.

- Deploy the completed UI on a third-party hosting platform such as Netlify, Vercel, or similar.

- Provide a deployment link for review and validation.

  

---

  

## ⚙️ Technologies & Packages Used

### Dependencies

| Package            | Version   | Description                              |
|--------------------|-----------|------------------------------------------|
| [react](https://reactjs.org/)            | ^19.1.0   | React library for building UI             |
| [react-dom](https://reactjs.org/docs/react-dom.html)        | ^19.1.0   | React DOM rendering library               |
| [@reduxjs/toolkit](https://redux-toolkit.js.org/) | ^2.8.2    | Official Redux toolkit for state management |
| [react-redux](https://react-redux.js.org/)      | ^9.2.0    | React bindings for Redux                  |
| [antd](https://ant.design/)             | ^5.25.4   | Ant Design component library              |
| [bootstrap](https://getbootstrap.com/)        | ^5.3.6    | CSS framework for responsive design      |
| [lucide-react](https://lucide.dev/)     | ^0.511.0  | Icon library                             |
| [sass](https://sass-lang.com/)             | ^1.89.1   | CSS preprocessor for styling              |

---

### DevDependencies

| Package              | Version   | Description                               |
|----------------------|-----------|-------------------------------------------|
| [vite](https://vitejs.dev/)               | ^6.3.5    | Next-generation frontend tooling          |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | ^4.4.1  | Vite plugin to enable React support       |
| [eslint](https://eslint.org/)             | ^9.25.0   | Linting tool for JavaScript/React         |
| [@eslint/js](https://eslint.org/docs/latest/use/configure/language-options#eslint-core-rules)         | ^9.25.0   | ESLint core rules                         |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) | ^5.2.0 | ESLint plugin for React hooks             |
| [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh) | ^0.4.19 | ESLint plugin for React Fast Refresh      |
| [globals](https://www.npmjs.com/package/globals)            | ^16.0.0   | Global variable definitions for ESLint    |
| [@types/react](https://www.npmjs.com/package/@types/react)       | ^19.1.2   | TypeScript definitions for React          |
| [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)   | ^19.1.2   | TypeScript definitions for React DOM      |

---

Feel free to reach out if you want help with deployment or any enhancements!

## 🗂️ Project Structure

# TalentVare Project Structure

| Folder / File               | Description                     |
|----------------------------|---------------------------------|
| **node_modules/**           | Installed npm packages          |
| **public/**                 | Public static assets            |
| **src/**                   | Source code                    |
| ├─ **assets/**              | Static assets                  |
| │  ├─ fonts/                | Font files                    |
| │  ├─ icons/                | Icon files                    |
| │  ├─ images/               | Image files                   |
| │  └─ logo/                 | Logo files                    |
| │     └─ react.svg          | React logo SVG file           |
| ├─ **components/**          | React components              |
| │  ├─ global/               | Global shared components      |
| │  ├─ JobCard/              | JobCard component             |
| │  │  ├─ index.jsx          | JobCard React component       |
| │  │  └─ index.scss         | JobCard styles                |
| │  ├─ JobMainArea/          | JobMainArea component         |
| │  │  └─ index.jsx          | JobMainArea React component   |
| │  ├─ JobsList/             | JobsList component            |
| │  │  ├─ index.scss         | JobsList styles               |
| │  │  └─ index.jsx          | JobsList React component      |
| │  ├─ Navbar/               | Navbar component              |
| │  │  ├─ index.jsx          | Navbar React component        |
| │  │  └─ index.scss         | Navbar styles                 |
| │  ├─ Profilesidebar/       | Profilesidebar component      |
| │  │  ├─ index.jsx          | Profilesidebar React component|
| │  │  └─ index.scss         | Profilesidebar styles         |
| │  ├─ QuickTags/            | QuickTags component           |
| │  │  ├─ index.jsx          | QuickTags React component     |
| │  │  └─ index.scss         | QuickTags styles              |
| │  └─ SearchForm/           | SearchForm component          |
| │     ├─ index.jsx          | SearchForm React component    |
| │     └─ index.scss         | SearchForm styles             |
| ├─ **Welcome/**             | (Folder content not specified)|
| ├─ **ui/**                  | UI reusable components        |
| │  ├─ Button/               | Button component              |
| │  │  └─ index.jsx          | Button React component        |
| │  └─ Calendar/             | Calendar component            |
| │     └─ index.jsx          | Calendar React component      |
| ├─ **web-controls/**        | Web controls and utilities    |
| │  ├─ data/                 | Data files                   |
| │  └─ index.js              | Main web-controls JS file     |
| ├─ **pages/**               | Page components               |
| │  └─ Home/                 | Home page                    |
| │     ├─ index.jsx          | Home React component          |
| │     └─ index.scss         | Home page styles              |
| ├─ **redux/**               | Redux state management files  |
| │  ├─ api/                  | API related Redux code        |
| │  ├─ jobSearch/            | Job search slice              |
| │  │  └─ jobSearchSlice.js  | Job search slice file         |
| │  ├─ sidebar/              | Sidebar slice                 |
| │  │  └─ sidebarSlice.js    | Sidebar slice file            |
| │  └─ store/                | Redux store setup             |
| │     └─ index.js           | Redux store index file        |
| ├─ App.jsx                  | Root React component          |
| ├─ App.scss                 | Global app styles             |
| ├─ index.scss               | Global styles                 |
| ├─ main.jsx                 | React entry point             |
| └─ Ann.iev                  | (File content not specified)  |
| **.gitignore**              | Git ignore config             |
| **eslint.config.js**        | ESLint configuration          |
| **index.html**              | HTML template                 |
| **jsconfig.json**           | JS config for IDEs            |
| **package-lock.json**       | NPM lock file                 |
| **package.json**            | NPM dependencies and scripts |
| **README.md**               | Project readme file           |
| **vite.config.js**          | Vite configuration            |

Key Features of the Structure:

-  **Component-based architecture** with each component in its own directory

-  **Redux state management** organized by features (jobSearch, sidebar)

-  **Assets management** with separate directories for fonts, icons, and images

-  **Vite configuration** for modern frontend tooling

-  **SCSS support** for styling components

---

## 🚀 NPM Scripts

| Script     | Description                             |
|------------|-----------------------------------------|
| dev      | Starts the Vite development server      |
| build    | Builds the production-ready application |
| preview  | Preview the production build locally    |
| lint     | Runs ESLint to check code quality       |

Feel free to reach out if you want help with deployment or any enhancements!
