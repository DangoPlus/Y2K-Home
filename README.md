# CYBER_CORE // Y2K EST.1999

> A "New Millennium" (Y2K/Cybercore) styled web experience, now evolved into a full React application.

This project is a modern reimagining of the late 90s/early 2000s digital aesthetic, featuring liquid metal 3D graphics, glitch effects, and a holographic interface.

## 🌟 Features

*   **Liquid Metal 3D Core**: Real-time rendering of liquid chrome geometry using **Three.js** and **React Three Fiber** concepts.
*   **Holographic Glassmorphism**: UI elements feature frosted glass effects with holographic borders.
*   **Glitch Art & Animations**: Custom CSS animations for text glitches, scanning lines, and loading sequences.
*   **Retro-Futuristic Typography**: A blend of **Orbitron** (futuristic sans) and **VT323** (pixel style) fonts.
*   **Immersive Atmosphere**: Background grid systems, scanline overlays, and ambient lighting.
*   **Full Routing**: Navigation between Home, Data, Visuals, System, and Connect pages.

## 🛠 Tech Stack

*   **Framework**: [React](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **3D Graphics**: [Three.js](https://threejs.org/)
*   **Routing**: [React Router](https://reactrouter.com/)

## 🚀 Getting Started

### Prerequisites

*   Node.js (v16 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/cyber-core.git
    cd cyber-core
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the local development server:

```bash
npm run dev
```

Open http://localhost:5173 to view the site.

### Build

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Main Layout wrapper
│   ├── scene/        # Three.js background scenes
│   └── ui/           # Reusable UI components (Buttons, Glass Panels, Glitch Text)
├── pages/            # Page views (Home, Data, Visuals, System, Connect)
├── assets/           # Static assets
├── index.css         # Global styles and Tailwind directives
├── App.jsx           # Main application routing
└── main.jsx          # Entry point
```

## 🎨 Design Philosophy

The design strictly follows the Y2K aesthetic rules:
- **Colors**: Neon Blue (#00f3ff), Neon Pink (#ff00ff), Chrome Silver (#e0e0e0), Deep Black (#050505).
- **Textures**: Scanlines, dithering, grid patterns.
- **Interactions**: Hover effects that mimic system activation, "loading" states, and raw data visualization.

---

*EST. 1999 // CYBER_CORP INC. // ALL RIGHTS RESERVED*
