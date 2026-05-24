import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { contact, whatsappHref } from '../../../shared/config/site';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { FinalCTA } from '../../../shared/ui/final-cta/FinalCTA';
import { GlassCard } from '../../../shared/ui/glass-card/GlassCard';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';
import { ContactHeroVisual } from '../../../widgets/hero-visuals';

const serviceOptions = [
  'Corporate Wellness',
  'Wellness Experience',
  'School Wellness',
  'Case Study Discussion',
  'General Inquiry',
];

const initialForm = {
  name: '',
  organization: '',
  service: serviceOptions[0],
  message: '',
};

export const ContactPage = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      'Halo KitoGizi, saya ingin diskusi program.',
      `Nama: ${form.name || '-'}`,
      `Perusahaan/Institusi: ${form.organization || '-'}`,
      `Kebutuhan: ${form.service}`,
      `Catatan: ${form.message || '-'}`,
    ].join('\n');

    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <>
      <PageHero
        compact
        variant="contact"
        eyebrow="Hubungi Kami"
        title="Diskusikan kebutuhan program kesehatan Anda bersama KitoGizi"
        description="Sampaikan konteks perusahaan, sekolah, komunitas, atau event Anda. Tim KitoGizi akan membantu merekomendasikan format program yang paling sesuai."
        actions={
          <>
            <ActionLink href={whatsappHref} target="_blank" icon="whatsapp">
              Konsultasi via WhatsApp
            </ActionLink>
            <ActionLink href={`mailto:${contact.email}`} variant="secondary" icon="none">
              Email KitoGizi
            </ActionLink>
          </>
        }
        visual={<ContactHeroVisual />}
      />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionHeader
              eyebrow="Kontak"
              title="Pilih kanal yang paling mudah untuk Anda"
              description="CTA utama website diarahkan ke WhatsApp agar diskusi kebutuhan bisa dimulai lebih cepat."
            />
            <div className="contact-card-stack">
              <GlassCard className="contact-card">
                <WhatsAppIcon aria-hidden="true" />
                <div>
                  <h3>WhatsApp</h3>
                  <a href={whatsappHref} target="_blank" rel="noreferrer">{contact.phoneDisplay}</a>
                </div>
              </GlassCard>
              <GlassCard className="contact-card">
                <AlternateEmailRoundedIcon aria-hidden="true" />
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </GlassCard>
              <GlassCard className="contact-card">
                <LocationOnRoundedIcon aria-hidden="true" />
                <div>
                  <h3>Area Layanan</h3>
                  <p>{contact.location}</p>
                </div>
              </GlassCard>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Nama</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                autoComplete="name"
              />
            </div>
            <div className="form-row">
              <label htmlFor="organization">Perusahaan / Institusi</label>
              <input
                id="organization"
                name="organization"
                value={form.organization}
                onChange={handleChange}
                placeholder="Nama organisasi"
                autoComplete="organization"
              />
            </div>
            <div className="form-row">
              <label htmlFor="service">Kebutuhan</label>
              <select id="service" name="service" value={form.service} onChange={handleChange}>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="message">Catatan Singkat</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Ceritakan target peserta, jumlah karyawan/siswa, atau kebutuhan acara"
                rows={5}
              />
            </div>
            <button className="form-submit" type="submit">
              <span>Kirim ke WhatsApp</span>
              <SendRoundedIcon aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      <FinalCTA
        title="Butuh rekomendasi program yang cepat dan jelas?"
        description="Kirim brief singkat melalui form atau langsung hubungi WhatsApp KitoGizi."
        primaryLabel="Chat WhatsApp"
      />
    </>
  );
};

export default ContactPage;
