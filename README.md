# Personal Portfolio Website

**Modern 3D Portfolio**

> A responsive personal portfolio website featuring interactive 3D graphics, smooth animations, and a sleek design to showcase projects, skills, and professional experience.

## Features

- 📊 **3D Graphics** - Interactive Three.js models (computers, Earth, tech balls)
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🎭 **Smooth Animations** - Framer Motion animations throughout
- 💼 **Project Showcase** - Detailed project cards with GitHub links
- 📈 **Experience Timeline** - Vertical timeline of professional experience
- 🛠️ **Tech Stack Display** - Interactive 3D tech ball visualizations
- 📧 **Contact Form** - Functional form powered by EmailJS
- 🌙 **Dark Theme** - Modern dark theme with gradient accents

## Tech Stack

### Frontend
- **React 18.3** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

### 3D Graphics & Animations
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helpers for react-three-fiber
- **Framer Motion** - Animation library

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Utilities
- **EmailJS** - Email service for contact form
- **React Tilt** - Tilt effect on hover
- **React Vertical Timeline** - Experience timeline component

## Project Structure

```bash
src/
├── components/        # React components
│   ├── canvas/       # Three.js canvas components
│   │   ├── Ball.jsx      # Tech ball component
│   │   ├── Computers.jsx # 3D computer model
│   │   ├── Earth.jsx     # 3D Earth model
│   │   └── Stars.jsx     # Animated stars background
│   ├── About.jsx     # About section
│   ├── Contact.jsx  # Contact form
│   ├── Experience.jsx # Experience timeline
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

## Author

**Samuel Hernandez Balderas**

- GitHub: [@SamuelIVX](https://github.com/SamuelIVX)

---

⭐ If you like this project, please give it a star on GitHub!
