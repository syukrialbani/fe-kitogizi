import { Button } from '../Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-kicker">Corporate Nutrition Consulting</p>
          <h1 className="hero-title">
            Improve Employee Health Through Smart Nutrition Monitoring
          </h1>
          <p className="hero-description">
            Transform your workplace wellness with professional nutrition
            consulting. We help companies create healthier, more productive
            teams through personalized nutrition plans and ongoing support.
          </p>
          <div className="hero-actions">
            <Button fill>Consult Now</Button>
            <Button fill={false} className="hero-secondary-button">
              Learn More
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80"
            alt="Healthy meal and workspace setup"
          />
          <div className="hero-stat-card">
            <div className="hero-stat-icon" aria-hidden="true">
              <span>N</span>
            </div>
            <div>
              <p className="hero-stat-label">Healthier Teams</p>
              <p className="hero-stat-value">500+ Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
