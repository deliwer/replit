
# AquaCafe Dawn Theme - Custom Shopify Theme

This is a fully customized version of Shopify's Dawn theme specifically designed for AquaCafe by DeliWer, featuring Dubai-inspired water system branding and premium functionality.

## 🌊 AquaCafe Features

### Custom Brand Integration
- **AquaCafe Brand Colors**: Aqua Primary (#00BCC4), Dubai Gold (#F2BA39), Dirham Green (#2EC482)
- **Custom Hero Section**: Dynamic AquaCafe-branded hero with water-themed animations
- **Membership Rewards Section**: Dedicated loyalty program showcase
- **Dubai-Inspired Design**: Color palette and styling reflecting Dubai's premium market

### Enhanced Sections
1. **AquaCafe Hero Banner** - Custom hero section with brand integration
2. **Membership Rewards** - Loyalty program display with card visuals
3. **Premium Water Systems** - Featured collection showcase
4. **Why Choose AquaCafe** - Benefits and features section
5. **Smart Features Grid** - Technology highlights in multi-column layout

### Custom Styling
- **Gradient Backgrounds**: Aqua-to-blue gradients throughout
- **Enhanced Buttons**: Hover effects with color transitions
- **Card Components**: Premium card styling with shadows and hover effects
- **Responsive Design**: Mobile-optimized for all screen sizes
- **Custom Animations**: Fade-in and pulse effects

## 🎨 Theme Settings

### AquaCafe Brand Settings (Theme Customizer)
- **Brand Name**: Customizable brand name (default: "AquaCafe")
- **Brand Description**: Customizable tagline (default: "Premium Water Systems by DeliWer")
- **Brand Colors**: 
  - AquaCafe Primary Color
  - AquaCafe Secondary Color  
  - Dubai Gold
  - Dubai Sand
  - Dirham Green

### Custom Sections Available
- `aquacafe-hero.liquid` - Custom hero banner
- `aquacafe-membership.liquid` - Membership rewards section

## 📦 Installation Instructions

### Option 1: Direct Upload to Shopify
1. **Create ZIP file**: Compress the entire `dawn-custom` folder into a ZIP file
2. **Upload to Shopify**:
   - Go to Online Store > Themes in your Shopify admin
   - Click "Upload theme"
   - Select your ZIP file
   - Click "Upload"
3. **Activate Theme**: Click "Publish" to make it live

### Option 2: Shopify CLI (Advanced)
```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Navigate to theme directory
cd dawn-custom

# Connect to your store
shopify theme dev --store your-store.myshopify.com

# Push to Shopify
shopify theme push
```

## ⚙️ Customization Guide

### 1. Brand Colors
Navigate to Theme Settings > AquaCafe Brand Settings:
- Adjust primary and secondary colors
- Modify Dubai Gold and Dirham Green accents
- Update brand name and description

### 2. Homepage Layout
The custom `index.json` template includes:
- AquaCafe Hero section
- Membership rewards showcase
- Featured water systems collection
- Benefits and features sections

### 3. Adding Sections
Use the theme customizer to:
- Add/remove sections
- Reorder content blocks
- Adjust padding and spacing
- Configure section-specific settings

## 🛠️ Technical Details

### File Structure
```
dawn-custom/
├── assets/
│   ├── aquacafe-custom.css     # Custom AquaCafe styles
│   └── [other Dawn assets]
├── config/
│   ├── settings_schema.json    # Enhanced with AquaCafe settings
│   └── settings_data.json
├── sections/
│   ├── aquacafe-hero.liquid    # Custom hero section
│   ├── aquacafe-membership.liquid # Membership section
│   └── [other Dawn sections]
├── templates/
│   ├── index.json              # Custom homepage layout
│   └── [other Dawn templates]
└── [other Dawn directories]
```

### Custom CSS Classes
- `.btn-aquacafe` - Primary AquaCafe button styling
- `.btn-gold` - Dubai Gold button styling
- `.card-aquacafe` - Premium card component
- `.gradient-aqua` - Aqua gradient background
- `.gradient-sand` - Dubai Sand gradient background

### Color Variables
```css
:root {
  --aqua-primary: #00BCC4;
  --aqua-secondary: #1E7297;
  --dubai-gold: #F2BA39;
  --dubai-sand: #FAF1BA;
  --dirham-green: #2EC482;
}
```

## 🎯 Marketing Features

### Membership Integration
- Visual membership card display
- Benefits list with water-drop icons
- Premium styling and hover effects

### Water System Focus
- Technology-focused feature grid
- Dubai-specific messaging
- Premium water filtration emphasis

### DeliWer Branding
- Integrated service provider messaging
- Support and maintenance highlights
- Professional service emphasis

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly buttons and navigation
- Optimized images and performance
- Mobile-specific styling adjustments

## 🚀 Performance Features

- Lazy loading for images
- Optimized CSS and animations
- Minimal JavaScript usage
- Fast loading times

## 🔧 Maintenance

### Regular Updates
- Monitor Shopify theme updates
- Test new features before deployment
- Backup theme before major changes
- Keep custom code documented

### Performance Monitoring
- Page speed optimization
- Mobile responsiveness testing
- Cross-browser compatibility
- Accessibility compliance

## 📞 Support

For technical support or customization requests related to this AquaCafe theme:
- Theme customization questions
- AquaCafe-specific features
- Performance optimization
- Integration assistance

## 📄 License

Based on Shopify's Dawn theme with custom AquaCafe enhancements.
Original Dawn theme: MIT License
Custom AquaCafe modifications: Proprietary

---

**Version**: 1.0.0 AquaCafe Custom  
**Based on**: Dawn 15.4.0  
**Last Updated**: January 2024  
**Optimized for**: Dubai water systems market
