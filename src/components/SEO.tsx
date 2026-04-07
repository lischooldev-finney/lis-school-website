import { useEffect } from 'react';
import { schoolData } from '../content/schoolData';
import { getRoutePath } from '../utils/navigation';

const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://lighthouseschool.edu.in').replace(/\/$/, '');
const defaultImage = 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200';

const pageMeta: Record<string, { title: string; description: string; includeFaq?: boolean }> = {
  '/': {
    title: schoolData.seo.title,
    description: schoolData.seo.description,
    includeFaq: true,
  },
  '/about': {
    title: 'About The Lighthouse School | International School in Vizianagaram',
    description: schoolData.about.short,
  },
  '/curriculum': {
    title: 'Curriculum | The Lighthouse School Vizianagaram',
    description: schoolData.curriculum.intro,
  },
  '/facilities': {
    title: 'Campus Facilities | The Lighthouse School Vizianagaram',
    description: 'Explore A/C classrooms, touch panel learning spaces, science and mathematics labs, sports infrastructure, and residential facilities at The Lighthouse School.',
  },
  '/activities': {
    title: 'Activities and Enrichment | The Lighthouse School',
    description: schoolData.activities.coCurricular.intro,
  },
  '/academics': {
    title: 'Academics, IIT-JEE and NEET Coaching | The Lighthouse School',
    description: 'Academic excellence with CBSE-aligned learning, IIT-JEE and NEET coaching, continuous assessment, and holistic student growth systems.',
  },
  '/admissions': {
    title: `${schoolData.admissions.title} | The Lighthouse School Vizianagaram`,
    description: schoolData.admissions.intro,
  },
  '/gallery': {
    title: 'Campus Gallery | The Lighthouse School Vizianagaram',
    description: 'View classrooms, labs, sports areas, residential spaces, and student activities at The Lighthouse School campus.',
  },
  '/contact': {
    title: 'Contact The Lighthouse School | Vizianagaram',
    description: 'Contact The Lighthouse School in Pedatadivada, Denkada Mandal, Vizianagaram for admissions, campus visits, and school enquiries.',
  },
};

const setMeta = (selector: string, attribute: 'content' | 'href', value: string) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;

  if (!element) {
    element = selector.startsWith('link')
      ? document.createElement('link')
      : document.createElement('meta');

    if (selector.includes('rel="canonical"')) {
      element.setAttribute('rel', 'canonical');
    }

    const nameMatch = selector.match(/name="([^"]+)"/);
    const propertyMatch = selector.match(/property="([^"]+)"/);

    if (nameMatch) element.setAttribute('name', nameMatch[1]);
    if (propertyMatch) element.setAttribute('property', propertyMatch[1]);

    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
};

const setJsonLd = (id: string, data: object | null) => {
  const existing = document.getElementById(id);

  if (!data) {
    existing?.remove();
    return;
  }

  const script = (existing || document.createElement('script')) as HTMLScriptElement;
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);

  if (!existing) {
    document.head.appendChild(script);
  }
};

const getSchoolJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'School',
  name: schoolData.schoolInfo.name,
  alternateName: schoolData.schoolInfo.shortName,
  description: schoolData.seo.description,
  url: siteUrl,
  image: defaultImage,
  telephone: schoolData.schoolInfo.contact.phones.map((phone) => `+91${phone.replace(/\D/g, '')}`),
  address: {
    '@type': 'PostalAddress',
    streetAddress: schoolData.schoolInfo.address.street,
    addressLocality: schoolData.schoolInfo.address.district,
    addressRegion: schoolData.schoolInfo.address.state,
    postalCode: schoolData.schoolInfo.address.pincode.replace(/\s/g, ''),
    addressCountry: schoolData.schoolInfo.address.country,
  },
  keywords: schoolData.seo.keywords,
});

const getFaqJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: schoolData.faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const SEO = ({ path }: { path: string }) => {
  useEffect(() => {
    const routePath = getRoutePath(path);
    const meta = pageMeta[routePath] || pageMeta['/'];
    const canonical = `${siteUrl}${routePath === '/' ? '/' : routePath}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[name="keywords"]', 'content', schoolData.seo.keywords);
    setMeta('link[rel="canonical"]', 'href', canonical);
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[property="og:site_name"]', 'content', schoolData.schoolInfo.name);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:image"]', 'content', defaultImage);
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);
    setMeta('meta[name="twitter:image"]', 'content', defaultImage);
    setJsonLd('school-json-ld', getSchoolJsonLd());
    setJsonLd('faq-json-ld', meta.includeFaq ? getFaqJsonLd() : null);
  }, [path]);

  return null;
};
