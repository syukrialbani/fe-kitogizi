import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import { whatsappHref } from '../../../shared/config/site';
import {
  wellnessAdvantages,
  wellnessCollaboration,
  wellnessConsultation,
  wellnessFit,
  wellnessGains,
  wellnessWorkshopTopics,
} from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { FinalCTA } from '../../../shared/ui/final-cta/FinalCTA';
import { GlassCard } from '../../../shared/ui/glass-card/GlassCard';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';
import { WellnessHeroVisual } from '../../../widgets/hero-visuals';

export const WellnessExperiencePage = () => {
  return (
    <>
      <PageHero
        variant="wellness"
        eyebrow="KitoGizi Wellness Experience"
        title="Wellness Program yang Relatable, Interaktif, dan Berkelanjutan"
        description="KitoGizi menghadirkan konsultasi, workshop, dan wellness session yang dirancang untuk membantu membangun kebiasaan sehat dalam kehidupan sehari-hari."
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
        visual={<WellnessHeroVisual />}
      />

      <section className="section">
        <div className="container split-section">
          <SectionHeader
            eyebrow="Pendekatan Wellness"
            title="Pendekatan wellness yang lebih personal dan praktis"
            description="Kami percaya bahwa hidup sehat tidak harus terasa rumit atau mengintimidasi. Melalui pendekatan yang evidence-based, relatable, dan mudah diterapkan, KitoGizi membantu peserta memahami kesehatan secara lebih sadar dan berkelanjutan."
          />
          <GlassCard className="wellness-principle-card">
            <span>Evidence-based</span>
            <span>Relatable</span>
            <span>Mudah diterapkan</span>
            <span>Berkelanjutan</span>
          </GlassCard>
        </div>
      </section>

      <section id="program-wellness" className="section section-muted">
        <div className="container">
          <SectionHeader
            eyebrow="Nutrition Consultation"
            title="Pendampingan individu maupun kelompok yang realistis"
            description="Program membantu peserta mencapai tujuan kesehatan secara lebih terarah tanpa pendekatan yang mengintimidasi."
          />
          <div className="two-card-grid">
            <GlassCard className="deep-card">
              <RestaurantRoundedIcon className="card-icon" aria-hidden="true" />
              <h3>Cocok untuk</h3>
              <div className="pill-list">
                {wellnessConsultation.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </GlassCard>
            <GlassCard className="deep-card">
              <CheckCircleRoundedIcon className="card-icon" aria-hidden="true" />
              <h3>Yang Didapatkan</h3>
              <ul className="clean-list">
                {wellnessGains.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Wellness Session & Workshop"
            title="Sesi edukasi interaktif untuk komunitas, perusahaan, sekolah, dan private group"
            description="Materi dikemas dengan format yang engaging agar peserta dapat memahami isu kesehatan dan membawa pulang langkah praktis."
          />
          <div className="two-card-grid">
            <GlassCard className="deep-card">
              <LocalActivityRoundedIcon className="card-icon" aria-hidden="true" />
              <h3>Cocok untuk</h3>
              <div className="pill-list">
                {wellnessFit.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </GlassCard>
            <GlassCard className="deep-card">
              <FavoriteRoundedIcon className="card-icon" aria-hidden="true" />
              <h3>Topik yang Sering Dibawakan</h3>
              <div className="pill-list">
                {wellnessWorkshopTopics.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section id="format-kolaborasi" className="section section-muted">
        <div className="container split-section">
          <div>
            <SectionHeader
              eyebrow="Kolaborasi Wellness"
              title="Terbuka untuk berbagai bentuk kolaborasi wellness"
              description="KitoGizi terbuka untuk kolaborasi bersama komunitas, brand, studio wellness, sekolah, maupun berbagai program healthy lifestyle dan edukasi kesehatan."
            />
            <p className="section-standalone-copy">
              Kami percaya bahwa wellness dapat dibangun melalui pengalaman yang lebih interaktif, relevan, dan dekat dengan kehidupan sehari-hari.
            </p>
            <ActionLink href={whatsappHref} target="_blank" icon="whatsapp">
              Konsultasi Sekarang
            </ActionLink>
          </div>
          <div className="collaboration-grid compact">
            {wellnessCollaboration.map((item, index) => (
              <GlassCard key={item} className="collaboration-card" tone={index % 2 === 0 ? 'mint' : 'warm'}>
                {index % 2 === 0 ? (
                  <Diversity3RoundedIcon aria-hidden="true" />
                ) : (
                  <FavoriteRoundedIcon aria-hidden="true" />
                )}
                <h3>{item}</h3>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Experience Value"
            title="Wellness yang tidak sekadar informatif, tapi juga aplikatif"
            description="Setiap pengalaman dirancang agar peserta merasa dekat dengan materi dan mampu menerapkannya secara konsisten."
          />
          <div className="service-grid">
            {wellnessAdvantages.map((item) => (
              <GlassCard key={item.title} className="service-card">
                <CheckCircleRoundedIcon className="card-icon" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </GlassCard>
            ))}
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
