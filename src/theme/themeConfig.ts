export const themeConfig = {
  colors: {
    primary: {
      maroon: '#8B1538',
      maroonLight: '#A61F45',
      maroonDark: '#6B0F2A',
    },
    secondary: {
      navy: '#0F2347',
      navyLight: '#1A3A6B',
      navyDark: '#08172E',
    },
    accent: {
      gold: '#D4AF37',
      goldLight: '#E6C966',
      goldDark: '#B8941F',
    },
    neutral: {
      cream: '#FAF8F3',
      white: '#FFFFFF',
      gray50: '#F9FAFB',
      gray100: '#F3F4F6',
      gray200: '#E5E7EB',
      gray300: '#D1D5DB',
      gray400: '#9CA3AF',
      gray500: '#6B7280',
      gray600: '#4B5563',
      gray700: '#374151',
      gray800: '#1F2937',
      gray900: '#111827',
    },
    semantic: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
    },
  },
  fonts: {
    heading: "'Playfair Display', serif",
    subheading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
    button: "'Montserrat', sans-serif",
    stats: "'Space Grotesk', sans-serif",
  },
  shadows: {
    soft: '0 2px 8px rgba(0, 0, 0, 0.06)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.08)',
    large: '0 8px 32px rgba(0, 0, 0, 0.12)',
    glow: '0 0 24px rgba(212, 175, 55, 0.2)',
  },
  animations: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
  spacing: {
    section: {
      mobile: '4rem',
      tablet: '6rem',
      desktop: '8rem',
    },
  },
  borderRadius: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xl: '2rem',
  },
};

export type ThemeConfig = typeof themeConfig;
