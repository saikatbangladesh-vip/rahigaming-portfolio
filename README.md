# 🎮 Rahi Gaming Portfolio

A modern and interactive gaming content creator portfolio website built with React, Vite, and Tailwind CSS.

## ✨ Project Overview

Rahi Gaming Portfolio is a single-page application (SPA) designed for a professional gaming content creator. This website showcases gaming content, streaming experience, and community engagement through a beautiful and engaging user interface.

### 🎯 Key Features

- **🌟 Modern UI/UX**: Smooth animations built with React and Framer Motion
- **🌓 Dark/Light Theme**: Theme switching based on user preference
- **📱 Responsive Design**: Works beautifully on all devices
- **🔍 Smart Search**: Advanced search feature for pages and projects
- **🎨 Gradient Effects**: Attractive visual elements
- **⚡ Fast Performance**: Optimized with Vite

## 🚀 Technology Stack

### Frontend
- **React 18.2.0** - Component-based UI framework
- **React Router DOM 6.20.1** - Client-side routing
- **Framer Motion 10.16.5** - Smooth animation library
- **React Icons 4.12.0** - Icon collection

### Styling
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **PostCSS 8.4.31** - CSS processing tool
- **Autoprefixer 10.4.16** - CSS vendor prefixes

### Build Tools
- **Vite 4.5.0** - Fast build tool
- **@vitejs/plugin-react 4.1.1** - React support
- **ESLint 8.53.0** - Code quality tool

### Deployment
- **gh-pages 6.1.0** - GitHub Pages deployment

## 📁 Project Structure

```
portfolio-site/
├── public/                  # Static files
│   ├── logo.png            # Logo
│   └── vite.svg           # Vite icon
├── src/                    # Source code
│   ├── assets/            # Resource files
│   │   └── images/        # Image storage
│   ├── components/        # Reusable components
│   │   ├── Header.jsx     # Navigation header
│   │   └── Footer.jsx     # Footer
│   ├── contexts/          # React Context
│   │   └── ThemeContext.jsx # Theme management
│   ├── data/              # Static data
│   │   └── portfolioData.js # Portfolio information
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   ├── About.jsx      # About page
│   │   ├── Projects.jsx   # Projects page
│   │   └── Contact.jsx    # Contact page
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── eslint.config.js       # ESLint configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies
```

## 🛠️ Installation and Setup

### Prerequisites
- Node.js (16.x or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/rahi-gaming-portfolio.git
cd rahi-gaming-portfolio
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Start development server
```bash
npm run dev
# or
yarn dev
```

### 4. Open in browser
Go to `http://localhost:5173` in your browser

## 📜 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run preview    # Preview build
npm run lint       # ESLint check
npm run deploy     # Deploy to GitHub Pages
```

## 🎨 Customization Guide

### 1. Update personal information
Update the following information in `src/data/portfolioData.js`:
- Name and title
- Contact information
- Social links
- Skills and experience

### 2. Theme customization
Add custom colors and animations in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your preferred colors
  }
}
```

### 3. Adding projects
Add new projects to the `projects` array in `portfolioData.js`:
```javascript
{
  id: 7,
  title: "Your Project Name",
  description: "Description",
  technologies: ["React", "Node.js"],
  // Other fields
}
```

## 🚀 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Other platforms
1. **Vercel**: Connect GitHub repository
2. **Netlify**: Upload `dist` folder
3. **Firebase**: Use Firebase CLI

## 🔧 Configuration

### Vite Configuration
```javascript
export default defineConfig({
  plugins: [react()],
  base: './', // For GitHub Pages
})
```

### Tailwind Configuration
- Custom fonts: Inter and JetBrains Mono
- Dark mode: Class-based
- Custom animations and keyframes

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Key Features Details

### 1. Animated Hero Section
- Floating elements
- Gradient backgrounds
- Interactive logo

### 2. Dynamic Navigation
- Scroll-based style changes
- Mobile-friendly menu
- Search functionality

### 3. Theme System
- System preference detection
- localStorage persistence
- Smooth transitions

### 4. Project Showcase
- Card-based layout
- Hover effects
- Category filtering

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**: 
   ```bash
   npm run dev -- --port 3000
   ```

2. **CSS not loading**:
   - Check Tailwind configuration
   - Verify PostCSS setup

3. **Routing issues**:
   - Check React Router setup
   - Verify base URL configuration

## 📈 Future Improvements

- [ ] CMS integration (Strapi/Contentful)
- [ ] Blog system
- [ ] Multi-language support
- [ ] Performance optimization
- [ ] PWA features
- [ ] Analytics integration

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: rahi.gaming@example.com
- **Website**: [https://rahigaming.github.io](https://rahigaming.github.io)
- **Discord**: discord.gg/rahigaming

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the excellent CSS framework
- **Framer Motion** - For smooth animations
- **Vite** - For the fast build tool

---

⭐ **If you like this project, don't forget to give it a star on GitHub!**
