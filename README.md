# Personal Portfolio Website

A responsive personal portfolio website featuring interactive 3D graphics and a Canvas 2D background implementation to showcase engineering projects, skills, and professional experience.

This repository automatically deploys to GitHub Pages via a shared CI workflow.

## Features

- **3D Graphics** - Interactive Three.js models (hero desktop PC, Earth)
- **Canvas Background** - Custom 2D dots-and-lines network rendering
- **Responsive Layout** - Mobile-first CSS optimizations
- **Project Showcase** - Componentized project cards with direct repository routing
- **Experience Accordion** - Expandable timeline components for professional experience
- **Tech Stack Display** - Visual architecture diagrams and skill representations
- **Contact Form** - Integrated EmailJS processing

## Tech Stack

### Frontend
- **React 18.3**
- **Vite**
- **Tailwind CSS**
- **PostCSS**

### 3D & Graphics
- **Three.js**
- **@react-three/fiber**
- **@react-three/drei**

### Animation & Interaction
- **Framer Motion**
- **React Tilt**
- **React Vertical Timeline Component**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SamuelIVX/SamuelIVX.github.io.git
cd SamuelIVX.github.io
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory for EmailJS integration:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment

This repository is configured with a GitHub Actions workflow template that automatically builds the Vite application and deploys the `dist/` output to GitHub Pages on every push to `main`. 

The user's resume is hosted statically in the `public/resume.pdf` directory and served natively alongside the application.


## Approved portfolio revamp specifications

The live application above remains the current implementation. The approved redesign is specified in [Portfolio revamp spec set](docs/specs/active/portfolio-revamp/README.md), with seven ordered specifications, [implementation plan and installed skill register](docs/specs/active/portfolio-revamp/IMPLEMENTATION-PLAN.md), and a [durable prototype reference](docs/specs/reference/portfolio-revamp/README.md). Performance/security gates are planned, not achieved production results. This spec-writing change does not deploy the redesign.
