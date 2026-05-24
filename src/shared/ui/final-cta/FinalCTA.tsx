import type { ReactNode } from 'react';
import { whatsappHref } from '../../config/site';
import { ActionLink } from '../action-link/ActionLink';

type FinalCTAProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondary?: ReactNode;
};

export const FinalCTA = ({
  title,
  description,
  primaryLabel = 'Konsultasi via WhatsApp',
  primaryHref = whatsappHref,
  secondary,
}: FinalCTAProps) => {
  return (
    <section className="final-cta-section">
      <div className="final-cta">
        <div>
          <p className="section-eyebrow">Mulai Diskusi</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="final-cta-actions">
          <ActionLink href={primaryHref} target="_blank" icon="whatsapp">
            {primaryLabel}
          </ActionLink>
          {secondary}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
