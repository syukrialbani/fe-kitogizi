import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import FamilyRestroomRoundedIcon from '@mui/icons-material/FamilyRestroomRounded';
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import SelfImprovementRoundedIcon from '@mui/icons-material/SelfImprovementRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import contactConsultationImage from '../../../assets/contact-consultation.jpg';
import corporateWorkshopImage from '../../../assets/corporate-workshop.jpg';
import healthInsightImage from '../../../assets/health-insight-laptop.jpg';
import schoolImage from '../../../assets/school-wellness-hero.jpg';
import wellnessYogaImage from '../../../assets/wellness-yoga-group.jpg';
import { brandAssets } from '../../../shared/data/siteContent';

export const HomeHeroVisual = () => {
  return (
    <div className="home-dashboard-visual" aria-label="Foto dashboard insight kesehatan KitoGizi">
      <img className="home-dashboard-image" src={healthInsightImage} alt="" />
      <div className="home-dashboard-overlay">
        <div className="visual-brand">
          <img src={brandAssets.logo} alt="" />
          <span>KitoGizi Insight</span>
        </div>
        <span className="visual-live">Live program</span>
        <strong>Dari hasil MCU ke aksi wellness yang bisa diukur.</strong>
        <div className="home-dashboard-stats">
          <div>
            <TaskAltRoundedIcon aria-hidden="true" />
            <span>Assessment</span>
          </div>
          <div>
            <Diversity3RoundedIcon aria-hidden="true" />
            <span>Risk Priority</span>
          </div>
          <div>
            <TaskAltRoundedIcon aria-hidden="true" />
            <span>Intervention</span>
          </div>
        </div>
      </div>
      <div className="home-dashboard-badge home-dashboard-badge-top">
        <strong>95%</strong>
        <span>Peserta membaik</span>
      </div>
      <div className="home-dashboard-badge home-dashboard-badge-bottom">
        <strong>2000+</strong>
        <span>Sesi konsultasi</span>
      </div>
    </div>
  );
};

export const CorporateHeroVisual = () => {
  return (
    <div className="corporate-hero-visual" aria-label="Foto program corporate wellness">
      <div className="corporate-photo-frame">
        <img className="corporate-main-photo" src={corporateWorkshopImage} alt="" />
        <div className="corporate-photo-gradient" />
        <div className="corporate-photo-badge">
          <img src={brandAssets.logo} alt="" />
          <div>
            <span>Corporate Wellness</span>
          </div>
        </div>
        {/* <div className="corporate-photo-stat">
          <span>Program Impact</span>
          <strong>95%</strong>
          <p>Peserta mengalami perbaikan kesehatan.</p>
        </div> */}
      </div>
      {/* <div className="corporate-dashboard-card">
        <div className="corporate-dashboard-photo">
          <img src={healthInsightImage} alt="" />
        </div>
        <div className="corporate-dashboard-body">
          <span>Insight board</span>
          <strong>Data MCU dibaca menjadi prioritas risiko dan rencana intervensi.</strong>
          <div className="corporate-dashboard-metrics">
            <div>
              <MonitorHeartRoundedIcon aria-hidden="true" />
              <p>Assessment</p>
            </div>
            <div>
              <AnalyticsRoundedIcon aria-hidden="true" />
              <p>Risk Mapping</p>
            </div>
            <div>
              <HealthAndSafetyRoundedIcon aria-hidden="true" />
              <p>Intervention</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export const WellnessHeroVisual = () => {
  return (
    <div className="wellness-photo-visual" aria-label="Foto wellness experience KitoGizi">
      <img className="wellness-photo-image" src={wellnessYogaImage} alt="" />
      <div className="wellness-photo-gradient" />
      <div className="wellness-photo-top">
        <div className="visual-brand">
          <img src={brandAssets.logo} alt="" />
          <span>Wellness Experience</span>
        </div>
        <span className="visual-live">Lifestyle</span>
      </div>
      <div className="wellness-photo-card">
        <span>Popular Journey</span>
        <strong>1-3 bulan pendampingan dengan habit check-in dan support group.</strong>
        <div className="wellness-photo-actions">
          <div>
            <RestaurantRoundedIcon aria-hidden="true" />
            <small>Consult</small>
          </div>
          <div>
            <SelfImprovementRoundedIcon aria-hidden="true" />
            <small>Habit</small>
          </div>
          <div>
            <LocalActivityRoundedIcon aria-hidden="true" />
            <small>Workshop</small>
          </div>
        </div>
      </div>
      <div className="wellness-photo-badge wellness-photo-badge-top">
        <Diversity3RoundedIcon aria-hidden="true" />
        <span>Community ready</span>
      </div>
      <div className="wellness-photo-badge wellness-photo-badge-bottom">
        <SpaRoundedIcon aria-hidden="true" />
        <span>Evidence-based</span>
      </div>
    </div>
  );
};

export const SchoolHeroVisual = () => {
  return (
    <div className="school-photo-visual" aria-label="Foto edukasi nutrisi interaktif untuk sekolah">
      <img className="school-photo-image" src={schoolImage} alt="" />
      <div className="school-photo-gradient" />
      <div className="school-photo-top">
        <div className="visual-brand">
          <img src={brandAssets.logo} alt="" />
          <span>School Wellness</span>
        </div>
        <span className="visual-live">Interactive class</span>
      </div>
      <div className="school-photo-card">
        <span>Healthy Habit Session</span>
        <strong>Belajar pola makan sehat lewat aktivitas yang dekat dengan rutinitas siswa.</strong>
        <div className="school-photo-actions">
          <div>
            <MenuBookRoundedIcon aria-hidden="true" />
            <small>Learn</small>
          </div>
          <div>
            <LunchDiningRoundedIcon aria-hidden="true" />
            <small>Practice</small>
          </div>
          <div>
            <FamilyRestroomRoundedIcon aria-hidden="true" />
            <small>Home Habit</small>
          </div>
        </div>
      </div>
      <div className="school-photo-badge school-photo-badge-top">
        <LunchDiningRoundedIcon aria-hidden="true" />
        <span>Age-friendly activity</span>
      </div>
      <div className="school-photo-badge school-photo-badge-bottom">
        <FamilyRestroomRoundedIcon aria-hidden="true" />
        <span>Parent supported</span>
      </div>
    </div>
  );
};

export const ContactHeroVisual = () => {
  return (
    <div className="contact-photo-visual" aria-label="Foto diskusi program wellness KitoGizi">
      <img className="contact-photo-image" src={contactConsultationImage} alt="" />
      <div className="contact-photo-gradient" />
      <div className="contact-photo-top">
        <div className="visual-brand">
          <img src={brandAssets.logo} alt="" />
          <span>Contact Desk</span>
        </div>
        <span className="visual-live">Fast response</span>
      </div>
      <div className="contact-photo-card">
        <span>Start with a short brief</span>
        <strong>Ceritakan konteks peserta, tujuan, dan format acara. Kami bantu susun opsi programnya.</strong>
        <div className="contact-photo-actions">
          <div>
            <WhatsAppIcon aria-hidden="true" />
            <small>WhatsApp</small>
          </div>
          <div>
            <AlternateEmailRoundedIcon aria-hidden="true" />
            <small>Email brief</small>
          </div>
          <div>
            <Diversity3RoundedIcon aria-hidden="true" />
            <small>Program fit</small>
          </div>
        </div>
      </div>
      <div className="contact-photo-badge contact-photo-badge-top">
        <WhatsAppIcon aria-hidden="true" />
        <span>Priority WhatsApp</span>
      </div>
      <div className="contact-photo-badge contact-photo-badge-bottom">
        <AlternateEmailRoundedIcon aria-hidden="true" />
        <span>Proposal-ready brief</span>
      </div>
    </div>
  );
};
