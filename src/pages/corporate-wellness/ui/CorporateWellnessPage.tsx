import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DataUsageRoundedIcon from '@mui/icons-material/DataUsageRounded';
import FactoryRoundedIcon from '@mui/icons-material/FactoryRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { corporateWhatsappHref } from '../../../shared/config/site';
import {
  caseStudy,
  corporateAchievableResults,
  corporateAudience,
  corporatePackages,
  corporateProblems,
  investmentFactors,
  mcuOutcomePoints,
  processSteps,
} from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { FinalCTA } from '../../../shared/ui/final-cta/FinalCTA';
import { GlassCard } from '../../../shared/ui/glass-card/GlassCard';
import { PackageGrid } from '../../../shared/ui/package-grid/PackageGrid';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { ProcessSteps } from '../../../shared/ui/process-steps/ProcessSteps';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';
import { CorporateHeroVisual } from '../../../widgets/hero-visuals';

const problemIcons = [
  ReportRoundedIcon,
  DataUsageRoundedIcon,
  TrendingUpRoundedIcon,
  HealthAndSafetyRoundedIcon,
];

export const CorporateWellnessPage = () => {
  return (
    <>
      <PageHero
        variant="corporate"
        eyebrow="Corporate Wellness Program"
        title="Bangun Program Kesehatan Karyawan yang Terarah dan Berdampak"
        description="Hasil MCU sudah ada. Apa strategi selanjutnya? KitoGizi membantu perusahaan mengubah data Medical Check Up (MCU) menjadi program kesehatan yang terarah, terukur, dan berdampak nyata untuk meningkatkan produktivitas sekaligus mendukung standar kesehatan kerja."
        actions={
          <>
            <ActionLink href={corporateWhatsappHref} target="_blank" icon="calendar">
              Jadwalkan Diskusi Singkat
            </ActionLink>
            <ActionLink href="#paket-corporate" variant="secondary">
              Lihat Program Kami
            </ActionLink>
          </>
        }
        visual={<CorporateHeroVisual />}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Masalah yang Sering Terjadi"
            title="Banyak perusahaan sudah melakukan MCU, namun belum memiliki strategi tindak lanjut"
            description="Tanpa pendekatan yang tepat, program kesehatan tidak memberikan dampak yang signifikan."
          />
          <div className="problem-grid four">
            {corporateProblems.map((problem, index) => {
              const Icon = problemIcons[index];
              return (
                <GlassCard key={problem} className="problem-card">
                  <Icon aria-hidden="true" />
                  <p>{problem}</p>
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
            eyebrow="Pendekatan Berbasis Data, Bukan Asumsi"
            title="Program kesehatan dirancang melalui tahapan yang jelas"
            description="Setiap tahap membantu HR, HSE, dan manajemen mengubah data kesehatan menjadi program yang bisa dijalankan dan dievaluasi."
          />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Siapa yang Kami Bantu"
            title="Program disesuaikan untuk kebutuhan lapangan dan perkantoran"
            description="KitoGizi membantu perusahaan membangun tindak lanjut kesehatan yang lebih sistematis."
          />
          <div className="two-card-grid">
            {corporateAudience.map((audience, index) => {
              const Icon = index === 0 ? FactoryRoundedIcon : BusinessCenterRoundedIcon;
              return (
                <GlassCard key={audience.title} className="deep-card">
                  <Icon className="card-icon" aria-hidden="true" />
                  <h3>{audience.title}</h3>
                  <ul className="clean-list">
                    {audience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section id="paket-corporate" className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Program Kami"
            title="Tiga tingkat program untuk kebutuhan perusahaan yang berbeda"
            description="Setiap paket dapat disesuaikan dengan jumlah karyawan, durasi, dan tingkat intervensi yang dibutuhkan."
          />
          <PackageGrid
            packages={corporatePackages}
            ctaLabel="Diskusikan Kebutuhan"
            deliverableLabel="Deliverables"
          />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container case-study-rich">
          <SectionHeader
            eyebrow="Case Study"
            title={caseStudy.title}
            description={caseStudy.subtitle}
          />

          <div className="case-context-grid">
            <GlassCard className="case-context-card">
              <span>Klien</span>
              <p>{caseStudy.client}</p>
            </GlassCard>
            <GlassCard className="case-context-card">
              <span>Kerja Sama</span>
              <p>{caseStudy.cooperation}</p>
            </GlassCard>
            <GlassCard className="case-context-card">
              <span>Program yang Dijalankan</span>
              <p>{caseStudy.program}</p>
              <small>{caseStudy.programNote}</small>
            </GlassCard>
          </div>

          <div className="case-approach-grid">
            {caseStudy.approach.map((item) => (
              <GlassCard key={item.title} className="deep-card">
                <CheckCircleRoundedIcon className="card-icon" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="case-quote-card">
            <p>{caseStudy.mainGoal}</p>
            <strong>“{caseStudy.quote}”</strong>
          </GlassCard>

          <div className="case-result-layout">
            {caseStudy.periodResults.map((period) => (
              <GlassCard key={period.period} className="result-period-card">
                <h3>{period.period}</h3>
                <ul className="feature-list">
                  {period.points.map((point) => (
                    <li key={point}>
                      <CheckCircleRoundedIcon aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>

          <div className="case-impact-strip">
            {caseStudy.sustainableImpact.map((impact) => (
              <span key={impact}>{impact}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <SectionHeader
              eyebrow="Maksimalkan Hasil Medical Check Up Anda"
              title="Ubah laporan menjadi aksi nyata"
              description="Kami membantu perusahaan membaca data MCU dengan lebih strategis agar prioritas intervensi menjadi lebih jelas."
            />
            <GlassCard className="liquid-list-card">
              {mcuOutcomePoints.map((point) => (
                <div key={point}>
                  <DataUsageRoundedIcon aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </GlassCard>
          </div>
          <div>
            <SectionHeader
              eyebrow="Hasil yang Dapat Dicapai"
              title="Dengan pendekatan yang tepat, perusahaan dapat bergerak lebih terukur"
            />
            <GlassCard className="liquid-list-card">
              {corporateAchievableResults.map((point) => (
                <div key={point}>
                  <CheckCircleRoundedIcon aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container investment-panel">
          <SectionHeader
            eyebrow="Investasi"
            title="Investasi disesuaikan dengan kebutuhan perusahaan"
            description="Setiap perusahaan memiliki kondisi dan kebutuhan yang berbeda. Silakan hubungi kami untuk mendapatkan rekomendasi program dan penawaran yang sesuai."
          />
          <div className="pill-list">
            {investmentFactors.map((factor) => (
              <span key={factor}>{factor}</span>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Diskusikan Kebutuhan Perusahaan Anda"
        description="Tim KitoGizi siap membantu merancang program kesehatan yang sesuai dengan kondisi dan tujuan perusahaan Anda."
        primaryLabel="Hubungi via WhatsApp"
        primaryHref={corporateWhatsappHref}
      />
    </>
  );
};

export default CorporateWellnessPage;
