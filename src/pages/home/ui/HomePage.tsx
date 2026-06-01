import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import DataUsageRoundedIcon from '@mui/icons-material/DataUsageRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import contactConsultationImage from '../../../assets/contact-consultation.jpg';
import corporateCollaborationImage from '../../../assets/corporate-meeting.jpg';
import healthyPlateImage from '../../../assets/healthy-plate.jpg';
import nutritionWorkshopImage from '../../../assets/nutrition-workshop.jpg';
import workplacePresentationImage from '../../../assets/workplace-presentation.jpg';
import { whatsappHref } from '../../../shared/config/site';
import {
  beliefPoints,
  dataToProgramPoints,
  homeCorporatePrograms,
  homeProblems,
  homeServices,
  homeWellnessExperience,
  impactStats,
  programDocumentations,
  targetSegments,
} from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { FinalCTA } from '../../../shared/ui/final-cta/FinalCTA';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';
import { HomeHeroVisual } from '../../../widgets/hero-visuals';
import { Testimonials } from '../../../widgets/testimonials';

const serviceIcons = [
  CorporateFareRoundedIcon,
  HealthAndSafetyRoundedIcon,
  SchoolRoundedIcon,
];

const targetIcons = [
  BusinessCenterRoundedIcon,
  CorporateFareRoundedIcon,
];

const problemIcons = [
  DataUsageRoundedIcon,
  ReportProblemRoundedIcon,
  HealthAndSafetyRoundedIcon,
  Groups2RoundedIcon,
];

const heroProofs = ['3+ tahun kolaborasi', '2000+ sesi konsultasi', '95% peserta membaik'];

const documentationImages = [
  contactConsultationImage,
  workplacePresentationImage,
  healthyPlateImage,
];

export const HomePage = () => {
  return (
    <>
      <PageHero
        variant="school"
        eyebrow="Dari MCU ke program nyata"
        title="Mengubah Data Kesehatan Karyawan Menjadi Strategi yang Berdampak"
        description="KitoGizi membantu perusahaan membaca hasil Medical Check Up, menemukan prioritas risiko, lalu menjalankannya sebagai program kesehatan yang terasa relevan untuk karyawan."
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
        meta={
          <div className="hero-proof-grid home-proof-grid">
            {heroProofs.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        }
        visual={<HomeHeroVisual />}
      />

      <section className="section home-problem-section">
        <div className="container home-problem-layout">
          <div className="home-problem-copy">
            <SectionHeader
              eyebrow="Problem"
              title="Data ada. Strategi belum bergerak."
              description="Banyak perusahaan sudah menjalankan MCU, tetapi insight kesehatannya sering berhenti sebagai laporan. Padahal, di sanalah arah program wellness seharusnya dimulai."
            />
            <div className="home-problem-emphasis">
              <strong>MCU tidak harus selesai di file PDF.</strong>
              <p>Dengan peta risiko yang tepat, perusahaan bisa memilih intervensi yang paling masuk akal untuk budaya kerja dan kondisi karyawannya.</p>
            </div>
          </div>
          <div className="home-problem-stack">
            {homeProblems.map((problem, index) => {
              const Icon = problemIcons[index];
              return (
                <div className="home-problem-row" key={problem}>
                  <span>0{index + 1}</span>
                  <Icon aria-hidden="true" className="home-problem-icon" />
                  <p>{problem}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section home-impact-section">
        <div className="container home-impact-panel">
          <SectionHeader
            align="center"
            eyebrow="Impact"
            title="Dampak yang lebih mudah dibaca, dievaluasi, dan diteruskan"
            description="Angka ini menjadi ringkasan bagaimana program berkelanjutan membantu peserta dan perusahaan bergerak dengan arah yang lebih jelas."
          />
          <div className="home-impact-grid">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`home-impact-stat ${index === 3 ? 'is-highlight' : ''}`}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-flow-section">
        <div className="container home-flow-layout">
          <div className="home-flow-copy">
            <SectionHeader
              eyebrow="Dari Data ke Program"
              title="Dari angka MCU menjadi pengalaman wellness yang nyata"
              description="Hasil MCU seharusnya menjadi dasar pengambilan keputusan, bukan sekadar arsip tahunan. KitoGizi membantu perusahaan mengubah data kesehatan menjadi program yang terarah, terukur, dan relevan dengan kebutuhan perusahaan."
            />
            <ActionLink href="/corporate-wellness#case-study-corporate" variant="secondary">
              Lihat Studi Kasus
            </ActionLink>
          </div>
          <div className="home-flow-map" aria-label="Alur data kesehatan menjadi program wellness">
            <div className="home-flow-source">
              <span>MCU</span>
              <strong>Health data</strong>
            </div>
            {dataToProgramPoints.map((point, index) => (
              <div className="home-flow-step" key={point}>
                <span>0{index + 1}</span>
                <p>{point}</p>
              </div>
            ))}
            <div className="home-flow-result">
              <CheckCircleRoundedIcon aria-hidden="true" />
              <strong>Program berjalan</strong>
              <p>Intervensi, edukasi, monitoring, dan insight report.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-services-section">
        <div className="container">
          <SectionHeader
            eyebrow="Layanan Kami"
            title="Solusi yang terasa dekat dengan kebutuhan setiap audiens"
            description="KitoGizi menghadirkan program wellness berbasis edukasi, pendampingan, dan pendekatan aplikatif. Setiap layanan dirancang dengan pendekatan ahli gizi yang evidence-based, relevan, dan berorientasi pada perubahan yang berkelanjutan."
          />
          <div className="home-service-showcase">
            {homeServices.map((service, index) => {
              const Icon = serviceIcons[index];
              const title = service.title.replace(' (highlight)', '').replace(' (opsional)', '');
              return (
                <article
                  key={service.title}
                  className={`home-service-panel ${index === 0 ? 'is-featured' : ''}`}
                >
                  {index === 0 ? (
                    <img src={corporateCollaborationImage} alt="" />
                  ) : null}
                  <div className="home-service-panel-content">
                    <span className="home-service-index">0{index + 1}</span>
                    <Icon className="card-icon" aria-hidden="true" />
                    <h3>{title}</h3>
                    <p>{service.description}</p>
                    <ActionLink href={service.href} variant="ghost">
                      {service.cta}
                    </ActionLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section home-audience-section">
        <div className="container home-audience-layout">
          <SectionHeader
            eyebrow="Target Kami"
            title="Fokus utama untuk perusahaan dan institusi"
            description="Homepage menampilkan target prioritas, sementara halaman layanan membahas kebutuhan yang lebih spesifik."
          />
          <div className="home-audience-stage">
            {targetSegments.slice(0, 2).map((segment, index) => {
              const Icon = targetIcons[index];
              return (
                <article className="home-audience-item" key={segment.title}>
                  <span>
                    <Icon className="card-icon" aria-hidden="true" />
                  </span>
                  <h3>{segment.title}</h3>
                  <p>{segment.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section home-program-section">
        <div className="container home-program-layout">
          <div>
            <SectionHeader
              eyebrow="Corporate Wellness"
              title="Program bisa dimulai kecil, lalu tumbuh menjadi sistem"
              description="KitoGizi menyediakan jalur program yang dapat dimulai dari edukasi dasar hingga pendampingan strategis tahunan."
            />
            <ActionLink href="/corporate-wellness" variant="secondary">
              Lihat Detail Program
            </ActionLink>
          </div>
          <div className="home-program-timeline">
            {homeCorporatePrograms.map((program) => (
              <article
                key={program.title}
                className={`home-program-step ${program.recommended ? 'is-recommended' : ''}`}
              >
                <span>{program.label}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-principle-section">
        <div className="container home-principle-layout">
          <SectionHeader
            align="center"
            eyebrow="Prinsip Kami"
            title="Kesehatan bukan hanya tentang diet, tetapi sistem hidup yang seimbang"
            description="Pendekatan KitoGizi menggabungkan evidence, pendampingan ahli, penyesuaian kebutuhan, dan evaluasi hasil yang berkelanjutan."
          />
          <div className="home-belief-cloud">
            {beliefPoints.map((point) => (
              <span key={point}>
                <CheckCircleRoundedIcon aria-hidden="true" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-experience-section">
        <div className="container home-experience-layout">
          <div className="home-experience-photo">
            <img src={nutritionWorkshopImage} alt="" />
            <div>
              <strong>Personal, interaktif, dekat.</strong>
              <span>Nutrition consultation, workshop, dan healthy lifestyle session.</span>
            </div>
          </div>
          <div className="home-experience-copy">
            <SectionHeader
              eyebrow="Wellness Experience"
              title="Wellness experience yang lebih personal dan interaktif"
              description="KitoGizi juga menghadirkan konsultasi, workshop, dan wellness session untuk individu, komunitas, private group, hingga berbagai bentuk kolaborasi healthy lifestyle."
            />
            <div className="home-experience-list">
              {homeWellnessExperience.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section home-documentation-section">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Dokumentasi"
            title="Momen program yang terasa nyata"
            description="Cuplikan kegiatan konsultasi, seminar, workshop, dan aktivitas wellness yang membantu program terasa lebih nyata dan dekat dengan peserta."
          />
          <div className="documentation-grid">
            {programDocumentations.map((item, index) => (
              <article className="documentation-card" key={item.title}>
                <div className="documentation-image-slot">
                  <img src={documentationImages[index]} alt="" />
                  <span>{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
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
