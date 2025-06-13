# My Portfolio

A modern, interactive portfolio website built with React.js featuring Three.js animations, GSAP transitions, and a responsive design.

## Features

- **Modern Design**: Dark theme with glassmorphism effects
- **Three.js Background**: Interactive particle system
- **GSAP Animations**: Smooth scroll-triggered animations
- **Custom Cursor**: Interactive cursor with trail effects
- **Responsive Design**: Mobile-first approach
- **Modular Architecture**: Clean, organized React components
- **Performance Optimized**: Efficient rendering and animations

## Tech Stack

- **React.js** - Frontend framework
- **Three.js** - 3D graphics and animations
- **GSAP** - Animation library
- **CSS3** - Styling with modern features
- **Font Awesome** - Icons

## Project Structure

```
src/
├── components/
│   ├── Header.js           # Navigation header
│   ├── Hero.js             # Hero section
│   ├── Projects.js         # Projects section
│   ├── ProjectCard.js      # Individual project cards
│   ├── Contact.js          # Contact section
│   ├── Footer.js           # Footer component
│   ├── Loader.js           # Loading screen
│   ├── CustomCursor.js     # Custom cursor implementation
│   ├── ProgressBar.js      # Scroll progress indicator
│   ├── ScrollToTop.js      # Scroll to top button
│   └── ThreeJsBackground.js # Three.js particle background
├── hooks/
│   └── useGSAPAnimations.js # GSAP animation hook
├── data/
│   ├── projectsData.js     # Projects data
│   └── socialLinks.js      # Social links data
├── utils/
│   └── scrollUtils.js      # Scroll utility functions
├── styles/
│   └── App.css             # Main stylesheet
├── App.js                  # Main App component
├── index.js               # Entry point
└── index.css              # Base styles
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sayantan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Key Components

### App.js
Main application component that manages the overall structure and animation initialization.

### Header.js
Responsive navigation header with mobile menu and smooth scrolling functionality.

### Hero.js
Landing section with animated text and call-to-action button.

### Projects.js & ProjectCard.js
Projects showcase with grid layout and individual project cards.

### ThreeJsBackground.js
Interactive particle system using Three.js for background animation.

### useGSAPAnimations.js
Custom hook managing all GSAP scroll-triggered animations.

## Customization

### Adding New Projects
Edit `src/data/projectsData.js` to add or modify projects:

```javascript
{
  title: "Project Title",
  description: "Project description...",
  github: "https://github.com/username/repo",
  demo: "https://demo-url.com" // Optional
}
```

### Modifying Social Links
Update `src/data/socialLinks.js` to change contact information:

```javascript
{
  href: "contact-url",
  icon: "font-awesome-class",
  text: "Display text",
  target: "_blank" // Optional
}
```

### Styling Changes
Modify `src/styles/App.css` for design customizations. The CSS uses CSS custom properties for easy theming.

## Performance Considerations

- **Three.js Optimization**: Particle count and rendering optimized for performance
- **GSAP Cleanup**: Proper cleanup of animations and event listeners
- **Lazy Loading**: Components load animations only when needed
- **Mobile Optimization**: Cursor effects disabled on mobile devices

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

- **Email**: msayantan05@gmail.com
- **LinkedIn**: [Sayantan Mandal](https://linkedin.com/in/sayantan-mandal-8a14b7202)
- **GitHub**: [sayantanmandal1](https://github.com/sayantanmandal1)
