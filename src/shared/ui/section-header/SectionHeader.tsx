type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) => {
  const classes = ['section-header', `section-header-${align}`, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
};

export default SectionHeader;
