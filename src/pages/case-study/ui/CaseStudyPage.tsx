import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { corporateWhatsappHref } from '../../../shared/config/site';
import { caseStudy } from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { FinalCTA } from '../../../shared/ui/final-cta/FinalCTA';
import { GlassCard } from '../../../shared/ui/glass-card/GlassCard';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';
import { CorporateHeroVisual } from '../../../widgets/hero-visuals';
import { Testimonials } from '../../../widgets/testimonials';

export const CaseStudyPage = () => {
  return (
    <>
      <PageHero
        compact
        variant="corporate"
        eyebrow="Case Study"
        title={caseStudy.title}
        description={caseStudy.subtitle}
        actions={
          <>
            <ActionLink href={corporateWhatsappHref} target="_blank" icon="whatsapp">
              Diskusikan Case Anda
            </ActionLink>
            <ActionLink href="/corporate-wellness" variant="secondary">
              Lihat Corporate Wellness
            </ActionLink>
          </>
        }
        visual={<CorporateHeroVisual />}
      />

      <section className="section">
        <div className="container case-detail-grid">
          <div>
            <SectionHeader
              eyebrow="Konteks Program"
              title="Annual Strategic Health Partnership untuk industri makanan"
              description={`${caseStudy.client} Kerja sama berjalan ${caseStudy.cooperation.toLowerCase()}`}
            />
            <GlassCard className="case-quote-card">
              <p>{caseStudy.mainGoal}</p>
              <strong>“{caseStudy.quote}”</strong>
            </GlassCard>
          </div>

          <div className="case-result-stack">
            {caseStudy.impact.map((item) => (
              <GlassCard key={item.label} className="case-result-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Pendekatan Program"
            title="Edukasi, intervensi personalized, dan monitoring berkala"
            description="Program berjalan sebagai pendampingan tahunan agar hasil MCU tidak berhenti sebagai laporan, tetapi menjadi dasar edukasi, konsultasi, campaign, dan monitoring."
          />
          <div className="case-approach-grid">
            {caseStudy.approach.map((item) => (
              <GlassCard key={item.title} className="deep-card">
                <CheckCircleRoundedIcon className="card-icon" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container case-result-layout">
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
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Dampak Nyata dan Berkelanjutan"
            title="Kepercayaan selama 3 tahun berturut-turut menjadi bukti komitmen program"
            description="KitoGizi menjadi partner strategis dalam mewujudkan karyawan yang sehat, produktif, dan berdaya saing."
          />
          <div className="case-impact-strip">
            {caseStudy.sustainableImpact.map((impact) => (
              <span key={impact}>{impact}</span>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FinalCTA
        title="Punya data kesehatan yang belum ditindaklanjuti?"
        description="Mari ubah insight kesehatan karyawan menjadi program yang jelas, terukur, dan dapat dievaluasi."
        primaryLabel="Minta Rekomendasi Program"
      />
    </>
  );
};

export default CaseStudyPage;
