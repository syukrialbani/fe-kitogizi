import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="aboutus-section">
      <div className="aboutus-container">
        <div className="aboutus-content">
          <div className="aboutus-badge">About Us</div>
          <h2 className="aboutus-title">
            Professional Nutrition Consulting for Modern Workplaces
          </h2>
          <p className="aboutus-description">
            KitoGizi is a leading provider of corporate nutrition services,
            dedicated to improving employee health and workplace productivity.
            Our team of certified nutritionists works closely with companies to
            develop customized wellness programs that deliver measurable
            results.
          </p>
          <p className="aboutus-description">
            We combine evidence-based nutrition science with practical
            implementation strategies, making it easy for companies to support
            their employees&apos; health goals while driving business outcomes.
          </p>

          <div className="aboutus-stats">
            <div className="aboutus-stat-item">
              <div className="aboutus-stat-number">500+</div>
              <div className="aboutus-stat-label">Companies Served</div>
            </div>
            <div className="aboutus-stat-item">
              <div className="aboutus-stat-number">95%</div>
              <div className="aboutus-stat-label">Satisfaction Rate</div>
            </div>
            <div className="aboutus-stat-item">
              <div className="aboutus-stat-number">10+</div>
              <div className="aboutus-stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
