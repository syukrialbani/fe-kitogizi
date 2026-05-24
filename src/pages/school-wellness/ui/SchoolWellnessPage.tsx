import FamilyRestroomRoundedIcon from '@mui/icons-material/FamilyRestroomRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import { whatsappHref } from '../../../shared/config/site';
import { schoolNeeds, schoolPackages } from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { FinalCTA } from '../../../shared/ui/final-cta/FinalCTA';
import { GlassCard } from '../../../shared/ui/glass-card/GlassCard';
import { PackageGrid } from '../../../shared/ui/package-grid/PackageGrid';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';
import { SchoolHeroVisual } from '../../../widgets/hero-visuals';

const needIcons = [MenuBookRoundedIcon, TipsAndUpdatesRoundedIcon, FamilyRestroomRoundedIcon];

export const SchoolWellnessPage = () => {
  return (
    <>
      <PageHero
        variant="school"
        eyebrow="School Wellness Program"
        title="Membangun Kebiasaan Sehat Sejak Dini"
        description="KitoGizi membantu sekolah menghadirkan program wellness yang interaktif, edukatif, dan relevan untuk mendukung kesehatan, fokus belajar, dan kualitas hidup siswa."
        actions={
          <>
            <ActionLink href={whatsappHref} target="_blank" icon="whatsapp">
              Diskusikan Program Sekolah
            </ActionLink>
            <ActionLink href="#paket-sekolah" variant="secondary">
              Lihat Program
            </ActionLink>
          </>
        }
        visual={<SchoolHeroVisual />}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Lingkungan Sehat"
            title="Kebiasaan sehat dimulai dari lingkungan yang tepat"
            description="Program sekolah perlu menyentuh pola hidup siswa, fokus belajar, serta kolaborasi antara sekolah dan orang tua."
          />
          <div className="three-card-grid">
            {schoolNeeds.map((need, index) => {
              const Icon = needIcons[index];
              return (
                <GlassCard key={need.title} className="deep-card">
                  <Icon className="card-icon" aria-hidden="true" />
                  <h3>{need.title}</h3>
                  <p>{need.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section id="paket-sekolah" className="section section-muted">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Program Sekolah"
            title="Program yang dirancang untuk sekolah masa kini"
            description="Mulai dari edukasi interaktif hingga pendampingan jangka panjang untuk membangun budaya hidup sehat di lingkungan sekolah."
          />
          <PackageGrid packages={schoolPackages} ctaLabel="Diskusikan Program" />
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <SectionHeader
            eyebrow="Student Wellness Insight Report"
            title="Memahami kebiasaan hidup siswa secara lebih terarah"
            description="Program dapat dilengkapi dengan Student Wellness Insight Report untuk membantu sekolah dan orang tua memahami pola hidup siswa secara lebih sederhana dan edukatif."
          />
          <GlassCard className="student-insight-card">
            <div>
              <span>Pola makan</span>
              <strong>Meal habit</strong>
            </div>
            <div>
              <span>Aktivitas</span>
              <strong>Movement</strong>
            </div>
            <div>
              <span>Tidur</span>
              <strong>Rest quality</strong>
            </div>
            <div>
              <span>Minum air</span>
              <strong>Hydration</strong>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-section reverse">
          <GlassCard className="parent-journey-card">
            <FamilyRestroomRoundedIcon className="card-icon" aria-hidden="true" />
            <h3>Parent education & home habit</h3>
            <p>
              Insight sederhana membantu orang tua memahami kebiasaan harian anak dan menerapkannya secara konsisten di rumah.
            </p>
          </GlassCard>
          <SectionHeader
            eyebrow="Kolaborasi Orang Tua"
            title="Melibatkan orang tua dalam perjalanan hidup sehat anak"
            description="Program tidak hanya ditujukan untuk siswa, tetapi juga melibatkan orang tua melalui sesi edukasi dan insight sederhana agar kebiasaan sehat dapat diterapkan secara konsisten di rumah maupun di sekolah."
          />
        </div>
      </section>

      <FinalCTA
        title="Diskusikan program untuk sekolah Anda"
        description="KitoGizi siap membantu sekolah menghadirkan program wellness yang relevan, interaktif, dan sesuai dengan kebutuhan siswa."
        primaryLabel="Konsultasi Program Sekolah"
      />
    </>
  );
};

export default SchoolWellnessPage;
