# Quick Start Guide

## Viewing the Website

Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

## Adding Your Own Content

### 1. Replace Placeholder Text

Edit the HTML files to replace the sample content with your actual information:
- `index.html` - Update your name and introduction
- `achievements.html` - Add your certifications and accomplishments
- `experience.html` - Add your work history

### 2. Add Your Media Files

**Images:**
1. Copy your images (JPG, PNG, GIF) to `assets/images/`
2. Update the `src` attribute in HTML files:
   ```html
   <img src="assets/images/your-photo.jpg" alt="Description">
   ```

**Videos:**
1. Copy your videos (MP4, WebM) to `assets/videos/`
2. Update the video source:
   ```html
   <video controls>
       <source src="assets/videos/your-video.mp4" type="video/mp4">
   </video>
   ```

### 3. Customize Colors

Edit `styles.css` and change the CSS variables at the top:
```css
:root {
    --primary-color: #1e3a8a;      /* Change to your preferred color */
    --secondary-color: #3b82f6;
    --accent-color: #60a5fa;
}
```

## Deploying Online

### Option 1: GitHub Pages (Free)
1. Commit and push your changes to GitHub
2. Go to repository Settings → Pages
3. Select branch to deploy
4. Your site will be live at `https://username.github.io/repository-name/`

### Option 2: Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop your project folder
3. Get instant deployment

### Option 3: Traditional Web Hosting
Upload all files via FTP to your web hosting provider.

## Tips

- Keep image sizes reasonable (< 500KB each) for faster loading
- Use MP4 format for videos for best compatibility
- Test on mobile devices after making changes
- Backup your files before major edits

## Need Help?

See the full README.md for detailed instructions and examples.
