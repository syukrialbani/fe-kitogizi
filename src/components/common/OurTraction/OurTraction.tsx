import Puskesmas from '../../../assets/puskesmas.png';
import Ajinomoto from '../../../assets/ajinomoto.png';
import Dispora from '../../../assets/dispora.png';
import PresidentUniversity from '../../../assets/presidentUniversity.png';
import Otsuka from '../../../assets/otsuka.png';
import Unsika from '../../../assets/unsika.png';
import './OurTraction.css';

const OurTraction = () => {
  const partnerLogos = [
    { image: Puskesmas, alt: 'Partner logo placeholder 1' },
    { image: Ajinomoto, alt: 'Partner logo placeholder 2' },
    { image: Dispora, alt: 'Partner logo placeholder 3' },
    { image: PresidentUniversity, alt: 'Partner logo placeholder 4' },
    { image: Otsuka, alt: 'Partner logo placeholder 5' },
    { image: Unsika, alt: 'Partner logo placeholder 6' },
  ];

  return (
    <section id="traction" className="traction-section">
      <div className="traction-header">
        <div className="traction-stats" aria-label="Our traction highlights">
          <div className="traction-stat-item">
            <p className="traction-stat-value">1500+</p>
            <p className="traction-stat-label">Individual Client</p>
          </div>
          <div className="traction-stat-item">
            <p className="traction-stat-value">30+</p>
            <p className="traction-stat-label">Events</p>
          </div>
          <div className="traction-stat-item">
            <p className="traction-stat-value">6+</p>
            <p className="traction-stat-label">Communities & Institutions</p>
          </div>
        </div>
        <p className="traction-trusted-copy">Trusted by companies and partners</p>
      </div>

      <div className="traction-marquee-wrap">
        <div className="traction-marquee">
          {[0, 1].map((groupIndex) => (
            <div
              className="traction-marquee-group"
              aria-hidden={groupIndex === 1}
              key={groupIndex}
            >
              {partnerLogos.map((item, index) => (
                <div className="traction-logo-item" key={`${groupIndex}-${index}`}>
                  <img className="traction-logo-image" src={item.image} alt={item.alt} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTraction;
