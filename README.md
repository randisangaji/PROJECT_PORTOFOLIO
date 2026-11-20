# Randi Sangaji — Personal Portfolio

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS v4**.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
randi-portfolio/
├── public/
│   ├── images/            ← Profile & project screenshots
│   │   └── projects/
│   ├── documents/         ← Resume / CV
│   └── favicon.svg
├── src/
│   ├── components/        ← React UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js   ← ✏️ ALL your content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## ✏️ How to Update Content

**All personal data is in one file:** `src/data/portfolio.js`

### Add a New Project

Open `src/data/portfolio.js` and add an object to the `projects` array:

```js
{
  title: "My New Project",
  description: "A short description of what it does.",
  technologies: ["React", "Node.js"],
  category: "Web Development",
  image: "/images/projects/my-project.png",
  github: "https://github.com/randisangaji/my-project",
  live: "https://my-project.vercel.app",
}
```

### Change Profile Photo

1. Place your photo in `public/images/` (e.g., `profile.jpg`).
2. In `portfolio.js`, set: `profileImage: "/images/profile.jpg"`.

### Add Your Resume / CV

1. Place your PDF in `public/documents/resume.pdf`.
2. In `portfolio.js`, set `resume.enabled: true`.

### Add New Experience

Add an object to the `experience` array in `portfolio.js`:

```js
{
  organization: "Company Name",
  role: "Software Engineer Intern",
  period: "Jun 2025 — Aug 2025",
  description: "Worked on backend services using Java and Spring Boot.",
  type: "Internship",
  logo: "/images/company-logo.png",
}
```

## 🌐 Deploy to Vercel

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Import Project** → Select your GitHub repo.
3. Vercel auto-detects Vite. Click **Deploy**.
4. Your site will be live at `https://your-project.vercel.app`.

## 📄 License

MIT © Randi Sangaji
