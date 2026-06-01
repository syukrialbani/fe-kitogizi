import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import { testimonials } from '../../../shared/data/siteContent';
import { GlassCard } from '../../../shared/ui/glass-card/GlassCard';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';

export const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Testimoni"
          title="Dipercaya oleh perusahaan, dirasakan oleh peserta"
          description="Dampak program terasa saat strategi perusahaan bertemu perubahan kebiasaan harian peserta."
        />
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <GlassCard key={`${item.name}-${item.role}-${index}`} className="testimonial-card">
              <FormatQuoteRoundedIcon aria-hidden="true" />
              <p>{item.quote}</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </GlassCard>
          ))}
        </div>
        <p className="testimonial-note">
          Testimoni peserta disarikan dari peserta program secara anonim.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
