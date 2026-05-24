import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import DataUsageRoundedIcon from '@mui/icons-material/DataUsageRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import { whatsappHref } from '../../../shared/config/site';
import {
  beliefPoints,
  dataToProgramPoints,
  homeCorporatePrograms,
  homeProblems,
  homeServices,
  homeWellnessExperience,
  impactStats,
  mcuFollowUpPoints,
  mcuMaximizePoints,
  targetSegments,
} from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { FinalCTA } from '../../../shared/ui/final-cta/FinalCTA';
import { GlassCard } from '../../../shared/ui/glass-card/GlassCard';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';
import { HomeHeroVisual } from '../../../widgets/hero-visuals';
import { Testimonials } from '../../../widgets/testimonials';

const serviceIcons = [
  CorporateFareRoundedIcon,
  HealthAndSafetyRoundedIcon,
  Groups2RoundedIcon,
  SchoolRoundedIcon,
];

const targetIcons = [
  BusinessCenterRoundedIcon,
  CorporateFareRoundedIcon,
  SchoolRoundedIcon,
  StorefrontRoundedIcon,
];

export const HomePage = () => {
  return (
    <>
      <PageHero
        variant="home"
        eyebrow="Corporate Wellness berbasis data"
        title="Mengubah Data Kesehatan Karyawan Menjadi Strategi yang Berdampak"
        description="KitoGizi membantu perusahaan mengolah hasil Medical Check Up (MCU) menjadi program kesehatan yang terarah, terukur, dan berkelanjutan."
        actions={
          <>
            <ActionLink href={whatsappHref} target="_blank" icon="whatsapp">
              Konsultasi Kebutuhan Anda
            </ActionLink>
            <ActionLink href="/corporate-wellness" variant="secondary">
              Lihat Program Kami
            </ActionLink>
          </>
        }
        visual={<HomeHeroVisual />}
      />

      <section className="section">
        <div className="container split-section">
          <SectionHeader
            eyebrow="Data Ada. Strategi Belum."
            title="Data Ada. Strategi Belum."
            description="Banyak perusahaan telah melakukan Medical Check Up (MCU), namun belum memiliki tindak lanjut yang jelas."
          />
          <div className="problem-grid">
            {homeProblems.map((problem) => (
              <GlassCard key={problem} className="problem-card">
                <ReportProblemRoundedIcon aria-hidden="true" />
                <p>{problem}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Impact"
            title="Dampak nyata dari program yang kami jalankan"
            description="Angka ini menjadi ringkasan bagaimana program berkelanjutan dapat membantu peserta dan perusahaan bergerak lebih terarah."
          />
          <div className="stat-grid stat-grid-five">
            {impactStats.map((stat) => (
              <GlassCard key={stat.label} tone="clear" className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <p>{stat.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-section reverse">
          <GlassCard className="liquid-list-card">
            {dataToProgramPoints.map((point) => (
              <div key={point}>
                <CheckCircleRoundedIcon aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </GlassCard>
          <SectionHeader
            eyebrow="Dari Data ke Program"
            title="Dari data kesehatan menjadi program yang terarah"
            description="KitoGizi membantu perusahaan mengubah data kesehatan menjadi program yang terarah, terukur, dan relevan dengan kebutuhan perusahaan."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Layanan Kami"
            title="Solusi kesehatan yang dirancang untuk berbagai kebutuhan"
            description="Setiap layanan tetap mengutamakan edukasi yang aplikatif, pendekatan ahli gizi, dan hasil yang dapat ditindaklanjuti."
          />
          <div className="service-grid">
            {homeServices.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <GlassCard key={service.title} className="service-card">
                  <Icon className="card-icon" aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ActionLink href={service.href} variant="ghost">
                    {service.cta}
                  </ActionLink>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Target Kami"
            title="Fokus utama untuk perusahaan dan institusi"
            description="Homepage menampilkan target prioritas, sementara halaman layanan membahas kebutuhan yang lebih spesifik."
          />
          <div className="segment-grid segment-grid-focus">
            {targetSegments.slice(0, 2).map((segment, index) => {
              const Icon = targetIcons[index];
              return (
                <GlassCard key={segment.title} className="segment-card">
                  <Icon className="card-icon" aria-hidden="true" />
                  <h3>{segment.title}</h3>
                  <p>{segment.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <SectionHeader
              eyebrow="Corporate Wellness"
              title="Pendekatan program yang terstruktur"
              description="KitoGizi menyediakan jalur program yang dapat dimulai dari edukasi dasar hingga pendampingan strategis tahunan."
            />
            <ActionLink href="/corporate-wellness" variant="secondary">
              Lihat Detail Program
            </ActionLink>
          </div>
          <div className="program-strip">
            {homeCorporatePrograms.map((program) => (
              <GlassCard
                key={program.title}
                className={`program-mini-card ${program.recommended ? 'is-recommended' : ''}`}
              >
                <span>{program.label}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container mcu-home-panel">
          <div>
            <SectionHeader
              eyebrow="MCU Follow-up"
              title="Sudah punya data MCU? Jangan berhenti di laporan."
              description="Hasil MCU seharusnya menjadi dasar pengambilan keputusan, bukan sekadar laporan."
            />
            <div className="pill-list">
              {mcuFollowUpPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>
          <GlassCard className="liquid-list-card">
            <h3>Maksimalkan nilai dari Medical Check Up Anda</h3>
            {mcuMaximizePoints.map((point) => (
              <div key={point}>
                <DataUsageRoundedIcon aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </GlassCard>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <SectionHeader
            eyebrow="Prinsip Kami"
            title="Kesehatan bukan hanya tentang diet, tetapi sistem hidup yang seimbang"
            description="Pendekatan KitoGizi menggabungkan evidence, pendampingan ahli, penyesuaian kebutuhan, dan evaluasi hasil yang berkelanjutan."
          />
          <GlassCard className="liquid-list-card">
            {beliefPoints.map((point) => (
              <div key={point}>
                <CheckCircleRoundedIcon aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </GlassCard>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-section reverse">
          <GlassCard className="wellness-home-card">
            {homeWellnessExperience.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </GlassCard>
          <SectionHeader
            eyebrow="Wellness Experience"
            title="Wellness experience yang lebih personal dan interaktif"
            description="KitoGizi juga menghadirkan konsultasi, workshop, dan wellness session untuk individu, komunitas, private group, hingga berbagai bentuk kolaborasi healthy lifestyle."
          />
        </div>
      </section>

      <Testimonials />
      <FinalCTA
        title="Jangan Tunggu Risiko Kesehatan Menjadi Masalah Besar bagi Perusahaan Anda"
        description="Mulai bangun program kesehatan yang berdampak. Diskusikan kebutuhan perusahaan Anda bersama tim KitoGizi untuk mendapatkan solusi yang tepat dan terarah."
        primaryLabel="Hubungi Kami Sekarang"
        secondary={
          <ActionLink href="/kontak" variant="secondary">
            Buka Halaman Kontak
          </ActionLink>
        }
      />
    </>
  );
};

export default HomePage;
