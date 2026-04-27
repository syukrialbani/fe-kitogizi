import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Groups2Icon from '@mui/icons-material/Groups2';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Welcome from '../../../assets/Welcome.png';
import './AboutUs.css';

const AboutUs = () => {
  const services = [
    {
      icon: <FitnessCenterIcon className="aboutus-feature-icon" />,
      title: 'Konsultasi Personal',
      description: 'Konsultasi gizi dan perencanaan aktivitas fisik yang disesuaikan dengan kebutuhan individu.',
    },
    {
      icon: <Groups2Icon className="aboutus-feature-icon" />,
      title: 'Workshop Interaktif',
      description: 'Edukasi gizi dan kesehatan untuk meningkatkan awareness serta kebiasaan hidup sehat di tim kerja.',
    },
    {
      icon: <BusinessCenterIcon className="aboutus-feature-icon" />,
      title: 'Program Korporat',
      description: 'Perancangan program nutrition & wellness khusus perusahaan untuk mendukung produktivitas berkelanjutan.',
    },
  ];

  return (
    <section id="about" className="aboutus-section">
      <div className="aboutus-container">
        <div className="aboutus-content">
          <img
            className="aboutus-welcome-image"
            src={Welcome}
            alt="Welcome to Kitogizi"
          />
          <p className="aboutus-description">
            Kitogizi (PT Kitojum Sehat Bersama) adalah perusahaan nutrition & wellness
            yang berkomitmen meningkatkan kesehatan dan produktivitas tenaga kerja di
            Indonesia.
          </p>
          <p className="aboutus-description">
            Program kami dikembangkan oleh nutrisionis dan dietisien agar relevan untuk
            kebutuhan individu maupun perusahaan.
          </p>

          <div className="aboutus-highlights">
            <div className="aboutus-highlights-title">
              <span>Layanan Utama Kami</span>
            </div>

            <div className="aboutus-features">
              {services.map((service) => (
                <article className="aboutus-feature-card" key={service.title}>
                  <div className="aboutus-feature-head">
                    <div className="aboutus-feature-icon-wrap">{service.icon}</div>
                    <h3 className="aboutus-feature-title">{service.title}</h3>
                  </div>
                  <p className="aboutus-feature-description">{service.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="aboutus-note">
            Pendekatan berbasis data dan edukasi berkelanjutan membantu membentuk budaya
            kerja yang lebih sehat, fokus, dan produktif.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
