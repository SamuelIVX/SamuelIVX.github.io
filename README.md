# Personal Portfolio Website

**Modern Portfolio**

> A responsive personal portfolio website featuring interactive 3D graphics, animated backgrounds, smooth animations, and a sleek design to showcase projects, skills, and professional experience.

## Features

- **3D Graphics** - Interactive Three.js models (hero desktop PC, Earth)
- **Animated Background** - Canvas 2D dots-and-lines network effect
- **Fully Responsive** - Optimized for all device sizes
- **Smooth Animations** - Motion animations throughout
- **Project Showcase** - Detailed project cards with GitHub and live demo links
- **Experience Accordion** - Expandable cards for professional experience
- **Tech Stack Display** - Visual tech stack with icon pills
- **Contact Form** - Functional form powered by EmailJS
- **Dark Theme** - Modern dark theme with gradient accents

## Tech Stack

### Frontend
- **React 18.3** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

### 3D Graphics & Animations
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helpers for react-three-fiber
- **Motion** - Animation library

### Utilities
- **EmailJS** - Email service for contact form

## Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Run tests
npm run test
```

## Deployment

The site is deployed to GitHub Pages. Pushes to `main` trigger an automatic build and deploy via GitHub Actions.

## Project Structure

```bash
src/
├── components/        # React components
│   ├── canvas/       # Three.js and Canvas 2D components
│   │   ├── Computers.jsx      # 3D desktop PC model
│   │   ├── Earth.jsx          # 3D Earth model
│   │   ├── Stars.jsx          # Animated stars background
│   │   └── GradientBackground.jsx # Canvas 2D animated network
│   ├── About.jsx     # About section
│   ├── Contact.jsx   # Contact form
│   ├── Experience.jsx # Experience accordion
│   ├── Hero.jsx      # Hero section
│   ├── Navbar.jsx    # Navigation bar
│   ├── Tech.jsx      # Tech stack display
│   └── Works.jsx     # Projects showcase
├── constants/        # Data and configuration
├── hoc/             # Higher-order components
├── styles/          # Style configurations
├── utils/           # Utility functions
└── assets/          # Images and static assets
```

---

⭐ If you like this project, please give it a star on GitHub!
