# 🎮 Rahi Gaming Portfolio

A modern, responsive portfolio website for gaming content creator **Rahi Gaming**, built with React, Vite, and TailwindCSS. This portfolio showcases gaming projects, streaming content, community building efforts, and professional achievements in the gaming industry.

## 🌟 Features

### ✨ Modern Design
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatic theme detection with manual toggle functionality
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Glass Morphism Effects**: Modern UI with backdrop blur and transparency
- **Custom Color Palette**: Gaming-themed green color scheme with emerald, forest, and teal variants

### 🎯 Core Functionality
- **Multi-page Navigation**: Home, About, Projects, and Contact pages with smooth routing
- **Interactive Components**: Animated buttons, hover effects, and scroll indicators
- **Social Media Integration**: Direct links to YouTube, Discord, Facebook, Instagram, and more
- **Project Showcase**: Detailed project cards with technologies, features, and live links
- **Theme Context**: Persistent theme preferences with localStorage support

### 🎨 Visual Elements
- **Custom Animations**: Float, glow, shimmer, and gradient shift effects
- **Professional Typography**: Inter font family with responsive text sizing
- **Gaming Aesthetics**: Gaming-inspired color gradients and visual effects
- **Optimized Images**: Responsive image handling with proper aspect ratios

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.2.0** - Modern React with hooks and functional components
- **Vite 4.5.0** - Lightning-fast build tool and development server
- **React Router DOM 6.20.1** - Client-side routing and navigation

### Styling & UI
- **TailwindCSS 3.3.5** - Utility-first CSS framework
- **Framer Motion 10.16.5** - Advanced animation library
- **React Icons 4.12.0** - Comprehensive icon library

### Development Tools
- **ESLint** - Code linting with React-specific rules
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes
- **Vite Plugin React** - React support for Vite

### Deployment
- **GitHub Pages** - Automated deployment with gh-pages
- **Static Site Generation** - Optimized for fast loading

## 📁 Project Structure

```
portfolio-site/
├── dist/                          # Production build files
│   ├── assets/                    # Optimized assets
│   │   ├── *.jpg                 # Project images
│   │   ├── index-*.css           # Compiled CSS
│   │   └── index-*.js            # Compiled JavaScript
│   ├── index.html                # Production HTML
│   ├── logo.png                  # Site logo
│   └── vite.svg                  # Vite icon
├── src/                          # Source code
│   ├── assets/                   # Static assets
│   │   └── images/               # Project images
│   ├── components/               # Reusable components
│   │   ├── Header.jsx           # Navigation header
│   │   └── Footer.jsx           # Site footer
│   ├── contexts/                 # React contexts
│   │   └── ThemeContext.jsx     # Theme management
│   ├── data/                     # Static data
│   │   └── portfolioData.js     # Portfolio content data
│   ├── pages/                    # Page components
│   │   ├── Home.jsx             # Landing page
│   │   ├── About.jsx            # About page
│   │   ├── Projects.jsx         # Projects showcase
│   │   └── Contact.jsx          # Contact information
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Component styles
│   ├── index.css                # Global styles
│   └── main.jsx                 # App entry point
├── index.html                    # HTML template
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # TailwindCSS configuration
├── vite.config.js               # Vite configuration
├── postcss.config.js            # PostCSS configuration
└── eslint.config.js             # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/rahi-gaming-portfolio.git
   cd rahi-gaming-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint for code linting
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## 🎮 Portfolio Content

### Personal Information
- **Name**: Rahi Gaming
- **Title**: Gaming Content Creator
- **Location**: Rajshahi, Bangladesh
- **Experience**: 1+ years in gaming content creation
- **Specialties**: Streaming, video production, community building

### Social Media Presence
- 📺 **YouTube**: `error`
- 💬 **Discord**: `error`
- 👥 **Facebook**: `error`
- 📱 **Instagram**: `error`
- 📞 **WhatsApp**: `error`
- ✈️ **Telegram**: `error`

### Featured Projects
1. **Epic Gaming Montages** - High-energy highlight videos
2. **Live Gaming Streams** - Interactive streaming experience
3. **Gaming Tutorials & Guides** - Educational gaming content
4. **Gaming Community Discord** - Community management platform
5. **Game Reviews & First Impressions** - Honest game analysis
6. **Gaming Podcast Series** - Weekly gaming discussions

### Skills & Expertise
- **Content Creation**: Video editing, OBS Studio, Adobe Premiere
- **Gaming Platforms**: PC, PlayStation, Xbox, Nintendo Switch
- **Streaming Tools**: Twitch, StreamLabs, Discord Bots
- **Community Management**: Discord moderation, social media
- **Technical Skills**: Analytics, SEO optimization, sponsorship management

## 🎨 Customization

### Theme Configuration
The project uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: Emerald-based green palette
- **Forest**: Darker green variations
- **Teal**: Accent colors for highlights

### Content Updates
Update portfolio content by modifying `src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other personal information
};
```

### Styling Customization
- **Global Styles**: Edit `src/index.css`
- **Component Styles**: Modify individual component files
- **TailwindCSS**: Update `tailwind.config.js` for design tokens

## 🌐 Deployment

### GitHub Pages Deployment
The project is configured for automatic deployment to GitHub Pages:

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist/` folder to your web server
3. Configure your server to serve the `index.html` file

### Environment Variables
For production deployment, you may need to configure:
- Base URL in `vite.config.js`
- Social media links in `portfolioData.js`
- Contact form endpoints (if applicable)

## 🔧 Configuration Files

### Vite Configuration (`vite.config.js`)
```javascript
export default defineConfig({
  plugins: [react()],
  base: './', // Relative paths for GitHub Pages
})
```

### TailwindCSS Configuration
- Custom color palette for gaming theme
- Extended animations and keyframes
- Responsive design utilities
- Dark mode support

### ESLint Configuration
- React-specific linting rules
- Unused directive reporting
- Maximum warning limits

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px - 1536px
- **Large Desktop**: 1537px+

### Mobile Optimizations
- Touch-friendly navigation
- Optimized image sizes
- Readable typography
- Accessible button sizes

## 🎯 Performance Optimizations

- **Vite Build Tool**: Fast development and optimized production builds
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Responsive images with proper sizing
- **CSS Purging**: Unused CSS removal with TailwindCSS
- **Lazy Loading**: Components loaded on demand

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

### Development Guidelines
- Follow existing code style and conventions
- Use meaningful commit messages
- Test thoroughly on different devices
- Update documentation when necessary

## 📄 License

This project is open source.

## 📞 Contact

For questions, collaborations, or support:

- **Email**: `error`
- **Phone**: `error`
- **Discord**: `error`
- **YouTube**: `error`

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **TailwindCSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Vite** for the lightning-fast build tool
- **Gaming Community** for inspiration and support

---

**Built with ❤️ by Rahi Gaming** | **Powered by React + Vite + TailwindCSS**