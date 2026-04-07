import { HeroSection } from '../components/home/HeroSection';
import { AnnouncementBar } from '../components/home/AnnouncementBar';
import { FacilitiesPreview } from '../components/home/FacilitiesPreview';
import { CurriculumGrid } from '../components/home/CurriculumGrid';
import { HouseSystem } from '../components/home/HouseSystem';
import { AdmissionsBanner } from '../components/home/AdmissionsBanner';
import { EventsSection } from '../components/home/EventsSection';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { ContactCTA } from '../components/home/ContactCTA';

export const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AnnouncementBar />
      <FacilitiesPreview />
      <CurriculumGrid />
      <HouseSystem />
      <AdmissionsBanner />
      <EventsSection />
      <GalleryPreview />
      <ContactCTA />
    </div>
  );
};
