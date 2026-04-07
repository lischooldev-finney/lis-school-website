import { schoolData } from '../../content/schoolData';
import { SectionTitle } from '../shared/SectionTitle';
import { Card } from '../shared/Card';

export const FacilitiesPreview = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="World-Class Facilities"
          subtitle="Modern infrastructure designed to inspire learning and growth"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {schoolData.highlights.map((highlight, index) => (
            <Card
              key={highlight.title}
              title={highlight.title}
              description={highlight.description}
              icon={highlight.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
