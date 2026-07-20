# Mantle Robotics Website

Minimalist landing page for Mantle Robotics, Inc., the debugging platform for robot fleets. Built with React, Vite, and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (includes npm)

Check your versions:

```bash
node -v
npm -v
```

## Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/aamodpaudel/mantle_robotics.git
cd mantle_robotics
npm install
```

## Run in development

Starts a local dev server with hot reload at [http://localhost:5173](http://localhost:5173):

```bash
npm run dev
```

## Build for production

Outputs a static, deployable build to the `dist/` folder:

```bash
npm run build
```

## Preview the production build

Serves the `dist/` folder locally so you can check the built version:

```bash
npm run preview
```

## Project structure

```
mantle_robotics/
├── index.html                     # HTML entry point, page title/meta
├── src/
│   ├── main.jsx                   # React root
│   ├── index.css                  # Tailwind entry point
│   ├── App.jsx                    # Renders all page sections in order
│   ├── lib/
│   │   └── cn.js                  # clsx + tailwind-merge class helper
│   └── components/
│       ├── HeroSection.jsx        # Full-viewport hero with wordmark, tagline, and CSS telemetry-grid background
│       ├── ProblemStats.jsx       # Downtime cost stats (sourced)
│       ├── LetterSection.jsx      # Founders' letter explaining the product
│       └── CTASection.jsx         # Final CTA + footer
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Tech stack

- **React** (functional components)
- **Vite** for dev server and bundling
- **Tailwind CSS** for styling
- **clsx** + **tailwind-merge** for conditional class names
- Fonts: **Space Grotesk** (display), **IBM Plex Sans** (body), and **IBM Plex Mono** (labels), loaded from Google Fonts
