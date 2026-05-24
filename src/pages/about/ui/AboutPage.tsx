import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import { whatsappHref } from '../../../shared/config/site';
import { aboutPrinciples, brandAssets } from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { FinalCTA } from '../../../shared/ui/final-cta/FinalCTA';
import { GlassCard } from '../../../shared/ui/glass-card/GlassCard';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';
import { LogoCloud } from '../../../widgets/logo-cloud';

export const AboutPage = () => {
  return (
    <>
      <PageHero
        compact
        eyebrow="Tentang KitoGizi"
        title="Partner wellness yang berbasis data, edukatif, aplikatif, dan berkelanjutan"
        description="KitoGizi adalah partner wellness dan edukasi gizi yang membantu perusahaan, sekolah, komunitas, dan individu membangun kebiasaan sehat melalui program yang relevan dengan kebutuhan klien."
        actions={
          <>
            <ActionLink href={whatsappHref} target="_blank" icon="whatsapp">
              Diskusi dengan Tim Kami
            </ActionLink>
            <ActionLink href="/case-study" variant="secondary">
              Lihat Case Study
            </ActionLink>
          </>
        }
        visual={
          <div className="brand-showcase">
            <img src={brandAssets.welcome} alt="Welcome to KitoGizi" />
            <p>Your #HealthierLifestyle Solution</p>
          </div>
        }
      />

      <section className="section">
        <div className="container split-section">
          <SectionHeader
            eyebrow="Profil"
            title="KitoGizi membantu program sehat terasa lebih strategis dan mudah dijalankan"
            description="Kami tidak hanya memberikan edukasi gizi, tetapi membantu perusahaan dan institusi membangun program kesehatan yang terarah, terukur, dan berkelanjutan."
          />
          <div className="principle-grid">
            {aboutPrinciples.map((principle) => (
              <GlassCard key={principle} className="principle-card">
                <VerifiedRoundedIcon aria-hidden="true" />
                <span>{principle}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Pendekatan Kami"
            title="Profesional untuk institusi, tetap approachable untuk peserta"
            description="KitoGizi menyusun program dengan bahasa yang mudah dipahami, aktivitas yang realistis, dan laporan insight yang membantu pengambilan keputusan."
          />
          <div className="three-card-grid">
            <GlassCard className="deep-card">
              <AutoGraphRoundedIcon className="card-icon" aria-hidden="true" />
              <h3>Data-driven</h3>
              <p>MCU, lifestyle assessment, dan insight peserta digunakan untuk menentukan fokus program.</p>
            </GlassCard>
            <GlassCard className="deep-card">
              <PsychologyRoundedIcon className="card-icon" aria-hidden="true" />
              <h3>Relatable</h3>
              <p>Materi dibuat dekat dengan rutinitas peserta agar mudah dipahami dan diterapkan.</p>
            </GlassCard>
            <GlassCard className="deep-card">
              <VerifiedRoundedIcon className="card-icon" aria-hidden="true" />
              <h3>Professional Support</h3>
              <p>Program didampingi ahli gizi profesional dengan fokus pada perubahan jangka panjang.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      <LogoCloud />
      <FinalCTA
        title="Mari bangun program wellness yang sesuai dengan konteks organisasi Anda"
        description="Ceritakan kebutuhan tim, sekolah, komunitas, atau brand Anda kepada KitoGizi."
        primaryLabel="Hubungi KitoGizi"
      />
    </>
  );
};

export default AboutPage;
