import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { contact, navItems, whatsappHref } from '../../../shared/config/site';
import { brandAssets } from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';

export const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand-link" to="/" aria-label={`${contact.brandName} beranda`}>
          <img src={brandAssets.logo} alt="" />
          <span>{contact.brandName}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <ActionLink href={whatsappHref} target="_blank" icon="whatsapp" className="header-cta">
            Konsultasi WhatsApp
          </ActionLink>
          <button
            className="menu-toggle"
            type="button"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <CloseRoundedIcon aria-hidden="true" /> : <MenuRoundedIcon aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav className="mobile-nav" aria-label="Navigasi mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? 'mobile-nav-link mobile-nav-link-active' : 'mobile-nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
          <ActionLink href={whatsappHref} target="_blank" icon="whatsapp" className="mobile-nav-cta">
            Konsultasi WhatsApp
          </ActionLink>
        </nav>
      ) : null}
    </header>
  );
};

export default SiteHeader;
