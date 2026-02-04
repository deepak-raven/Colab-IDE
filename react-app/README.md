# CodeSync - React Application

A modern, collaborative IDE platform built with React and Vite. This is the React version of the CodeSync project, featuring beautiful animations, responsive design, and intuitive navigation.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for fast development and optimal performance
- **Client-Side Routing**: Seamless navigation using React Router DOM
- **Responsive Design**: Fully responsive UI that works on all device sizes
- **Beautiful Animations**: Smooth transitions and interactive elements
- **Multiple Pages**:
  - Home/Landing page with feature showcase
  - Login page with social authentication UI
  - Dashboard for project management
  - Code Editor with collaborative features
  - Quick Start guide

## 🛠️ Tech Stack

- **React 18**: Modern React with Hooks
- **Vite**: Next-generation frontend tooling
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Google Fonts**: Space Grotesk font family
- **Material Symbols**: Icon library

## 📦 Installation

1. Navigate to the project directory:
```bash
cd react-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📁 Project Structure

```
react-app/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── Home.css          # Home page animations
│   │   ├── Login.jsx         # Login page
│   │   ├── Login.css         # Login page styles
│   │   ├── Dashboard.jsx     # Dashboard page
│   │   ├── Editor.jsx        # Code editor page
│   │   └── QuickStart.jsx    # Quick start guide
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # Global app styles
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global CSS reset
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
└── vite.config.js            # Vite configuration
```

## 🎨 Design Features

### Landing Page
- Animated background with grain texture
- Floating gradient orbs
- Animated code flow lines
- Interactive cursor animations
- Orbit animations with profile avatars
- Typing terminal animation
- Feature showcase sections

### Login Page
- Split-screen layout
- Glass-morphism effects
- Social authentication buttons (GitHub, Google)
- Mesh gradient background
- Code preview panel

### Dashboard
- Project card grid
- Collaborator avatars
- Active status indicators
- Responsive layout

### Editor
- IDE-like interface
- File explorer sidebar
- Syntax-highlighted code editor mockup
- Terminal panel
- Collaborators sidebar with presence indicators

### Quick Start
- Step-by-step guide
- Code snippets with syntax highlighting
- Resource cards
- Clear call-to-action buttons

## 🎯 Available Routes

- `/` - Home/Landing page
- `/login` - Login page
- `/dashboard` - Dashboard
- `/editor` - Code editor
- `/quickstart` - Quick start guide

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Color Palette

- **Primary**: `#5AA060` (Green)
- **Primary Dark**: `#457d4a`
- **Primary Light**: `#7bc782`
- **Background Dark**: `#050505`
- **Charcoal**: `#121212`
- **Surface**: `#18181b`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔮 Future Enhancements

- Add state management (Redux/Zustand)
- Implement real authentication
- Add actual code editor functionality (Monaco Editor)
- WebSocket integration for real-time collaboration
- Dark/Light mode toggle
- User preferences and settings
- Project CRUD operations

## 📄 License

This project is part of the CodeSync platform.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
