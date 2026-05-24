import type { ReactNode } from 'react';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'mint' | 'warm' | 'clear';
};

export const GlassCard = ({ children, className = '', tone = 'default' }: GlassCardProps) => {
  const classes = ['glass-card', `glass-card-${tone}`, className].filter(Boolean).join(' ');

  return <article className={classes}>{children}</article>;
};

export default GlassCard;
