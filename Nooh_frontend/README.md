# NOOH Living Elevated - Luxury Interior Design Website

A premium, production-ready luxury interior design website built with React.js, Tailwind CSS, Framer Motion, and GSAP.

## 🌟 Features

- **Luxury Design**: Black, gold, and white color palette with premium glassmorphism effects
- **Smooth Animations**: Framer Motion and GSAP scroll animations
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **SEO Optimized**: React Helmet for meta tags and SEO
- **Modern UI/UX**: Floating WhatsApp button, sticky navigation, scroll progress indicator
- **Interactive Components**: Animated statistics counter, before/after showcase, lightbox gallery
- **Performance**: Fast loading with optimized images and code splitting

## 📦 Tech Stack

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Professional animation platform
- **React Router** - Navigation
- **React Icons** - Icon library
- **Swiper** - Modern slider
- **AOS** - Animate on scroll library
- **React Helmet Async** - SEO management

## 🚀 Getting Started

### Installation

```bash
cd nooh-living-elevated
npm install
```

### Development

```bash
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Creates optimized production build in the `build` folder.

## 📁 Project Structure

```
nooh-living-elevated/
├── public/
│   ├── index.html
│   ├── logo.png
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── home/
│   │       ├── Hero.jsx
│   │       ├── Stats.jsx
│   │       ├── FeaturedServices.jsx
│   │       ├── FeaturedProjects.jsx
│   │       ├── WhyChoose.jsx
│   │       └── CTASection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Products.jsx
│   │   ├── Projects.jsx
│   │   ├── Skylume.jsx
│   │   ├── NoohStar.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Pages

1. **Home** - Hero section, stats, featured services, projects, why choose us
2. **About Us** - Company overview, mission, vision, values
3. **Services** - All services with detailed descriptions
4. **Products** - Gallery with category filters and lightbox
5. **Projects** - Portfolio with category filters
6. **NOOH SKYLUME™** - Artificial daylight systems showcase
7. **NOOHSTAR™** - Fiber optic star ceiling systems
8. **Testimonials** - Client reviews with ratings
9. **Contact** - Contact form, map, business hours

## 🎯 Key Features

### Navigation
- Sticky navbar with glassmorphism effect
- Mega menu for sub-navigation
- Mobile responsive hamburger menu
- Smooth scroll to sections

### Animations
- GSAP scroll-triggered animations
- Framer Motion page transitions
- Animated counters for statistics
- Hover effects on cards and images
- Entrance animations with AOS

### Interactive Elements
- Floating WhatsApp button with pulse animation
- Scroll progress indicator
- Lightbox image viewer
- Before/After project showcase
- Swiper sliders for galleries
- Filter functionality for products/projects

### Forms
- Contact form with validation
- Project type selector
- Google Maps integration
- Phone and email links

### SEO & Performance
- React Helmet for dynamic meta tags
- Semantic HTML structure
- Lazy loading images
- Optimized asset delivery
- Fast loading times

## 🎨 Color Palette

- **Black**: #0a0a0a (luxury-black)
- **Gold**: #d4af37 (luxury-gold)
- **White**: #ffffff (luxury-white)
- **Gray**: #1a1a1a (luxury-gray)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Update Company Information

Edit the contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### Add/Modify Services

Update service data in:
- `src/components/home/FeaturedServices.jsx`
- `src/pages/Services.jsx`

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  luxury: {
    black: '#0a0a0a',
    gold: '#d4af37',
    // ...
  }
}
```

### Add Images

Place images in `public/images/` and update image paths in components.

## 📞 Contact Information

- **Address**: D-180, Sector 10, Noida - 201301, India
- **Phone**: +91 9540060180, +91 9958748979
- **Email**: info@noohliving.com
- **Website**: www.noohliving.com

## 📄 License

© 2024 NOOH Living Elevated LLP. All Rights Reserved.

## 🤝 Support

For any queries or support, please contact:
- Email: info@noohliving.com
- Phone: +91 9540060180

---

**Built with ❤️ for NOOH Living Elevated LLP**
