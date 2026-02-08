# Michael Saber - Professional Portfolio

A comprehensive portfolio website showcasing achievements and work experience tailored for the pilot and data analyst industries.

## Features

- **Homepage**: Professional introduction with key highlights
- **Achievements Page**: Detailed showcase of certifications and accomplishments with support for images and videos
- **Work Experience Page**: Interactive timeline of professional journey
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Media Support**: Display documents, images, and video content
- **Industry-Focused**: Tailored content for aviation (pilot) and data analytics fields

## Structure

```
saberportofolio/
├── index.html              # Homepage
├── achievements.html       # Achievements and certifications
├── experience.html         # Work experience timeline
├── styles.css             # Styling and responsive design
├── script.js              # Interactive features and animations
├── assets/
│   ├── images/           # Place your images here
│   └── videos/           # Place your videos here
└── README.md             # This file
```

## How to Use

1. **View the Website**: Open `index.html` in a web browser
2. **Add Your Content**: Edit the HTML files to add your personal achievements and experience
3. **Add Media**: 
   - Place images in `assets/images/`
   - Place videos in `assets/videos/`
   - Update the file paths in the HTML files

## Customizing Content

### Adding Achievements

Edit `achievements.html` to add your own achievements. Each achievement follows this structure:

```html
<div class="achievement-item">
    <div class="achievement-header">
        <h4>Achievement Title</h4>
        <span class="date">Year</span>
    </div>
    <p class="description">Description of the achievement</p>
    <div class="media-grid">
        <div class="media-item">
            <img src="assets/images/your-image.jpg" alt="Description">
            <p class="media-caption">Image caption</p>
        </div>
    </div>
</div>
```

### Adding Work Experience

Edit `experience.html` to add your work history. Each experience follows this structure:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="experience-header">
            <div>
                <h3>Job Title</h3>
                <h4>Company Name</h4>
            </div>
            <span class="date">Date Range</span>
        </div>
        <p class="description">Job description</p>
        <ul class="responsibilities">
            <li>Responsibility 1</li>
            <li>Responsibility 2</li>
        </ul>
    </div>
</div>
```

### Adding Images

1. Copy your images to `assets/images/`
2. Update the `src` attribute in the HTML: `src="assets/images/your-image.jpg"`

### Adding Videos

1. Copy your videos to `assets/videos/`
2. Update the video source in the HTML:

```html
<div class="video-container">
    <video controls poster="assets/images/thumbnail.jpg">
        <source src="assets/videos/your-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
```

## Placeholder Images

The website includes automatic placeholder generation for images. While developing, you can use the `data-placeholder` attribute:

```html
<img src="placeholder.jpg" alt="Description" class="achievement-image" data-placeholder="certificate">
```

Placeholder types:
- `certificate` - Blue gradient for certificates
- `award` - Yellow gradient for awards
- `training` - Purple gradient for training materials
- `dashboard` - Green gradient for data dashboards
- `cockpit` - Blue gradient for aviation images
- `report` - Red gradient for reports

## Color Customization

To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1e3a8a;      /* Dark blue */
    --secondary-color: #3b82f6;     /* Medium blue */
    --accent-color: #60a5fa;        /* Light blue */
    /* ... other colors */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select the branch to deploy (e.g., `main`)
4. Your site will be available at `https://username.github.io/repository-name/`

### Other Hosting
Simply upload all files to your web hosting provider, maintaining the folder structure.

## License

This portfolio template is free to use for personal and commercial purposes.

## Support

For questions or issues, please open an issue in the repository.
