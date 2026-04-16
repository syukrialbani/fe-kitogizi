import React from 'react';
import './Button.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fill?: boolean;
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  fill = true,
  fullWidth = false,
  className = '',
  type = 'button',
  children,
  ...props
}) => {
  const classes = [
    'ui-button',
    fill ? 'ui-button-fill' : 'ui-button-outline',
    fullWidth ? 'ui-button-full-width' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
