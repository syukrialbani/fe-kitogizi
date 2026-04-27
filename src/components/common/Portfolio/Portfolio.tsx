import AjinomotoImage from '../../../assets/ajinomoto.png';
import OtsukaImage from '../../../assets/otsuka.png';
import PuskesmasImage from '../../../assets/puskesmas.png';
import UnsikaImage from '../../../assets/unsika.png';
import PresidentUniversityImage from '../../../assets/presidentUniversity.png';
import DispuraImage from '../../../assets/dispora.png';
import './Portfolio.css';

const projectItems = [
  {
    image: AjinomotoImage,
    title: 'Employee Wellness',
    partner: 'PT Ajinomoto Indonesia',
    category: 'Corporate Program',
  },
  {
    image: OtsukaImage,
    title: 'Employee Wellness',
    partner: 'PT Amerta Indah Otsuka',
    category: 'Corporate Program',
  },
  {
    image: PuskesmasImage,
    title: 'Clinical Nutrition',
    partner: 'Puskesmas & Community Health',
    category: 'Clinical Program',
  },
  {
    image: PresidentUniversityImage,
    title: 'Family Nutrition Workshop',
    partner: 'President University',
    category: 'Education',
  },
  {
    image: DispuraImage,
    title: 'Sport Nutrition Education',
    partner: 'Pusat Pelatihan Olahraga Pelajar',
    category: 'Sport Nutrition',
  },
  {
    image: UnsikaImage,
    title: 'Public Nutrition Literacy',
    partner: 'Universitas Singaperbangsa',
    category: 'Community Program',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p className="portfolio-badge">Portfolio</p>
          <h2 className="portfolio-title">Program Impact & Project Highlights</h2>
          <p className="portfolio-subtitle">
            Ringkasan hasil program kesehatan dan dokumentasi kegiatan kami di
            perusahaan, institusi pendidikan, serta komunitas.
          </p>
        </div>

        <div className="portfolio-impact-grid">
          <article className="portfolio-impact-card">
            <p className="portfolio-impact-label">Employee Engagement Survey</p>
            <div className="portfolio-score-row">
              <div className="portfolio-score-pill before">
                <span>2023</span>
                <strong>80</strong>
              </div>
              <span className="portfolio-score-arrow" aria-hidden="true">
                →
              </span>
              <div className="portfolio-score-pill after">
                <span>2024</span>
                <strong>94</strong>
              </div>
            </div>
            <p className="portfolio-impact-note">
              Skor engagement meningkat setelah intervensi program wellness.
            </p>
          </article>

          <article className="portfolio-impact-card">
            <p className="portfolio-impact-label">Health Risk Improvement</p>
            <p className="portfolio-risk-number">-65%</p>
            <p className="portfolio-impact-note">
              Penurunan temuan sindrom metabolik pada program evaluasi tahunan.
            </p>
          </article>
        </div>

        <div className="portfolio-project-grid">
          {projectItems.map((item) => (
            <article className="portfolio-project-card" key={`${item.title}-${item.partner}`}>
              <div className="portfolio-project-image-wrap">
                <img
                  className="portfolio-project-image"
                  src={item.image}
                  alt={`${item.title} - ${item.partner}`}
                />
              </div>
              <div className="portfolio-project-meta">
                <span className="portfolio-project-category">{item.category}</span>
                <h3 className="portfolio-project-title">{item.title}</h3>
                <p className="portfolio-project-partner">{item.partner}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
