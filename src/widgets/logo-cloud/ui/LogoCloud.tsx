import { partnerLogos } from '../../../shared/data/siteContent';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';

export const LogoCloud = () => {
  return (
    <section className="section section-compact">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Kolaborasi"
          title="Dipercaya oleh perusahaan dan institusi"
          description="Kitogizi mendampingi program wellness di lingkungan corporate, pendidikan, komunitas, dan kesehatan publik."
        />
        <div className="logo-cloud" aria-label="Logo mitra Kitogizi">
          {partnerLogos.map((partner) => (
            <div className="logo-cloud-item" key={partner.name}>
              <img src={partner.image} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
