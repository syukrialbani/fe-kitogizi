import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import BubbleChartRoundedIcon from '@mui/icons-material/BubbleChartRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import SelfImprovementRoundedIcon from '@mui/icons-material/SelfImprovementRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import consultationImage from '../../../assets/contact-consultation.jpg';
import programImage from '../../../assets/group-cooking-session.jpg';
import collaborationImage from '../../../assets/wellness-circle.jpg';
import { whatsappHref } from '../../../shared/config/site';
import {
  wellnessAdvantages,
  wellnessCollaboration,
  wellnessPackages,
} from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
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

const programIcons = [RestaurantMenuRoundedIcon, SelfImprovementRoundedIcon, SpaRoundedIcon];
const collaborationIcons = [
  Diversity3RoundedIcon,
  AutoAwesomeRoundedIcon,
  SelfImprovementRoundedIcon,
  GroupAddRoundedIcon,
  BubbleChartRoundedIcon,
  ForumRoundedIcon,
];
const advantageIcons = [
  CheckCircleRoundedIcon,
  ForumRoundedIcon,
  WaterDropRoundedIcon,
  AutoAwesomeRoundedIcon,
];

const wellnessProofs = ['Personal guidance', 'Habit journey', 'Community activation'];

export const WellnessExperiencePage = () => {
  return (
    <>
      <PageHero
        variant="school"
        eyebrow="KitoGizi Wellness Experience"
        title="Wellness Program yang Relatable, Interaktif, dan Berkelanjutan"
        description="KitoGizi menghadirkan konsultasi, pendampingan, wellness session, dan kolaborasi interaktif untuk membantu peserta membangun kebiasaan sehat yang lebih sadar, realistis, dan berkelanjutan."
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
              description="Kami percaya bahwa hidup sehat tidak harus terasa rumit atau mengintimidasi. Melalui pendekatan yang evidence-based, relatable, dan mudah diterapkan, KitoGizi membantu peserta memahami kesehatan secara lebih sadar dan berkelanjutan."
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
              description="Konsultasi, journey, dan workshop disusun sebagai pengalaman yang praktis, hangat, dan tetap berbasis evidence."
            />
            <div className="wellness-program-tags" aria-label="Fokus program">
              <span>Personal</span>
              <span>Habit Journey</span>
              <span>Community Activation</span>
            </div>
          </div>
          <div className="wellness-program-showcase">
            {wellnessPackages.map((item, index) => {
              const Icon = programIcons[index] ?? SpaRoundedIcon;
              return (
                <article
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

      <section id="format-kolaborasi" className="section wellness-collab-section">
        <div className="container wellness-collab-layout">
          <div className="wellness-collab-copy">
            <SectionHeader
              eyebrow="Kolaborasi Wellness"
              title="Terbuka untuk berbagai bentuk kolaborasi wellness."
              description="KitoGizi terbuka untuk kolaborasi bersama komunitas, brand, studio wellness, sekolah, maupun berbagai program healthy lifestyle dan edukasi kesehatan."
            />
            <p className="section-standalone-copy">
              Kami percaya bahwa wellness dapat dibangun melalui pengalaman yang lebih interaktif, relevan, dan dekat dengan kehidupan sehari-hari.
            </p>
            <ActionLink href={whatsappHref} target="_blank" icon="whatsapp">
              Konsultasi Sekarang
            </ActionLink>
          </div>
          <div className="wellness-collab-stage">
            <div className="wellness-collab-photo">
              <img src={collaborationImage} alt="" />
              <div>
                <strong>Aktivasi yang dekat dengan audiens.</strong>
                <span>Komunitas, studio, brand, sekolah, dan private group.</span>
              </div>
            </div>
            <div className="wellness-collab-board">
              {wellnessCollaboration.map((item, index) => (
                <article key={item} className={`wellness-collab-tile tile-${index + 1}`}>
                  {(() => {
                    const Icon = collaborationIcons[index] ?? Diversity3RoundedIcon;
                    return <Icon aria-hidden="true" />;
                  })()}
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
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

      <FinalCTA
        title="Mari hadirkan wellness experience yang lebih bermakna"
        description="Baik untuk individu, komunitas, maupun kolaborasi wellness, KitoGizi siap membantu menghadirkan program yang relevan dan berdampak."
        primaryLabel="Diskusikan Kolaborasi"
      />
    </>
  );
};

export default WellnessExperiencePage;
