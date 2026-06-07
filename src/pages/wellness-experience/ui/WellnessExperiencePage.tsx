import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import SelfImprovementRoundedIcon from '@mui/icons-material/SelfImprovementRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import { default as consultationImage, default as contactConsultationImage } from '../../../assets/contact-consultation.jpg';
import programImage from '../../../assets/group-cooking-session.jpg';
import healthyPlateImage from '../../../assets/healthy-plate.jpg';
import nutritionWorkshopImage from '../../../assets/nutrition-workshop.jpg';
import teamWorkshopImage from '../../../assets/team-workshop.jpg';
import wellnessYogaGroupImage from '../../../assets/wellness-yoga-group.jpg';
import { whatsappHref } from '../../../shared/config/site';
import {
  wellnessAdvantages,
  wellnessExperienceDocumentations,
  wellnessPackages,
} from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { CardCarousel } from '../../../shared/ui/card-carousel';
import { FinalCTA } from '../../../shared/ui/final-cta/FinalCTA';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';
import { WellnessHeroVisual } from '../../../widgets/hero-visuals';

const journeySteps = [
  {
    title: 'Aware',
    description: 'Peserta memahami kebutuhan tubuh dan kebiasaan yang ingin dibangun.',
    icon: EmojiObjectsRoundedIcon,
  },
  {
    title: 'Practice',
    description: 'Insight diterjemahkan menjadi langkah kecil yang realistis untuk rutinitas harian.',
    icon: SelfImprovementRoundedIcon,
  },
  {
    title: 'Sustain',
    description: 'Progress dijaga melalui monitoring, support, dan evaluasi ringan.',
    icon: CalendarMonthRoundedIcon,
  },
];

const programIcons = [RestaurantMenuRoundedIcon, SelfImprovementRoundedIcon, SpaRoundedIcon, Diversity3RoundedIcon];
const advantageIcons = [
  CheckCircleRoundedIcon,
  ForumRoundedIcon,
  WaterDropRoundedIcon,
  AutoAwesomeRoundedIcon,
];

const documentationImages = [
  contactConsultationImage,
  wellnessYogaGroupImage,
  programImage,
  teamWorkshopImage,
  healthyPlateImage,
  nutritionWorkshopImage,
];

const documentationItems = wellnessExperienceDocumentations.map((item, index) => ({
  ...item,
  image: documentationImages[index % documentationImages.length],
}));

const wellnessProofs = ['Personal guidance', 'Habit journey', 'Community activation'];

export const WellnessExperiencePage = () => {
  return (
    <>
      <PageHero
        variant="school"
        eyebrow="Kitogizi Wellness Experience"
        title="Wellness Program yang Relatable, Interaktif, dan Berkelanjutan"
        description="Kitogizi menghadirkan konsultasi, pendampingan, wellness session, dan kolaborasi interaktif untuk membantu peserta membangun kebiasaan sehat yang lebih sadar, realistis, dan berkelanjutan."
        actions={
          <>
            <ActionLink href={whatsappHref} target="_blank" icon="whatsapp">
              Konsultasi Sekarang
            </ActionLink>
            <ActionLink href="#program-wellness" variant="secondary">
              Lihat Program Kami
            </ActionLink>
          </>
        }
        meta={
          <div className="hero-proof-grid wellness-hero-proof">
            {wellnessProofs.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        }
        visual={<WellnessHeroVisual />}
      />

      <section className="section wellness-intro-section">
        <div className="container wellness-intro-layout">
          <div className="wellness-intro-photo">
            <img src={consultationImage} alt="" />
            <div>
              <strong>Wellness yang tidak terasa menggurui.</strong>
              <span>Peserta diajak memahami tubuh, rutinitas, dan kebiasaan kecil yang bisa dijalani.</span>
            </div>
          </div>
          <div className="wellness-intro-copy">
            <SectionHeader
              eyebrow="Pendekatan Wellness"
              title="Pendekatan wellness yang lebih personal dan praktis."
              description="Kami percaya bahwa hidup sehat tidak harus terasa rumit atau mengintimidasi. Melalui pendekatan yang evidence-based, relatable, dan mudah diterapkan, Kitogizi membantu peserta memahami kesehatan secara lebih sadar dan berkelanjutan."
            />
            <div className="wellness-loop-card">
              <div className="wellness-loop-head">
                <span>Habit Loop</span>
                <strong>Small steps, real progress</strong>
              </div>
              <div className="wellness-loop-path">
                {journeySteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <article className="wellness-loop-step" key={step.title}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <Icon aria-hidden="true" />
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program-wellness" className="section wellness-program-section">
        <div className="container">
          <div className="wellness-program-head">
            <SectionHeader
              eyebrow="Program Kami"
              title="Pilih format wellness yang paling sesuai dengan ritme peserta."
              description="Konsultasi, journey, workshop, dan kolaborasi disusun sebagai pengalaman yang praktis, hangat, dan tetap berbasis evidence."
            />
            <div className="wellness-program-tags" aria-label="Fokus program">
              <span>Personal</span>
              <span>Habit Journey</span>
              <span>Community Activation</span>
              <span>Collaboration</span>
            </div>
          </div>
          <div className="wellness-program-showcase">
            {wellnessPackages.map((item, index) => {
              const Icon = programIcons[index] ?? SpaRoundedIcon;
              return (
                <article
                  id={item.id}
                  key={item.title}
                  className={`wellness-program-card ${item.recommended ? 'is-popular' : ''}`}
                >
                  {item.recommended ? (
                    <div className="wellness-program-image">
                      <img src={programImage} alt="" />
                    </div>
                  ) : null}
                  <div className="wellness-program-card-top">
                    <span className="wellness-program-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <small>{item.tier}</small>
                      {item.recommended ? <b>Populer</b> : null}
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="wellness-deliverable-list">
                    {item.deliverables.map((deliverable) => (
                      <span key={deliverable}>{deliverable}</span>
                    ))}
                  </div>
                  <p className="wellness-fit-note">{item.fit}</p>
                  <ActionLink
                    href={whatsappHref}
                    target="_blank"
                    icon="whatsapp"
                    variant={item.recommended ? 'primary' : 'secondary'}
                  >
                    Diskusikan Program
                  </ActionLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section wellness-value-section">
        <div className="container wellness-value-panel">
          <SectionHeader
            align="center"
            eyebrow="Experience Value"
            title="Wellness yang tidak sekadar informatif, tapi juga aplikatif."
            description="Setiap pengalaman dirancang agar peserta merasa dekat dengan materi dan mampu menerapkannya secara konsisten."
          />
          <div className="wellness-value-grid">
            {wellnessAdvantages.map((item, index) => {
              const Icon = advantageIcons[index] ?? CheckCircleRoundedIcon;
              return (
                <article key={item.title} className="wellness-value-card">
                  <Icon className="card-icon" aria-hidden="true" />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section home-documentation-section">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Dokumentasi Wellness"
            title="Cerita pengalaman wellness yang lebih personal"
            description="Kumpulan momen konsultasi personal, habit journey, praktik healthy plate, workshop interaktif, dan kolaborasi lifestyle dalam program Wellness Experience."
          />
          <CardCarousel
            ariaLabel="Carousel dokumentasi Wellness Experience Kitogizi"
            className="documentation-carousel"
            getKey={(item) => item.title}
            items={documentationItems}
            mobileVisibleCount={1}
            nextLabel="Dokumentasi berikutnya"
            previousLabel="Dokumentasi sebelumnya"
            renderItem={(item, meta) => (
              <article className={`documentation-card ${meta.isCenter ? 'is-center' : ''}`}>
                <div className="documentation-image-slot">
                  <img src={item.image} alt="" />
                  <span>{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            )}
            visibleCount={3}
          />
        </div>
      </section>

      <FinalCTA
        title="Mari hadirkan wellness experience yang lebih bermakna"
        description="Baik untuk individu, komunitas, maupun kolaborasi wellness, Kitogizi siap membantu menghadirkan program yang relevan dan berdampak."
        primaryLabel="Diskusikan Kolaborasi"
      />
    </>
  );
};

export default WellnessExperiencePage;
