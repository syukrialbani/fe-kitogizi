import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import consultationImage from '../../../assets/contact-consultation.jpg';
import corporateImage from '../../../assets/team-workshop.jpg';
import schoolImage from '../../../assets/wellness-circle.jpg';
import { whatsappHref } from '../../../shared/config/site';
import { aboutPrinciples, brandAssets, impactStats, partnerLogos } from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { FinalCTA } from '../../../shared/ui/final-cta/FinalCTA';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';

const aboutProofs = ['Evidence-based', 'Relatable', 'Sustainable habit'];

const approachItems = [
  {
    title: 'Membaca konteks',
    description: 'Kami memahami kondisi peserta, tujuan program, dan tantangan organisasi sebelum merancang intervensi.',
    icon: InsightsRoundedIcon,
  },
  {
    title: 'Membuat program terasa dekat',
    description: 'Edukasi dibuat sederhana, visual, dan mudah dikaitkan dengan rutinitas sehari-hari.',
    icon: PsychologyRoundedIcon,
  },
  {
    title: 'Menjaga perubahan kecil',
    description: 'Program diarahkan agar peserta bisa memulai langkah realistis dan melanjutkannya secara konsisten.',
    icon: AutoGraphRoundedIcon,
  },
];

const audienceItems = [
  { label: 'Corporate', icon: BusinessCenterRoundedIcon },
  { label: 'School', icon: SchoolRoundedIcon },
  { label: 'Community', icon: Diversity3RoundedIcon },
  { label: 'Individual', icon: FavoriteRoundedIcon },
];

export const AboutPage = () => {
  return (
    <>
      <PageHero
        variant="about"
        eyebrow="Tentang KitoGizi"
        title="Partner wellness yang berbasis data, edukatif, aplikatif, dan berkelanjutan"
        description="KitoGizi adalah partner wellness dan edukasi gizi yang membantu perusahaan, sekolah, komunitas, dan individu membangun kebiasaan sehat melalui program yang relevan dengan kebutuhan klien."
        actions={
          <>
            <ActionLink href={whatsappHref} target="_blank" icon="whatsapp">
              Diskusi dengan Tim Kami
            </ActionLink>
            <ActionLink href="/corporate-wellness#case-study-corporate" variant="secondary">
              Lihat Case Study
            </ActionLink>
          </>
        }
        meta={
          <div className="hero-proof-grid about-hero-proof">
            {aboutProofs.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        }
        visual={
          <div className="about-hero-visual" aria-label="Kolase program wellness KitoGizi">
            <div className="about-hero-photo">
              <img src={consultationImage} alt="" />
              <div>
                <span>Nutrition guidance</span>
                <strong>Program sehat yang terasa personal.</strong>
              </div>
            </div>
            <div className="about-hero-brand">
              <img src={brandAssets.logo} alt="" />
              <div>
                <span>KitoGizi</span>
                <strong>Your Healthier Lifestyle Solution</strong>
              </div>
            </div>
            <div className="about-hero-side-photo">
              <img src={schoolImage} alt="" />
            </div>
            <div className="about-hero-stats">
              {impactStats.slice(1, 4).map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="section about-story-section">
        <div className="container about-story-layout">
          <div className="about-story-photo">
            <img src={corporateImage} alt="" />
            <div>
              <span>From insight to habit</span>
              <strong>Kami membantu ide wellness bergerak menjadi pengalaman yang bisa dijalani.</strong>
            </div>
          </div>
          <div className="about-story-copy">
            <SectionHeader
              eyebrow="Profil"
              title="KitoGizi hadir untuk membuat program sehat terasa lebih strategis."
              description="Kami tidak hanya memberikan edukasi gizi. Kami membantu organisasi membaca kebutuhan, memilih format program, lalu menyampaikan materi dengan cara yang dekat dengan peserta."
            />
            <div className="about-principle-flow">
              {aboutPrinciples.map((principle, index) => (
                <article key={principle}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <VerifiedRoundedIcon aria-hidden="true" />
                  <p>{principle}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section about-approach-section">
        <div className="container about-approach-panel">
          <SectionHeader
            align="center"
            eyebrow="Pendekatan Kami"
            title="Profesional untuk institusi, tetap approachable untuk peserta."
            description="Setiap program dirancang agar punya arah yang jelas, tetapi tetap terasa ringan dan bisa diterapkan dalam rutinitas nyata."
          />
          <div className="about-approach-flow">
            {approachItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section about-partner-section">
        <div className="container about-partner-layout">
          <div className="about-partner-copy">
            <SectionHeader
              eyebrow="Kolaborasi"
              title="Bekerja bersama berbagai institusi."
              description="KitoGizi mendampingi program wellness di lingkungan corporate, pendidikan, komunitas, dan kesehatan publik."
            />
            <div className="about-audience-strip">
              {audienceItems.map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.label}>
                    <Icon aria-hidden="true" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="about-logo-cloud" aria-label="Logo mitra KitoGizi">
            {partnerLogos.map((partner) => (
              <div key={partner.name}>
                <img src={partner.image} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Mari bangun program wellness yang sesuai dengan konteks organisasi Anda"
        description="Ceritakan kebutuhan tim, sekolah, komunitas, atau brand Anda kepada KitoGizi."
        primaryLabel="Hubungi KitoGizi"
      />
    </>
  );
};

export default AboutPage;
