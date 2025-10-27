## Hero Section Image Update

The hero section has been updated to use an image instead of floating cards. Here's what changed:

### Current Implementation
- **Replaced**: Floating stat cards with a professional image
- **Image Source**: Currently using a placeholder from Unsplash (Amazon/e-commerce themed)
- **Animation**: Maintains the slide-in animation from right side
- **Styling**: Responsive design with hover effects

### To Replace the Image

1. **Add your own image** to the `public` folder (e.g., `hero-image.jpg`, `hero-image.png`)
2. **Update the image source** in `src/pages/Home/Home.jsx`:
   ```jsx
   <img
     src="/your-image-name.jpg"  // Replace with your image file name
     alt="AMZCOZ - Amazon Growth Experts"
     className="hero-image"
   />
   ```

### Image Requirements
- **Recommended size**: 800x600px or similar aspect ratio
- **Format**: JPG, PNG, or WebP
- **Optimization**: Compress for web to ensure fast loading

### Responsive Design
The image is fully responsive and will:
- Scale appropriately on all screen sizes
- Maintain aspect ratio
- Show a gradient background fallback if image fails to load
- Hide on mobile if needed (currently visible on all devices)

The image includes hover effects and the signature floating animation for a professional look!
