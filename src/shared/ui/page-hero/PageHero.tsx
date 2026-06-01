import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  visual?: ReactNode;
  meta?: ReactNode;
  compact?: boolean;
  variant?: 'default' | 'home' | 'corporate' | 'wellness' | 'school' | 'about' | 'contact' | 'plain';
};

export const PageHero = ({
  eyebrow,
  title,
  description,
  actions,
  visual,
  meta,
  compact = false,
  variant = 'default',
}: PageHeroProps) => {
  return (
    <section className={`page-hero page-hero-${variant} ${compact ? 'page-hero-compact' : ''}`}>
      <div className="page-hero-inner">
        <div className="page-hero-copy">
          {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p>{description}</p>
          {actions ? <div className="hero-actions">{actions}</div> : null}
          {meta ? <div className="hero-meta">{meta}</div> : null}
        </div>
        {visual ? <div className="page-hero-visual">{visual}</div> : null}
      </div>
    </section>
  );
};

export default PageHero;
