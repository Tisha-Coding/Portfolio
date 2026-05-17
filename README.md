# 🌌 Tisha — Developer Portfolio

A modern, responsive personal portfolio website built to showcase my work,
skills, education, and achievements as a Full Stack Developer. Designed with a
clean, space-inspired theme — complete with animated star backgrounds, smooth
transitions, and a light/dark mode toggle.

---

## ✨ Features

- 🚀 **Hero Section** — animated introduction with a clear role and tagline
- 👩‍💻 **About Me** — a quick look into who I am and what I do
- 🛠️ **Skills** — filterable skill cards across Frontend, Backend, Tools,
  Concepts, and AI Tools
- 🎓 **Education** — an animated zigzag timeline of my academic journey
- 📂 **Projects** — highlights of the things I've built
- 💼 **Experience** — a timeline of my professional roles
- 🏆 **Achievements & Certifications** — awards, recognitions, and credentials
- 📬 **Contact** — get in touch via an EmailJS-powered contact form
- 🌗 **Light / Dark Mode** — theme toggle with a persistent preference
- 📱 **Fully Responsive** — looks great on mobile, tablet, and desktop
- ⭐ **Animated Star Background** — meteors and stars for a cosmic feel

---

## 🧰 Tech Stack

| Category   | Technologies                                    |
| ---------- | ----------------------------------------------- |
| Framework  | React 19                                        |
| Build Tool | Vite 7                                          |
| Styling    | Tailwind CSS 4                                   |
| Routing    | React Router DOM 7                               |
| Icons      | Lucide React                                     |
| Email      | EmailJS                                          |
| UI Utils   | clsx, tailwind-merge, class-variance-authority   |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Tisha-Coding/Portfolio.git

# 2. Move into the project folder
cd Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the next free port).

### Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server with HMR    |
| `npm run build`   | Build the project for production         |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint across the project            |

---

## 📁 Project Structure

```
src/
├── components/        # Section & UI components
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── SkillsSection.jsx
│   ├── EducationSection.jsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.jsx
│   ├── AchievementsSection.jsx
│   ├── ContactSection.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── pages/             # Route-level pages
│   ├── Home.jsx
│   └── NotFound.jsx
├── lib/               # Helper utilities
├── index.css          # Global styles, theme & animations
└── main.jsx           # App entry point
```

---

## 🎨 Customization

- **Content** — update the data arrays at the top of each section component
  (e.g. `skills`, `education`, `experiences`, `items`).
- **Theme colors** — tweak the CSS variables in `src/index.css`.
- **Animations** — all keyframes live in `src/index.css` under `@theme`.

---

## 📬 Contact

Tisha — Full Stack Developer

- 🔗 GitHub: [@Tisha-Coding](https://github.com/Tisha-Coding)
- 📧 Reach out through the contact form on the live site!

---

> Built with 💜 using React, Vite & Tailwind CSS.
