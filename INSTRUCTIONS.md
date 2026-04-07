# The Lighthouse School Website - Complete Documentation

## Overview

This is a premium, production-ready school website built with React, TypeScript, Tailwind CSS, and Framer Motion. The entire website is data-driven, making it easy to update content without touching the code.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/
│   ├── layout/              # Header, Footer, Buttons
│   ├── home/                # Home page sections
│   └── shared/              # Reusable components
├── pages/                   # All page components
├── content/
│   └── schoolData.ts        # ALL WEBSITE CONTENT (EDIT THIS!)
├── theme/
│   └── themeConfig.ts       # ALL COLORS & STYLES (EDIT THIS!)
├── App.tsx                  # Main app with routing
├── index.css                # Global styles & fonts
└── main.tsx                 # Entry point
```

## How to Edit Content

### 1. Editing School Information & All Text Content

**File:** `src/content/schoolData.ts`

This file contains ALL website content. You can edit:

- School name, tagline, address, phone numbers
- Hero section text
- Announcements
- Facilities descriptions
- Curriculum information
- House system details
- Events and activities
- Leadership messages
- FAQs
- Gallery images
- And much more!

**Example - Change School Contact:**

```typescript
contact: {
  phones: ['YOUR-PHONE-1', 'YOUR-PHONE-2'],
  whatsapp: 'YOUR-WHATSAPP-NUMBER',
  email: 'YOUR-EMAIL@example.com',
}
```

**Example - Change Hero Text:**

```typescript
hero: {
  headline: 'Your New Headline Here',
  subheadline: 'Your new description here...',
  // ...
}
```

### 2. Changing Colors & Theme

**File:** `src/theme/themeConfig.ts`

Change all colors in one place:

```typescript
colors: {
  primary: {
    maroon: '#YOUR-COLOR',      // Main brand color
    maroonLight: '#YOUR-COLOR', // Lighter shade
    maroonDark: '#YOUR-COLOR',  // Darker shade
  },
  secondary: {
    navy: '#YOUR-COLOR',        // Secondary brand color
    // ...
  },
  accent: {
    gold: '#YOUR-COLOR',        // Accent color
    // ...
  },
}
```

**Also update Tailwind config:**

File: `tailwind.config.js`

```javascript
colors: {
  maroon: {
    DEFAULT: '#YOUR-COLOR',
    light: '#YOUR-COLOR',
    dark: '#YOUR-COLOR',
  },
  // ... update other colors
}
```

### 3. Replacing Images

#### Option A: Using Pexels URLs (Current Setup)

All images are currently hosted on Pexels. To replace an image:

1. Go to [Pexels.com](https://www.pexels.com)
2. Search for your desired image
3. Copy the image URL (use the size: `?auto=compress&cs=tinysrgb&w=800` or `w=1920` for larger images)
4. Replace the URL in `src/content/schoolData.ts`

**Example:**

```typescript
facilities: [
  {
    id: 'creative-arts',
    title: 'Creative Arts & Crafts Facility',
    description: '...',
    icon: 'Palette',
    image: 'YOUR-NEW-IMAGE-URL-HERE',
  },
]
```

#### Option B: Using Local Images

1. Create a folder: `public/images/`
2. Add your images to this folder
3. Reference them in `schoolData.ts` like this:

```typescript
image: '/images/your-image-name.jpg'
```

#### Images to Replace

- **Hero Background**: `schoolData.hero.backgroundImage`
- **Facilities Images**: `schoolData.facilities[].image`
- **Sports Images**: `schoolData.sports[].image`
- **Leadership Photos**: `schoolData.leadership.chairman.image`, etc.
- **Gallery Images**: `schoolData.gallery.images[].url`

### 4. Editing Fonts

Current fonts:
- **Headings**: Playfair Display (elegant serif)
- **Subheadings**: Poppins (modern sans-serif)
- **Body**: Inter (readable sans-serif)
- **Buttons**: Montserrat (bold sans-serif)
- **Stats**: Space Grotesk (geometric)

To change fonts, edit:

**File:** `src/index.css`

```css
@import url('YOUR-GOOGLE-FONTS-URL');
```

Then update:
- `tailwind.config.js` - fontFamily section
- `src/theme/themeConfig.ts` - fonts section

## Page Navigation

The website uses hash-based routing:

- Home: `/` or `#/`
- About: `#/about`
- Curriculum: `#/curriculum`
- Facilities: `#/facilities`
- Activities: `#/activities`
- Academics: `#/academics`
- Admissions: `#/admissions`
- Gallery: `#/gallery`
- Contact: `#/contact`

## Features Included

### UX Enhancements

- **Sticky Header** - Auto-shows/hides on scroll
- **Scroll Progress Bar** - Top of page
- **Back to Top Button** - Bottom left
- **Enquiry Button** - Floating bottom right (maroon)
- **WhatsApp Button** - Floating bottom right (green)
- **Smooth Scrolling** - Between sections
- **FAQ Accordion** - Animated expand/collapse
- **Announcement Bar** - Auto-scrolling ticker
- **Newsletter Signup** - In footer

### Animations

- Fade-in animations on scroll
- Hover effects on cards and buttons
- Page transitions
- Staggered list animations
- Gallery lightbox
- Mobile menu animation

### Responsive Design

Fully responsive for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1920px+)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Lint code
npm run lint
```

## Customization Guide

### Adding a New Section to Home Page

1. Create component in `src/components/home/YourSection.tsx`
2. Import and add to `src/pages/HomePage.tsx`
3. Add data to `src/content/schoolData.ts` if needed

### Adding a New Page

1. Create page component in `src/pages/YourPage.tsx`
2. Add route to `src/App.tsx` in the `renderPage()` function
3. Add navigation link to `src/content/schoolData.ts` under `navigation.primary`

### Changing House Colors

Edit `src/content/schoolData.ts`:

```typescript
houses: {
  list: [
    {
      name: 'Orion House',
      color: '#YOUR-HEX-COLOR',
      // ...
    },
  ]
}
```

## Quick Content Editing Checklist

- [ ] School name and tagline - `schoolData.schoolInfo`
- [ ] Contact information - `schoolData.schoolInfo.contact`
- [ ] Hero section text - `schoolData.hero`
- [ ] Announcements - `schoolData.announcements`
- [ ] Curriculum domains - `schoolData.curriculum.domains`
- [ ] Facilities - `schoolData.facilities` and `schoolData.sports`
- [ ] Activities - `schoolData.activities`
- [ ] Leadership messages - `schoolData.leadership`
- [ ] Admissions process - `schoolData.admissions`
- [ ] FAQs - `schoolData.faqs`
- [ ] Gallery images - `schoolData.gallery.images`
- [ ] Footer content - `schoolData.footer`

## Theme Colors Reference

Current color scheme:

- **Primary (Maroon)**: `#8B1538`
- **Secondary (Navy)**: `#0F2347`
- **Accent (Gold)**: `#D4AF37`
- **Background (Cream)**: `#FAF8F3`

To change the entire color scheme at once, edit both:
1. `src/theme/themeConfig.ts`
2. `tailwind.config.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Images are lazy-loaded automatically
- Use WebP format for better compression
- Optimize images before uploading (max 1920px width)
- Keep image file sizes under 500KB

## Deployment

Build the project:

```bash
npm run build
```

The `dist/` folder contains your production-ready website. Deploy it to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Support & Maintenance

### Common Tasks

1. **Update phone number**: Edit `schoolData.schoolInfo.contact.phones`
2. **Change hero image**: Edit `schoolData.hero.backgroundImage`
3. **Add new facility**: Add object to `schoolData.facilities` array
4. **Update admission dates**: Edit `schoolData.admissions.title`
5. **Add gallery image**: Add object to `schoolData.gallery.images`

### Troubleshooting

**Build fails:**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors with `npm run typecheck`

**Images not loading:**
- Verify image URLs are correct
- Check if images are publicly accessible
- For local images, ensure they're in the `public/` folder

**Fonts not appearing:**
- Verify Google Fonts URL in `index.css`
- Check browser console for font loading errors
- Clear browser cache

## License

This project is proprietary. All rights reserved to The Lighthouse School.

## Contact for Technical Support

For website issues or customization requests, contact your web developer.

---

**Built with care for The Lighthouse School**
*International Education Beyond Borders*
