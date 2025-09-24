# Lead Gen That Works - Website

A modern, responsive website for Lead Gen That Works - a lead generation automation service that helps B2B sales teams automate their prospecting process and increase response rates.

## Project Structure

```
that-works-website/
│
├── index.html              # Homepage
├── about.html              # About Us page
├── blog.html               # Blog/Resources page
├── contact.html            # Contact form page
├── how-it-works.html       # Process explanation page
├── pricing.html            # Pricing plans page
├── README.md               # Project documentation
│
├── css/
│   └── master.css          # Main stylesheet with all styling
│
└── js/
    ├── main.js             # Main JavaScript functionality
    ├── header.js           # Shared header component
    └── footer.js           # Shared footer component
```

## Features

- **Responsive Design**: Mobile-first approach with clean, modern aesthetics
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Smooth Animations**: Intersection Observer-based scroll animations
- **Component Architecture**: Shared header/footer components
- **Interactive Elements**: FAQ accordions, pricing toggles, search/filtering
- **Form Handling**: Contact forms with validation
- **Blog System**: Category filtering and search functionality
- **Pricing Calculator**: Geographic pricing adjustments

## Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern CSS with custom properties, Grid, Flexbox
- **Vanilla JavaScript**: No external dependencies
- **Google Fonts**: Inter font family
- **Progressive Enhancement**: Works without JavaScript

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 80+

## Development

### Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - pure HTML/CSS/JS

### File Organization

- **CSS**: All styles consolidated in `css/master.css` with clear section headers
- **JavaScript**: All functionality in `js/main.js` with modular organization
- **Components**: Header and footer loaded via JavaScript modules

### Customization

#### Colors
Edit CSS custom properties in `css/master.css`:
```css
:root {
    --accent-color: #ff6b35;
    --primary-bg: #fefdfb;
    /* etc... */
}
```

#### Content
Update content directly in HTML files. All text, images, and structure are easily editable.

## Features by Page

### Homepage (`index.html`)
- Hero section with animated background elements
- 3-step process explanation
- Problem/solution positioning
- Results metrics
- Call-to-action sections

### About (`about.html`)
- Company story and mission
- Team member profiles
- Statistics and social proof
- Value proposition

### Blog (`blog.html`)
- Article grid with category filtering
- Search functionality
- Newsletter signup
- Featured posts

### Contact (`contact.html`)
- Multi-step contact form
- Contact information cards
- FAQ accordion
- Form validation

### How It Works (`how-it-works.html`)
- 4-step process breakdown
- Manual vs. automated comparison
- Technology stack overview
- Weekly deliverables

### Pricing (`pricing.html`)
- 3-tier pricing structure
- Annual/monthly billing toggle
- Geographic pricing adjustments
- FAQ section
- One-time purchase option

## Performance

- Minimal external dependencies
- Optimized CSS with efficient selectors
- Lazy-loaded animations
- Compressed and organized code structure

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast color schemes
- Responsive typography

## License

Private project - All rights reserved.
