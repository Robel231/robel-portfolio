# Robel Shemeles - AI & Full-Stack Developer Portfolio

This is the source code for the personal portfolio website of Robel Shemeles Alemayhu, a dynamic Full-Stack Developer and AI Automation Engineer. The website showcases his skills, professional experience, and key projects in a clean, modern, and fully responsive design.

The portfolio is designed to be a comprehensive digital CV, providing a clear overview of Robel's expertise in building scalable web applications and intelligent automation solutions.

## ✨ Features

- **Responsive Design**: A mobile-first design that looks great on all devices, from desktops to smartphones.
- **Interactive UI**: Smooth scrolling, hover effects, and a clean layout for an engaging user experience.
- **Dynamic Sections**:
    - **Hero**: A compelling introduction with links to GitHub and LinkedIn.
    - **About Me**: A detailed summary including professional background, education, achievements, and languages.
    - **Skills**: A categorized showcase of technical competencies in Frontend, Backend, AI, and DevOps.
    - **Experience**: A professional timeline highlighting career progression and key responsibilities.
    - **Projects**: A grid of project cards with descriptions, technologies used, and links to live demos and source code.
    - **Contact**: Easy-to-access contact information and social links.
- **Custom Color Palette**: A unique and professional warm color scheme for a distinct visual identity.

## 🛠️ Tech Stack

- **Frontend**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Custom SVG components for a lightweight and consistent look.

## 📂 Project Structure

The project is organized with a clear and scalable component-based architecture.

```
.
├── public/
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── ... (SVG Icon Components)
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   └── types.ts
├── .gitignore
├── index.html
├── package.json
├── README.md
└── tsconfig.json
```

- `src/components`: Contains all the reusable React components that make up the different sections of the portfolio.
- `src/components/icons`: Stores all custom SVG icon components.
- `src/types.ts`: Defines shared TypeScript interfaces for data structures like `Project`, `ExperienceItem`, etc.
- `App.tsx`: The main application component that assembles all the sections.
- `index.tsx`: The entry point for the React application.

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Robel231/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view the website in your browser.

---

&copy; 2024 Robel Shemeles Alemayhu. All rights reserved.
