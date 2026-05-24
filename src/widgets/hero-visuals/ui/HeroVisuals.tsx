import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { brandAssets } from '../../../shared/data/siteContent';

export const HomeHeroVisual = () => {
  return (
    <div className="liquid-hero-visual home-hero-visual" aria-label="Ilustrasi strategi kesehatan berbasis data">
      <div className="glass-sheen" />
      <div className="hero-visual-top">
        <div className="visual-brand">
          <img src={brandAssets.logo} alt="" />
          <span>KitoGizi Strategy Board</span>
        </div>
        <span className="visual-live">MCU Insight</span>
      </div>

      <div className="strategy-flow">
        <div className="strategy-node">
          <MonitorHeartRoundedIcon aria-hidden="true" />
          <span>Data MCU</span>
        </div>
        <div className="strategy-line" />
        <div className="strategy-node is-active">
          <AnalyticsRoundedIcon aria-hidden="true" />
          <span>Risk Priority</span>
        </div>
        <div className="strategy-line" />
        <div className="strategy-node">
          <AutoGraphRoundedIcon aria-hidden="true" />
          <span>Health Program</span>
        </div>
      </div>

      <div className="home-visual-grid">
        <div className="glass-panel impact-panel">
          <p>Program Impact</p>
          <strong>95%</strong>
          <span>Peserta mengalami perbaikan</span>
        </div>
        <div className="glass-panel report-panel">
          <div>
            <span>Engagement</span>
            <strong>80 → 94</strong>
          </div>
          <div>
            <span>Metabolic Risk</span>
            <strong>-65%</strong>
          </div>
        </div>
      </div>

      <div className="floating-program-card">
        <TaskAltRoundedIcon aria-hidden="true" />
        <div>
          <strong>Strategic Health Partnership</strong>
          <span>Analisis, intervensi, monitoring</span>
        </div>
      </div>
    </div>
  );
};

export const CorporateHeroVisual = () => {
  return (
    <div className="liquid-hero-visual corporate-hero-visual" aria-label="Ilustrasi follow-up MCU corporate">
      <div className="glass-sheen" />
      <div className="hero-visual-top">
        <div className="visual-brand">
          <img src={brandAssets.logo} alt="" />
          <span>Corporate Wellness Console</span>
        </div>
        <span className="visual-live">B2B</span>
      </div>

      <div className="mcu-stack">
        <div className="mcu-card">
          <span>MCU Report</span>
          <strong>Aggregated Data</strong>
        </div>
        <div className="mcu-card is-raised">
          <span>Dominant Risk</span>
          <strong>Sindrom Metabolik</strong>
        </div>
        <div className="mcu-card">
          <span>Intervention Plan</span>
          <strong>Monthly Program</strong>
        </div>
      </div>

      <div className="corporate-timeline">
        {['Assessment', 'Strategy', 'Implementation', 'Evaluation'].map((item, index) => (
          <div className="timeline-dot" key={item}>
            <span>{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const WellnessHeroVisual = () => {
  return (
    <div className="liquid-hero-visual wellness-hero-visual" aria-label="Ilustrasi wellness experience">
      <div className="glass-sheen" />
      <div className="experience-ticket ticket-primary">
        <RestaurantRoundedIcon aria-hidden="true" />
        <div>
          <span>Nutrition Consultation</span>
          <strong>Personalized guidance</strong>
        </div>
      </div>
      <div className="experience-ticket ticket-secondary">
        <LocalActivityRoundedIcon aria-hidden="true" />
        <div>
          <span>Wellness Workshop</span>
          <strong>Relatable & interactive</strong>
        </div>
      </div>
      <div className="experience-ticket ticket-tertiary">
        <Diversity3RoundedIcon aria-hidden="true" />
        <div>
          <span>Brand Collaboration</span>
          <strong>Healthy lifestyle activation</strong>
        </div>
      </div>
      <div className="habit-meter">
        <p>Sustainable Habit</p>
        <div>
          <span style={{ width: '78%' }} />
        </div>
      </div>
    </div>
  );
};

export const SchoolHeroVisual = () => {
  return (
    <div className="liquid-hero-visual school-hero-visual" aria-label="Ilustrasi insight wellness siswa">
      <div className="glass-sheen" />
      <div className="student-board">
        <div className="student-board-head">
          <SchoolRoundedIcon aria-hidden="true" />
          <div>
            <span>Student Wellness Insight</span>
            <strong>Healthy Habit Report</strong>
          </div>
        </div>
        <div className="student-metrics">
          <div>
            <span>Pola Makan</span>
            <strong>74%</strong>
          </div>
          <div>
            <span>Aktivitas</span>
            <strong>68%</strong>
          </div>
          <div>
            <span>Tidur</span>
            <strong>81%</strong>
          </div>
          <div>
            <span>Air Minum</span>
            <strong>76%</strong>
          </div>
        </div>
      </div>
      <div className="parent-note">
        <TaskAltRoundedIcon aria-hidden="true" />
        <span>Parent & teacher wellness talk</span>
      </div>
    </div>
  );
};

export const ContactHeroVisual = () => {
  return (
    <div className="liquid-hero-visual contact-hero-visual" aria-label="Ilustrasi kanal kontak KitoGizi">
      <div className="glass-sheen" />
      <div className="hero-visual-top">
        <div className="visual-brand">
          <img src={brandAssets.logo} alt="" />
          <span>Contact Desk</span>
        </div>
        <span className="visual-live">Fast Response</span>
      </div>

      <div className="contact-orbit-card primary">
        <WhatsAppIcon aria-hidden="true" />
        <div>
          <span>WhatsApp Priority</span>
          <strong>Konsultasi program</strong>
        </div>
      </div>

      <div className="contact-orbit-card secondary">
        <AlternateEmailRoundedIcon aria-hidden="true" />
        <div>
          <span>Email Brief</span>
          <strong>Proposal & kebutuhan</strong>
        </div>
      </div>

      <div className="contact-brief-panel">
        <p>Brief yang membantu kami memahami kebutuhan Anda</p>
        <div>
          <span>Jenis program</span>
          <strong>Corporate / School / Wellness</strong>
        </div>
        <div>
          <span>Jumlah peserta</span>
          <strong>Karyawan, siswa, komunitas</strong>
        </div>
        <div>
          <span>Tujuan utama</span>
          <strong>Awareness, intervensi, monitoring</strong>
        </div>
      </div>
    </div>
  );
};
