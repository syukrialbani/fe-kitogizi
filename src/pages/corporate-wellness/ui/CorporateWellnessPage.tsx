import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import DataUsageRoundedIcon from '@mui/icons-material/DataUsageRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import FactoryRoundedIcon from '@mui/icons-material/FactoryRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';
import corporateSceneImage from '../../../assets/corporate-seminar.jpg';
import consultationImage from '../../../assets/health-insight-laptop.jpg';
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
import { PackageGrid } from '../../../shared/ui/package-grid/PackageGrid';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';
import { CorporateHeroVisual } from '../../../widgets/hero-visuals';

const problemIcons = [
  ReportRoundedIcon,
  DataUsageRoundedIcon,
  TrendingUpRoundedIcon,
  HealthAndSafetyRoundedIcon,
];

const methodIcons = [
  ManageSearchRoundedIcon,
  FactCheckRoundedIcon,
  WorkspacesRoundedIcon,
  TimelineRoundedIcon,
];

const approachIcons = [
  LocalDiningRoundedIcon,
  PersonSearchRoundedIcon,
  MonitorHeartRoundedIcon,
];

const resultIcons = [
  GroupsRoundedIcon,
  TrendingDownRoundedIcon,
  FavoriteRoundedIcon,
  SpaRoundedIcon,
];

const impactIcons = [
  VerifiedUserRoundedIcon,
  FavoriteRoundedIcon,
  AutoGraphRoundedIcon,
  GroupsRoundedIcon,
  HandshakeRoundedIcon,
];

export const CorporateWellnessPage = () => {
  const [caseTitleLead, caseTitleHighlight] = caseStudy.title.split(', ');

  return (
    <>
      <PageHero
        variant="school"
        eyebrow="Corporate Wellness Program"
        title="Bangun Program Kesehatan Karyawan yang Terarah dan Berdampak"
        description="KitoGizi membantu HR dan HSE membaca data Medical Check Up, menemukan prioritas risiko, lalu menjalankannya sebagai program kesehatan karyawan yang terarah, terukur, dan relevan dengan kondisi perusahaan."
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
        meta={
          <div className="corporate-hero-proof">
            <span>MCU follow-up strategy</span>
            <span>Risk-based intervention</span>
            <span>Insight report</span>
          </div>
        }
        visual={<CorporateHeroVisual />}
      />

      <section className="section corporate-problem-section">
        <div className="container corporate-problem-layout">
          <article className="corporate-problem-lead">
            <InsightsRoundedIcon aria-hidden="true" />
            <span>Gap utama setelah MCU</span>
            <h2>Data sudah ada. Yang sering belum ada adalah arah tindak lanjutnya.</h2>
            <p>
              KitoGizi membantu tim HR, HSE, dan manajemen membaca sinyal kesehatan karyawan,
              menentukan prioritas, lalu membuat program yang bisa dijalankan bertahap.
            </p>
            <div className="corporate-problem-mini-stats">
              <div>
                <strong>MCU</strong>
                <small>Health data</small>
              </div>
              <div>
                <strong>Risk</strong>
                <small>Priority map</small>
              </div>
              <div>
                <strong>Action</strong>
                <small>Program plan</small>
              </div>
            </div>
          </article>
          <div className="corporate-problem-content">
            <SectionHeader
              eyebrow="Masalah yang Sering Terjadi"
              title="MCU sering berhenti sebagai dokumen, bukan arah program."
              description="Tanpa pembacaan data yang tepat, program kesehatan terasa umum, sulit dievaluasi, dan tidak cukup dekat dengan risiko yang sebenarnya."
            />
            <div className="corporate-problem-board">
              {corporateProblems.map((problem, index) => {
                const Icon = problemIcons[index];
                return (
                  <article key={problem} className="corporate-problem-card">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <Icon aria-hidden="true" />
                    <p>{problem}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section corporate-method-section">
        <div className="container corporate-method-layout">
          <div className="corporate-method-copy">
            <SectionHeader
              eyebrow="Pendekatan Berbasis Data"
              title="Dari laporan MCU menjadi roadmap intervensi."
              description="Setiap tahap dirancang untuk membantu perusahaan bergerak dari data agregat menuju aksi: assessment, prioritas risiko, implementasi, lalu evaluasi."
            />
            <ActionLink href="#paket-corporate" variant="secondary">
              Lihat Pilihan Program
            </ActionLink>
            <div className="corporate-method-note">
              <strong>Output akhirnya bukan sekadar rekomendasi.</strong>
              <p>Tim mendapat alur kerja yang jelas: apa yang perlu diprioritaskan, siapa yang perlu dibantu, dan bagaimana progress-nya dibaca ulang.</p>
            </div>
          </div>
          <div className="corporate-method-rail">
            {processSteps.map((step, index) => {
              const Icon = methodIcons[index] ?? AssignmentTurnedInRoundedIcon;
              return (
                <article key={step.title} className="corporate-method-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section corporate-audience-section">
        <div className="container corporate-audience-layout">
          <div className="corporate-audience-photo">
            <img src={corporateSceneImage} alt="" />
            <div>
              <strong>Untuk tim yang perlu programnya terasa relevan di lapangan.</strong>
              <span>Workplace health, productivity, dan wellbeing dalam satu arah.</span>
            </div>
          </div>
          <div className="corporate-audience-content">
            <SectionHeader
              eyebrow="Siapa yang Kami Bantu"
              title="Program disesuaikan untuk kebutuhan lapangan dan perkantoran."
              description="KitoGizi membantu perusahaan membangun tindak lanjut kesehatan yang lebih sistematis, baik untuk lingkungan industri maupun kantor."
            />
            <div className="corporate-audience-grid">
              {corporateAudience.map((audience, index) => {
                const Icon = index === 0 ? FactoryRoundedIcon : BusinessCenterRoundedIcon;
                return (
                  <article key={audience.title} className="corporate-audience-card">
                    <Icon className="card-icon" aria-hidden="true" />
                    <div>
                      <h3>{audience.title}</h3>
                      <ul className="clean-list">
                        {audience.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="paket-corporate" className="section corporate-package-section">
        <div className="container">
          <div className="corporate-package-head">
            <SectionHeader
              eyebrow="Program Kami"
              title="Pilih level pendampingan sesuai kesiapan perusahaan."
              description="Mulai dari awareness singkat hingga strategic partnership tahunan. Setiap paket dapat disesuaikan dengan jumlah karyawan, durasi, dan tingkat intervensi yang dibutuhkan."
            />
            <div className="corporate-package-note">
              <CorporateFareRoundedIcon aria-hidden="true" />
              <p>
                Mulai dari awareness satu kali sampai strategic partnership tahunan berbasis data.
              </p>
            </div>
          </div>
          <PackageGrid
            packages={corporatePackages}
            ctaLabel="Diskusikan Kebutuhan"
            deliverableLabel="Deliverables"
          />
        </div>
      </section>

      <section id="case-study-corporate" className="section section-muted">
        <div className="container">
          <article className="case-report-shell">
            <div className="case-report-head">
              <div className="case-report-title">
                <span className="case-report-badge">Case Study</span>
                <h2>
                  {caseTitleLead}
                  {caseTitleHighlight ? (
                    <>
                      ,
                      <span>{caseTitleHighlight}</span>
                    </>
                  ) : null}
                </h2>
                <p>{caseStudy.subtitle}</p>
              </div>

              <div className="case-report-meta">
                <div className="case-meta-item">
                  <ApartmentRoundedIcon aria-hidden="true" />
                  <div>
                    <h3>Klien</h3>
                    <p>{caseStudy.client}</p>
                  </div>
                </div>
                <div className="case-meta-item">
                  <HandshakeRoundedIcon aria-hidden="true" />
                  <div>
                    <h3>Kerja Sama</h3>
                    <p>{caseStudy.cooperation}</p>
                  </div>
                </div>
                <div className="case-meta-item case-meta-program">
                  <Diversity3RoundedIcon aria-hidden="true" />
                  <div>
                    <span>Program yang dijalankan</span>
                    <h3>{caseStudy.program}</h3>
                    <p>{caseStudy.programNote}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-report-body">
              <aside className="case-approach-panel">
                <div className="case-panel-title">Pendekatan Program</div>
                <div className="case-approach-list">
                  {caseStudy.approach.map((item, index) => {
                    const Icon = approachIcons[index] ?? HealthAndSafetyRoundedIcon;
                    return (
                      <div className="case-approach-item" key={item.title}>
                        <span>
                          <Icon aria-hidden="true" />
                        </span>
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="case-goal-card">
                  <FlagRoundedIcon aria-hidden="true" />
                  <div>
                    <strong>Tujuan Utama</strong>
                    <p>{caseStudy.mainGoal}</p>
                  </div>
                </div>
              </aside>

              <div className="case-results-panel">
                <div className="case-panel-title">Hasil yang Dicapai</div>
                <div className="case-period-grid">
                  {caseStudy.resultPeriods.map((period) => (
                    <div className="case-period-card" key={period.period}>
                      <span className="case-period-label">{period.period}</span>
                      <div className="case-metric-list">
                        {period.metrics.map((metric, index) => {
                          const Icon = resultIcons[index] ?? TrendingUpRoundedIcon;
                          return (
                            <div className="case-metric-row" key={`${period.period}-${metric.title}`}>
                              <span className="case-metric-icon">
                                <Icon aria-hidden="true" />
                              </span>
                              <div>
                                <strong>{metric.title}</strong>
                                {metric.description ? <p>{metric.description}</p> : null}
                              </div>
                              <b>{metric.value}</b>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="case-sustainable-band">
              <div className="case-sustainable-title">
                <EmojiEventsRoundedIcon aria-hidden="true" />
                <strong>Dampak Nyata, Berkelanjutan</strong>
              </div>
              {caseStudy.sustainableImpact.map((impact, index) => {
                const Icon = impactIcons[index] ?? CheckCircleRoundedIcon;
                return (
                  <div className="case-impact-item" key={impact}>
                    <Icon aria-hidden="true" />
                    <span>{impact}</span>
                  </div>
                );
              })}
            </div>

            <div className="case-report-footer">
              <blockquote>{caseStudy.quote}</blockquote>
              <p>
                Kepercayaan selama 3 tahun berturut-turut adalah bukti komitmen kami dalam
                menghasilkan program yang berdampak dan terukur.
              </p>
              <div className="case-footer-brand">
                <strong>KitoGizi</strong>
                <span>
                  Partner strategis Anda dalam mewujudkan karyawan yang sehat, produktif, dan
                  berdaya saing.
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section corporate-mcu-action-section">
        <div className="container corporate-action-lab">
          <div className="corporate-action-visual">
            <img src={consultationImage} alt="" />
            <div>
              <span>MCU Insight Lab</span>
              <strong>Laporan menjadi prioritas, prioritas menjadi program.</strong>
            </div>
          </div>
          <div className="corporate-action-copy">
            <SectionHeader
              eyebrow="Maksimalkan Hasil Medical Check Up Anda"
              title="Ubah laporan menjadi aksi nyata."
              description="Kami membantu perusahaan membaca data MCU dengan lebih strategis agar prioritas intervensi menjadi lebih jelas."
            />
            <div className="corporate-action-list">
              {mcuOutcomePoints.map((point) => (
                <div key={point}>
                  <DataUsageRoundedIcon aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="corporate-result-copy">
            <SectionHeader
              eyebrow="Hasil yang Dapat Dicapai"
              title="Dengan pendekatan yang tepat, perusahaan bergerak lebih terukur."
            />
            <div className="corporate-result-list">
              {corporateAchievableResults.map((point) => (
                <div key={point}>
                  <CheckCircleRoundedIcon aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section corporate-investment-section">
        <div className="container investment-panel">
          <SectionHeader
            eyebrow="Investasi"
            title="Investasi disesuaikan dengan kebutuhan perusahaan."
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
