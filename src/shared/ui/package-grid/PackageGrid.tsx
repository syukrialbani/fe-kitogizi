import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { whatsappHref } from '../../config/site';
import { ActionLink } from '../action-link/ActionLink';

type PackageItem = {
  tier: string;
  title: string;
  description: string;
  deliverables: string[];
  fit: string;
  recommended?: boolean;
};

type PackageGridProps = {
  packages: PackageItem[];
  ctaLabel?: string;
  deliverableLabel?: string;
};

export const PackageGrid = ({
  packages,
  ctaLabel = 'Diskusikan Paket',
  deliverableLabel = 'Yang Didapatkan',
}: PackageGridProps) => {
  return (
    <div className="package-grid">
      {packages.map((item) => (
        <article className={`package-card ${item.recommended ? 'package-card-featured' : ''}`} key={item.title}>
          <div className="package-card-head">
            <div>
              <p>{item.tier}</p>
              <h3>{item.title}</h3>
            </div>
            {item.recommended ? <span className="recommended-badge">Recommended</span> : null}
          </div>
          <div className="package-purpose">
            <span>Tujuan</span>
            <p className="package-description">{item.description}</p>
          </div>
          <div className="package-purpose">
            <span>{deliverableLabel}</span>
          </div>
          <ul className="check-list">
            {item.deliverables.map((deliverable) => (
              <li key={deliverable}>
                <CheckCircleRoundedIcon aria-hidden="true" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
          <div className="package-fit">
            <span>Cocok untuk</span>
            <p>{item.fit}</p>
          </div>
          <ActionLink href={whatsappHref} target="_blank" icon="whatsapp" variant={item.recommended ? 'primary' : 'secondary'}>
            {ctaLabel}
          </ActionLink>
        </article>
      ))}
    </div>
  );
};

export default PackageGrid;
