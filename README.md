# Space Tourism Website

A modern and responsive **Space Tourism Website** built with **React**, inspired by a [Frontend Mentor](https://www.frontendmentor.io/) challenge.  
This project was created to **practice React Router (v7.4)**, **React Context**, and **CSS Modules**, focusing on clean component structure, global state management, and smooth page transitions.

---

## Demo

**Live Demo:** [https://magenta-lebkuchen-39697e.netlify.app/](https://magenta-lebkuchen-39697e.netlify.app/)

---

## Project Goals

- Learn and practice **React Router 7.4**
- Implement **React Context + Hooks** for global state
- Strengthen understanding of **React component structure**
- Use **CSS Modules** for modular, scoped styling
- Build a **multi-page SPA** with smooth navigation

---

## Tech Stack

| Technology              | Purpose                             |
| ----------------------- | ----------------------------------- |
| React                   | Core library for building UI        |
| React Router 7.4        | Client-side routing                 |
| React Context + Hooks   | State management and logic handling |
| CSS Modules             | Scoped component styling            |
| Vite / Create React App | Development environment             |
| Netlify                 | Deployment and hosting              |

---

## Folder Structure

space-tourism-website/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page components (Home, Destination, Crew, Technology)
│ ├── context/ # React Context providers and hooks
│ ├── Hooks/ # hooks
│ ├── assets/ # Images and icons
│ ├── App.jsx # Main app with routing setup
│ └── index.jsx # Entry point
│
└── package.json

---

## Routes Overview

| Route          | Description              |
| -------------- | ------------------------ |
| `/`            | Home page                |
| `/destination` | Destination details page |
| `/crew`        | Meet the crew            |
| `/technology`  | Technology section       |

Each route uses **React Router** to handle navigation without page reloads.

---

## How to Run the Project

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/Amin-Muhammed/space-tourism-website.git
```

### 2. Navigate to the project directoray

```bash
cd space-tourism-website

```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev

```

### 5. Open the project in your browser

```bash
http://localhost:5173/

```

---

## Styling

- Each component has its own **CSS Module file** for encapsulated styling.
- Layouts are designed to be **responsive** and **accessible**, following the Frontend Mentor design.

---

## Deployment

Deployed using **Netlify** for smooth CI/CD and fast global delivery.  
The app uses **React Router’s BrowserRouter** configuration and Netlify’s `_redirects` file to handle client-side routes properly.

---

## What I Learned

- Setting up and using **React Router v7.4**
- Managing state with **React Context** and **custom hooks**
- Handling **nested routes** and layout routes
- Using **CSS Modules** for better style organization
- Deploying React apps with **Netlify**
- Managing **page-specific state and transitions**

---

## Author

**Amin Muhammed**  
[GitHub Profile](https://github.com/Amin-Muhammed)

---

If you found this project useful, consider giving it a star.
