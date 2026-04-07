# Content Structure Guide

## New Content Organization

All content has been split into page-specific files for better organization and maintainability:

### Content Files

1. **`src/content/common.ts`** - School info, contact, navigation (shared across all pages)
2. **`src/content/homeContent.ts`** - All home page content
3. **`src/content/aboutContent.ts`** - Leadership messages and school vision
4. **`src/content/curriculumContent.ts`** - Curriculum domains and approach
5. **`src/content/facilitiesContent.ts`** - Campus facilities and sports
6. **`src/content/activitiesContent.ts`** - Activities, events, awards
7. **`src/content/academicsContent.ts`** - IIT/NEET coaching, assessment
8. **`src/content/admissionsContent.ts`** - Admission process, requirements
9. **`src/content/galleryContent.ts`** - Gallery images and categories
10. **`src/content/contactContent.ts`** - Contact information, FAQs

### How to Edit Content

#### 1. Common Information (All Pages)

**File:** `src/content/common.ts`

```typescript
// Change school name, contact, address
export const schoolInfo = {
  name: 'Your School Name',
  contact: {
    phones: ['YOUR-PHONE-1', 'YOUR-PHONE-2'],
    email: 'your@email.com',
  },
  // ...
};

// Update navigation menu
export const navigation = {
  primary: [
    { label: 'Home', path: '#/' },
    { label: 'About Us', path: '#/about' },
    // Add/remove pages...
  ],
};
```

#### 2. Home Page Content

**File:** `src/content/homeContent.ts`

- `hero` - Hero section text and images
- `announcements` - Scrolling announcement bar
- `highlights` - Quick highlights grid
- `curriculumPreview` - 6 learning domains
- `houses` - House system (4 houses)
- `monthlyPrograms` - Event calendar
- `galleryPreview` - Gallery preview images
- `faqs` - Home page FAQs

#### 3. About Page Content

**File:** `src/content/aboutContent.ts`

- `hero` - About page header
- `vision` - School vision statement
- `leadership.chairman` - Chairman's message
- `leadership.correspondent` - Correspondent's message
- `leadership.principal` - Principal's message

#### 4. Curriculum Page Content

**File:** `src/content/curriculumContent.ts`

- `hero` - Curriculum page header
- `approach` - Learning approach description
- `domains` - 6 curriculum domains with details

#### 5. Facilities Page Content

**File:** `src/content/facilitiesContent.ts`

- `campusFacilities` - All campus facilities
- `residential` - Hostel information
- `sports` - Sports facilities

#### 6. Activities Page Content

**File:** `src/content/activitiesContent.ts`

- `coCurricular` - Co-curricular programs
- `excursions` - Educational trips
- `competitions` - Intra-school competitions
- `awards` - Awards and recognition
- `monthlyPrograms` - Month-wise activities

#### 7. Academics Page Content

**File:** `src/content/academicsContent.ts`

- `programs.iitNeet` - IIT/NEET coaching details
- `programs.growthCard` - 360° assessment system
- `whyChooseUs` - Academic advantages
- `academicSupport` - Support systems

#### 8. Admissions Page Content

**File:** `src/content/admissionsContent.ts`

- `process` - 6-step admission process
- `documentsRequired` - Required documents
- `ageEligibility` - Age criteria
- `feeStructure` - Fee information
- `faqs` - Admission FAQs

#### 9. Gallery Page Content

**File:** `src/content/galleryContent.ts`

- `categories` - Gallery categories
- `images` - All gallery images with metadata

#### 10. Contact Page Content

**File:** `src/content/contactContent.ts`

- `officeHours` - Office timings
- `departments` - Department-wise contacts
- `faqs` - Contact FAQs
- `socialMedia` - Social media links

## Navigation System

The website uses **hash-based routing**:

- Home: `#/` or just `/`
- About: `#/about`
- Curriculum: `#/curriculum`
- Facilities: `#/facilities`
- Activities: `#/activities`
- Academics: `#/academics`
- Admissions: `#/admissions`
- Gallery: `#/gallery`
- Contact: `#/contact`

### Adding a New Page

1. Create content file: `src/content/yourPageContent.ts`
2. Create page component: `src/pages/YourPage.tsx`
3. Add route in `src/App.tsx`:
   ```typescript
   case '/yourpage':
     return <YourPage />;
   ```
4. Add navigation link in `src/content/common.ts`:
   ```typescript
   { label: 'Your Page', path: '#/yourpage' }
   ```

## Quick Edit Examples

### Change Phone Number

**File:** `src/content/common.ts`
```typescript
export const schoolInfo = {
  contact: {
    phones: ['NEW-PHONE-1', 'NEW-PHONE-2'],
    whatsapp: 'NEW-WHATSAPP',
  },
};
```

### Update Hero Text

**File:** `src/content/homeContent.ts`
```typescript
export const homeContent = {
  hero: {
    headline: 'Your New Headline',
    subheadline: 'Your new description...',
  },
};
```

### Change House Colors

**File:** `src/content/homeContent.ts`
```typescript
houses: {
  list: [
    {
      name: 'Orion House',
      color: '#YOUR-HEX-COLOR',
      // ...
    },
  ],
},
```

### Add Gallery Image

**File:** `src/content/galleryContent.ts`
```typescript
images: [
  {
    id: 19,
    url: 'YOUR-IMAGE-URL',
    category: 'Campus', // or 'Labs', 'Sports', etc.
    title: 'Your Image Title',
    description: 'Your description',
  },
  // ... existing images
],
```

### Update Admission Process

**File:** `src/content/admissionsContent.ts`
```typescript
process: [
  {
    step: 1,
    title: 'Your Step Title',
    description: 'Your step description',
    icon: 'Users',
  },
  // ... more steps
],
```

## Component Import Pattern

Components now import from specific content files:

```typescript
// OLD way (don't use)
import { schoolData } from '../content/schoolData';

// NEW way (use this)
import { schoolInfo, navigation } from '../content/common';
import { homeContent } from '../content/homeContent';
import { aboutContent } from '../content/aboutContent';
// etc...
```

## Benefits of New Structure

1. **Easier to Find Content** - Each page has its own file
2. **Faster Loading** - Only load content needed for current page
3. **Better Organization** - Related content grouped together
4. **Easier Maintenance** - Changes are isolated to specific files
5. **Team Collaboration** - Multiple people can edit different pages

## Migration Notes

The old `schoolData.ts` file is now deprecated. All content has been moved to:
- Common elements → `common.ts`
- Page-specific content → `[pageName]Content.ts`

Navigation paths now use hash-based routing (`#/about` instead of `/about`) for proper SPA navigation.
