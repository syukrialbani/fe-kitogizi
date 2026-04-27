import { useEffect, useMemo, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OurService1 from '../../../assets/OurService1.png';
import HeroImage from '../../../assets/hero.png';
import LogoImage from '../../../assets/Logo.png';
import WelcomeImage from '../../../assets/Welcome.png';
import ReactImage from '../../../assets/react.svg';
import ViteImage from '../../../assets/vite.svg';
import './OurService.css';

const services = [
  {
    image: OurService1,
    theme: 'coral',
    title: 'Lifestyle Assessment',
    description:
      "Evaluating an individual's dietary habits, health status, and lifestyle to identify nutritional deficiencies or imbalances.",
  },
  {
    image: HeroImage,
    theme: 'blue',
    title: '1-on-1 Nutrition Counseling',
    description:
      'Personalized nutrition sessions designed to address individual health goals, dietary habits, and lifestyle improvements through direct consultation with nutritionist.',
  },
  {
    image: LogoImage,
    theme: 'gold',
    title: 'Body Analysis',
    description:
      'Comprehensive assessment service that includes weight and height measurement, body composition analysis, anthropometry, and detailed body composition reporting.',
  },
  {
    image: WelcomeImage,
    theme: 'teal',
    title: 'Mini Medical Checkup',
    description:
      'Simple, fast and accurate health check-up service for early detection.',
  },
  {
    image: ReactImage,
    theme: 'mint',
    title: 'Meal Plan',
    description:
      'A structured guide for healthy eating, tailored to individual dietary needs and goals.',
  },
  {
    image: ViteImage,
    theme: 'indigo',
    title: 'A Practical Guide to Diet',
    description:
      'Personalized guidance on daily nutrition, healthy eating, lifestyle habits, meal planning, and physical activity based on individual consultation.',
  },
];

const getCardsPerView = () => {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1100) return 2;
  return 3;
};

const chunkServices = <T,>(items: T[], size: number) => {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
};

const OurService = () => {
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pages = useMemo(
    () => chunkServices(services, cardsPerView),
    [cardsPerView],
  );

  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, Math.max(0, pages.length - 1)));
  }, [pages.length]);

  const goPrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const goNext = () => {
    setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1));
  };

  return (
    <section id="services" className="ourservice-section">
      <div className="ourservice-container">
        <div className="ourservice-headline-row">
          <div className="ourservice-header">
            <p className="ourservice-badge">Our Service</p>
            <h2 className="ourservice-title">Assisting Your Needs</h2>
            <p className="ourservice-subtitle">
              Integrated nutrition services designed for individuals and
              organizations.
            </p>
          </div>

          <div className="ourservice-nav" aria-label="Service carousel controls">
            <button
              type="button"
              className="ourservice-nav-button"
              onClick={goPrev}
              disabled={currentPage === 0}
              aria-label="Previous services"
            >
              <ArrowBackIcon />
            </button>
            <button
              type="button"
              className="ourservice-nav-button"
              onClick={goNext}
              disabled={currentPage === pages.length - 1}
              aria-label="Next services"
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>

        <div className="ourservice-carousel">
          <div
            className="ourservice-track"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {pages.map((page, pageIndex) => (
              <div
                className="ourservice-page"
                key={pageIndex}
                style={{
                  gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))`,
                }}
              >
                {page.map((service) => (
                  <article
                    key={service.title}
                    className={`ourservice-card theme-${service.theme}`}
                  >
                    <div className="ourservice-image-wrap">
                      <img
                        className="ourservice-image"
                        src={service.image}
                        alt={service.title}
                      />
                    </div>
                    <div className="ourservice-card-body">
                      <h3 className="ourservice-card-title">{service.title}</h3>
                      <p className="ourservice-card-description">
                        {service.description}
                      </p>
                    </div>
                  </article>
                ))}
                {page.length < cardsPerView &&
                  Array.from({ length: cardsPerView - page.length }).map(
                    (_, index) => (
                      <div
                        key={`empty-${pageIndex}-${index}`}
                        className="ourservice-card ourservice-card-empty"
                        aria-hidden="true"
                      />
                    ),
                  )}
              </div>
            ))}
          </div>
        </div>

        <div className="ourservice-dots" aria-hidden="true">
          {pages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`ourservice-dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
