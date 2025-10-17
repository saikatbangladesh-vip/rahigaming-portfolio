# Contributing to Rahi Gaming Portfolio

Thank you for your interest in contributing to the Rahi Gaming Portfolio! This document provides guidelines and instructions for contributing to this React-based portfolio website.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/rahigaming-portfolio.git
   cd rahigaming-portfolio
   ```
3. **Add the original repository as upstream**:
   ```bash
   git remote add upstream https://github.com/saikatbangladesh-vip/rahigaming-portfolio.git
   ```

### Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to `http://localhost:5173`

## 📋 Development Guidelines

### Code Style

- **JavaScript/React**: Follow existing patterns in the codebase
- **CSS/TailwindCSS**: Use utility classes consistently
- **File naming**: Use PascalCase for components, camelCase for utilities
- **Imports**: Keep imports organized (React first, then third-party, then local)

### Project Structure

```
src/
├── assets/         # Static assets (images, etc.)
├── components/     # Reusable React components
├── contexts/       # React context providers
├── data/          # Static data and configuration
├── pages/         # Page components
├── App.jsx        # Main application component
└── main.jsx       # Application entry point
```

### Component Guidelines

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Follow the existing naming conventions

Example component structure:
```jsx
import React from 'react';
import { motion } from 'framer-motion';

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here
  
  return (
    <motion.div className="component-styles">
      {/* Component JSX */}
    </motion.div>
  );
};

export default ComponentName;
```

### Styling Guidelines

- **Primary approach**: Use TailwindCSS utility classes
- **Custom styles**: Add to individual component files when necessary
- **Responsive design**: Always consider mobile-first approach
- **Dark/Light mode**: Use theme context for consistent theming
- **Animations**: Use Framer Motion for complex animations

### Theme Colors

The project uses a gaming-themed color palette:
- **Primary**: Emerald greens (`emerald-400`, `emerald-500`, etc.)
- **Secondary**: Forest greens for darker variants
- **Accent**: Teal colors for highlights
- **Background**: Dark theme with appropriate contrasts

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint (required before submitting)
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## 🎯 Types of Contributions

### 🐛 Bug Reports

When reporting bugs:
1. Check existing issues first
2. Use the bug report template
3. Include steps to reproduce
4. Provide browser/device information
5. Add screenshots if applicable

### ✨ Feature Requests

For new features:
1. Check if it aligns with project goals
2. Discuss in an issue before implementing
3. Consider impact on existing functionality
4. Provide clear use cases

### 🔨 Pull Requests

#### Before Submitting

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Keep your fork updated**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

3. **Run quality checks**:
   ```bash
   npm run lint    # Fix any linting errors
   npm run build   # Ensure build succeeds
   ```

4. **Test thoroughly**:
   - Test on different screen sizes
   - Test both light and dark modes
   - Verify all animations work smoothly

#### Pull Request Guidelines

- **Title**: Use clear, descriptive titles
- **Description**: Explain what changes you made and why
- **Screenshots**: Include before/after screenshots for UI changes
- **Testing**: Describe how you tested your changes
- **Breaking changes**: Clearly document any breaking changes

#### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested in both themes
- [ ] Linting passes

## Screenshots
(If applicable)
```

## 📁 Content Updates

### Portfolio Data

Update portfolio content in `src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Rahi Gaming",
  title: "Gaming Content Creator",
  // ... other information
};

export const projects = [
  {
    title: "Project Title",
    description: "Project description",
    technologies: ["React", "TailwindCSS"],
    // ... other project details
  }
];
```

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Update navigation in `Header.jsx`
4. Ensure responsive design
5. Test navigation flow

### Adding New Components

1. Create component in `src/components/`
2. Follow existing patterns
3. Add proper prop types if using TypeScript
4. Include responsive design
5. Test with different content lengths

## 🎨 Design Guidelines

### Responsive Design

- **Mobile first**: Design for mobile, then enhance for larger screens
- **Breakpoints**: Use TailwindCSS breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
- **Touch targets**: Ensure buttons are at least 44px for mobile
- **Text readability**: Maintain good contrast ratios

### Animations

- **Framer Motion**: Use for complex animations
- **CSS transitions**: Use for simple hover effects
- **Performance**: Consider animation performance on mobile
- **Accessibility**: Respect `prefers-reduced-motion`

### Accessibility

- **Semantic HTML**: Use appropriate HTML elements
- **Alt text**: Provide descriptive alt text for images
- **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
- **Color contrast**: Maintain WCAG AA compliance
- **Screen readers**: Test with screen reader software

## 🧪 Testing

### Manual Testing Checklist

- [ ] Navigation works on all pages
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Dark/light mode toggle works
- [ ] All animations work smoothly
- [ ] External links open in new tabs
- [ ] Contact information displays correctly
- [ ] Performance is acceptable on slower devices

### Browser Compatibility

Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

The project uses GitHub Pages for deployment:

1. Changes to `main` branch trigger automatic deployment
2. Use `npm run deploy` for manual deployment
3. Ensure `vite.config.js` has correct base path
4. Verify all assets load correctly on the live site

## 📝 Commit Guidelines

### Commit Message Format

```
type(scope): brief description

Longer description if necessary

- List changes if multiple
- Use present tense
- Reference issues with #123
```

### Commit Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting changes
- `refactor`: Code changes that neither fix bugs nor add features
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
git commit -m "feat(projects): add new gaming project showcase"
git commit -m "fix(header): resolve mobile navigation toggle issue"
git commit -m "docs(readme): update installation instructions"
```

## ❓ Getting Help

If you need help:

1. **Check existing documentation** (README.md, this file)
2. **Search existing issues** on GitHub
3. **Create a new issue** with clear description
4. **Join discussions** in existing issues
5. **Ask questions** in pull request comments

## 🙏 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project documentation (if significant contribution)
- Release notes (for major features/fixes)

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for contributing to the Rahi Gaming Portfolio!** 🎮

Your contributions help make this portfolio better for the gaming community.
