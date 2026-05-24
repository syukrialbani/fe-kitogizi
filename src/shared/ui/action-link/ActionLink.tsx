import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: 'arrow' | 'whatsapp' | 'calendar' | 'none';
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
};

const iconMap = {
  arrow: ArrowForwardRoundedIcon,
  whatsapp: WhatsAppIcon,
  calendar: CalendarMonthRoundedIcon,
};

export const ActionLink = ({
  href,
  children,
  variant = 'primary',
  icon = 'arrow',
  className = '',
  ariaLabel,
  target,
  rel,
}: ActionLinkProps) => {
  const Icon = icon === 'none' ? null : iconMap[icon];
  const classes = ['action-link', `action-link-${variant}`, className].filter(Boolean).join(' ');
  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon className="action-link-icon" aria-hidden="true" /> : null}
    </>
  );

  if (href.startsWith('/') && !target) {
    return (
      <Link className={classes} to={href} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <a
      className={classes}
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={target === '_blank' ? rel ?? 'noreferrer' : rel}
    >
      {content}
    </a>
  );
};

export default ActionLink;
