import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TaskIcon from '@mui/icons-material/Task';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './OurService.css';

const services = [
  {
    icon: AssignmentTurnedInIcon,
    title: 'Nutrition Assessment',
    description:
      "Comprehensive evaluation of your team's nutritional needs and health goals through professional consultations.",
  },
  {
    icon: RestaurantIcon,
    title: 'Employee Meal Planning',
    description:
      'Customized meal plans designed for diverse dietary needs, preferences, and health objectives.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Progress Monitoring',
    description:
      'Continuous tracking and support to ensure employees stay on track with their nutrition goals.',
  },
  {
    icon: TaskIcon,
    title: 'Health Reporting',
    description:
      'Detailed analytics and insights on team health metrics, engagement, and program effectiveness.',
  },
];

const OurService = () => {
  return (
    <section id="services" className="ourservice-section">
      <div className="ourservice-container">
        <div className="ourservice-header">
          <div className="ourservice-badge">Our Services</div>
          <h2 className="ourservice-title">Comprehensive Nutrition Solutions</h2>
          <p className="ourservice-subtitle">
            Everything you need to build a healthier, more productive
            workplace.
          </p>
        </div>

        <div className="ourservice-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="ourservice-card">
                <div className="ourservice-icon-wrap">
                  <Icon className="ourservice-icon" />
                </div>
                <h3 className="ourservice-card-title">{service.title}</h3>
                <p className="ourservice-card-description">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurService;
