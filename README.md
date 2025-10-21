# Bhavika's Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth animations and a professional dark theme.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark Theme**: Professional charcoal/graphite design with teal accents
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Interactive Elements**: Hover effects, typewriter animation, particle background
- **Contact Form**: Functional contact form with validation
- **Skill Bars**: Animated progress bars for technical skills
- **Project Showcase**: Interactive project cards with overlay effects
- **Accessibility**: Keyboard navigation and focus management
- **Performance**: Optimized images and smooth scrolling

## 🚀 Live Demo

Visit the live website: [Your GitHub Pages URL]

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive functionality and animations
- **AOS Library**: Scroll-triggered animations
- **Particles.js**: Dynamic background particles
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins and Inter fonts

## 📁 Project Structure

```
bbportfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── assets/             # Static assets folder
│   ├── profile.jpg     # Profile picture
│   ├── resume.pdf      # Resume/CV
│   ├── favicon.ico     # Website favicon
│   └── [project images] # Project screenshots
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Palette
- **Primary Background**: #121212 (Charcoal)
- **Secondary Background**: #2A2A2A (Dark Gray)
- **Text Primary**: #EAEAEA (Light Gray)
- **Accent Color**: #00BFA6 (Teal)
- **Secondary Accent**: #C084FC (Purple)

### Typography
- **Headings**: Poppins (Modern, clean)
- **Body Text**: Inter (Readable, neutral)

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bbportfolio.git
   cd bbportfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. **Customize content**
   - Replace placeholder images in `assets/` folder
   - Update personal information in `index.html`
   - Modify project details and descriptions
   - Add your real resume PDF

## 📝 Customization Guide

### Adding Your Content

1. **Profile Information**
   - Update name, title, and description in the hero section
   - Replace `assets/profile.jpg` with your photo
   - Update contact information

2. **Projects**
   - Replace project images in `assets/` folder
   - Update project titles, descriptions, and technologies
   - Add real GitHub and demo links

3. **Skills**
   - Modify skill categories and percentages
   - Add or remove skills as needed
   - Update skill bar animations

4. **Styling**
   - Change colors in CSS variables at the top of `styles.css`
   - Modify fonts by updating Google Fonts links
   - Adjust animations and transitions

### Color Customization

```css
:root {
    --bg-primary: #121212;        /* Main background */
    --accent-primary: #00BFA6;   /* Primary accent */
    --accent-secondary: #C084FC; /* Secondary accent */
    /* Update these values to change the theme */
}
```

## 🌐 Deployment

### GitHub Pages

1. **Create GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/bbportfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save settings

3. **Access your site**
   - Your portfolio will be available at: `https://yourusername.github.io/bbportfolio`

### Alternative Hosting

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **Custom Domain**: Configure DNS settings

## 📱 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🔧 Development

### Local Development
```bash
# Install dependencies (if using a build process)
npm install

# Start development server
npm start
```

### Building for Production
```bash
# Optimize images
# Minify CSS and JavaScript
# Test on multiple devices
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help customizing the portfolio:

- Create an issue on GitHub
- Contact: bhavika@example.com
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- [AOS Library](https://michalsnik.github.io/aos/) for scroll animations
- [Particles.js](https://vincentgarreau.com/particles.js/) for background effects
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography

---

**Made with ❤️ by Bhavika**

*Building elegant digital experiences that tell your story.*
