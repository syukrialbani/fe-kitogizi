import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import { contact, navItems, whatsappHref } from '../../../shared/config/site';
import { brandAssets } from '../../../shared/data/siteContent';

export const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <Link className="brand-link" to="/" aria-label={`${contact.brandName} beranda`}>
            <img src={brandAssets.logo} alt="" />
            <span>{contact.brandName}</span>
          </Link>
          <p>
            Partner wellness dan edukasi gizi untuk perusahaan, sekolah, komunitas, dan brand
            yang ingin membangun kebiasaan sehat secara terarah.
          </p>
        </div>

        <div className="footer-nav">
          <h2>Menu</h2>
          {navItems.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-contact">
          <h2>Kontak</h2>
          <a href={whatsappHref} target="_blank" rel="noreferrer">
            <WhatsAppIcon aria-hidden="true" />
            <span>{contact.phoneDisplay}</span>
          </a>
          <a href={`mailto:${contact.email}`}>
            <AlternateEmailRoundedIcon aria-hidden="true" />
            <span>{contact.email}</span>
          </a>
          <p>
            <LocationOnRoundedIcon aria-hidden="true" />
            <span>{contact.location}</span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {contact.brandName}. All rights reserved.</p>
        <p>{contact.legalName}</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
