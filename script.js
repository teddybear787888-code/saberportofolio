// Mobile menu toggle (if needed in future)
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe achievement and timeline items
    document.querySelectorAll('.achievement-item, .timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Generate placeholder content for images
    const placeholderImages = document.querySelectorAll('img[data-placeholder]');
    placeholderImages.forEach(img => {
        const placeholderType = img.getAttribute('data-placeholder');
        const alt = img.getAttribute('alt');
        
        // Create placeholder canvas
        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 600;
        const ctx = canvas.getContext('2d');
        
        // Set gradient background based on type
        let gradient;
        switch(placeholderType) {
            case 'certificate':
                gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#dbeafe');
                gradient.addColorStop(1, '#bfdbfe');
                break;
            case 'award':
                gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#fef3c7');
                gradient.addColorStop(1, '#fde68a');
                break;
            case 'training':
                gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#ddd6fe');
                gradient.addColorStop(1, '#c4b5fd');
                break;
            case 'dashboard':
                gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#d1fae5');
                gradient.addColorStop(1, '#a7f3d0');
                break;
            case 'cockpit':
                gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#1e3a8a');
                gradient.addColorStop(1, '#3b82f6');
                break;
            case 'report':
                gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#fecaca');
                gradient.addColorStop(1, '#fca5a5');
                break;
            default:
                gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#e2e8f0');
                gradient.addColorStop(1, '#cbd5e1');
        }
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add icon based on type
        ctx.font = 'bold 120px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        let icon = '📄';
        switch(placeholderType) {
            case 'certificate':
                icon = '🎓';
                break;
            case 'award':
                icon = '🏆';
                break;
            case 'training':
                icon = '✈️';
                break;
            case 'dashboard':
                icon = '📊';
                break;
            case 'cockpit':
                icon = '🛫';
                break;
            case 'report':
                icon = '📈';
                break;
        }
        
        // Draw icon
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillText(icon, canvas.width / 2, canvas.height / 2 - 40);
        
        // Add text
        ctx.font = 'bold 32px Arial';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillText(alt || 'Placeholder Image', canvas.width / 2, canvas.height / 2 + 80);
        
        // Convert to data URL and set as src
        img.src = canvas.toDataURL('image/png');
    });

    // Video poster generation for missing posters
    const videos = document.querySelectorAll('video[poster]');
    videos.forEach(video => {
        const poster = video.getAttribute('poster');
        if (poster && !poster.startsWith('data:')) {
            // Create a simple poster placeholder
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 450;
            const ctx = canvas.getContext('2d');
            
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#1e3a8a');
            gradient.addColorStop(1, '#3b82f6');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Add play icon
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
            ctx.fill();
            
            ctx.fillStyle = '#1e3a8a';
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2 - 20, canvas.height / 2 - 30);
            ctx.lineTo(canvas.width / 2 - 20, canvas.height / 2 + 30);
            ctx.lineTo(canvas.width / 2 + 30, canvas.height / 2);
            ctx.closePath();
            ctx.fill();
            
            // Add text
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.textAlign = 'center';
            ctx.fillText('Video Content', canvas.width / 2, canvas.height / 2 + 120);
            
            video.setAttribute('poster', canvas.toDataURL('image/png'));
        }
    });

    console.log('Portfolio website loaded successfully!');
});
