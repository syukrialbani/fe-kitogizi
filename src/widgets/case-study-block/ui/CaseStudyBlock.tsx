import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import { caseStudy } from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { GlassCard } from '../../../shared/ui/glass-card/GlassCard';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';

type CaseStudyBlockProps = {
  compact?: boolean;
};

export const CaseStudyBlock = ({ compact = false }: CaseStudyBlockProps) => {
  return (
    <section className={`section section-muted ${compact ? 'section-compact' : ''}`}>
      <div className="container case-study-layout">
        <div className="case-study-copy">
          <SectionHeader
            eyebrow="Case Study"
            title={caseStudy.title}
            description={caseStudy.subtitle}
          />
          <ul className="feature-list">
            {caseStudy.sustainableImpact.slice(0, 4).map((highlight) => (
              <li key={highlight}>
                <InsightsRoundedIcon aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <ActionLink href="/case-study" variant="secondary">
            Pelajari Case Study
          </ActionLink>
        </div>

        <div className="case-study-impact">
          {caseStudy.impact.map((item) => (
            <GlassCard key={item.label} tone="clear" className="impact-mini-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyBlock;
