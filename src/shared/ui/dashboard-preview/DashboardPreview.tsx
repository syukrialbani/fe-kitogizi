import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { brandAssets } from '../../data/siteContent';

type DashboardPreviewProps = {
  variant?: 'corporate' | 'school' | 'wellness';
};

const variantCopy = {
  corporate: {
    eyebrow: 'MCU Insight',
    title: 'Employee Health Strategy',
    metric: '95%',
    metricLabel: 'habit improvement',
    bars: ['82%', '64%', '48%', '72%'],
    tags: ['Risk Map', 'Intervention', 'Monthly Review'],
  },
  school: {
    eyebrow: 'Student Insight',
    title: 'Healthy Habit Report',
    metric: '4 Area',
    metricLabel: 'nutrition, activity, sleep, hydration',
    bars: ['68%', '76%', '54%', '81%'],
    tags: ['Parent Talk', 'Challenge', 'Monitoring'],
  },
  wellness: {
    eyebrow: 'Session Plan',
    title: 'Relatable Wellness Journey',
    metric: '6+',
    metricLabel: 'workshop and campaign formats',
    bars: ['74%', '58%', '86%', '63%'],
    tags: ['Workshop', 'Consultation', 'Activation'],
  },
};

export const DashboardPreview = ({ variant = 'corporate' }: DashboardPreviewProps) => {
  const copy = variantCopy[variant];

  return (
    <div className={`dashboard-preview dashboard-preview-${variant}`} aria-label={copy.title}>
      <div className="dashboard-topline">
        <div className="dashboard-brand">
          <img src={brandAssets.logo} alt="" />
          <span>Kitogizi</span>
        </div>
        <span className="dashboard-status">Live</span>
      </div>

      <div className="dashboard-main">
        <div>
          <p className="dashboard-eyebrow">{copy.eyebrow}</p>
          <h3>{copy.title}</h3>
        </div>
        <div className="dashboard-score">
          <strong>{copy.metric}</strong>
          <span>{copy.metricLabel}</span>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-chart" aria-hidden="true">
          {copy.bars.map((bar, index) => (
            <span key={`${bar}-${index}`} style={{ height: bar }} />
          ))}
        </div>
        <div className="dashboard-insights">
          <div>
            <MonitorHeartRoundedIcon aria-hidden="true" />
            <span>Aggregated MCU</span>
          </div>
          <div>
            <AnalyticsRoundedIcon aria-hidden="true" />
            <span>Priority Risk</span>
          </div>
          <div>
            <TrendingDownRoundedIcon aria-hidden="true" />
            <span>Measured Impact</span>
          </div>
        </div>
      </div>

      <div className="dashboard-tags">
        {copy.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default DashboardPreview;
