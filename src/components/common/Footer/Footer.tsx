import LogoImage from '../../../assets/Logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-brand-link">
              <img src={LogoImage} alt="KitoGizi Logo" className="footer-logo" />
              <span className="footer-brand-name">KitoGizi</span>
            </a>
            <p className="footer-brand-description">
              Nutrition & wellness partner untuk membantu perusahaan membangun
              tim yang lebih sehat, fokus, dan produktif.
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Explore</h3>
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About Us</a>
            <a href="#services" className="footer-link">Our Services</a>
            <a href="#portfolio" className="footer-link">Portfolio</a>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <p className="footer-contact-item">kitogizi@gmail.com</p>
            <p className="footer-contact-item">+62 812-0000-0000</p>
            <p className="footer-contact-item">Karawang, Indonesia</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} KitoGizi. All rights reserved.
          </p>
          <p className="footer-note">Your #HealthierLifestyle Partner</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
