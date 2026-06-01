import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { contact, whatsappHref } from '../../../shared/config/site';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { FinalCTA } from '../../../shared/ui/final-cta/FinalCTA';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';
import { ContactHeroVisual } from '../../../widgets/hero-visuals';

const serviceOptions = [
  'Corporate Wellness',
  'Wellness Experience',
  'School Wellness',
  'General Inquiry',
];

const initialForm = {
  name: '',
  organization: '',
  service: serviceOptions[0],
  message: '',
};

const contactChannels = [
  {
    title: 'WhatsApp Priority',
    description: 'Untuk diskusi cepat, cek kebutuhan, dan mulai rekomendasi format program.',
    value: contact.phoneDisplay,
    href: whatsappHref,
    icon: WhatsAppIcon,
  },
  {
    title: 'Email Brief',
    description: 'Untuk mengirim konteks program, proposal, atau detail kebutuhan institusi.',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: AlternateEmailRoundedIcon,
  },
];

const quickBriefs = [
  { label: 'Corporate', icon: BusinessCenterRoundedIcon },
  { label: 'School', icon: SchoolRoundedIcon },
  { label: 'Wellness', icon: SpaRoundedIcon },
  { label: 'Community', icon: Diversity3RoundedIcon },
];

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
        title="Mulai diskusi program wellness dengan brief yang singkat dan jelas."
        description="Sampaikan konteks perusahaan, sekolah, komunitas, atau event Anda. Tim KitoGizi akan membantu membaca kebutuhan dan merekomendasikan format program yang paling sesuai."
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

      <section className="section contact-brief-section">
        <div className="container contact-grid contact-brief-layout">
          <div className="contact-channel-column">
            <SectionHeader
              eyebrow="Kontak"
              title="Pilih kanal paling nyaman, lalu ceritakan konteksnya."
              description="WhatsApp cocok untuk mulai cepat. Email bisa digunakan jika Anda sudah punya brief, deck, atau detail kebutuhan program."
            />
            <div className="contact-card-stack contact-channel-list">
              {contactChannels.map((channel, index) => {
                const Icon = channel.icon;
                const value = channel.href ? (
                  <a href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {channel.value}
                  </a>
                ) : (
                  <p>{channel.value}</p>
                );

                return (
                  <article className="contact-channel-card" key={channel.title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{channel.title}</h3>
                      <p>{channel.description}</p>
                      {value}
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="contact-response-path">
              <strong>Brief yang membantu kami merespons lebih tepat:</strong>
              <div>
                <span>Jenis program</span>
                <span>Jumlah peserta</span>
                <span>Tujuan utama</span>
              </div>
            </div>
          </div>

          <form className="contact-form contact-brief-form" onSubmit={handleSubmit}>
            <div className="contact-form-head">
              <div>
                <span>Brief Cepat</span>
                <strong>Kirim konteks awal ke WhatsApp</strong>
              </div>
              <AssignmentTurnedInRoundedIcon aria-hidden="true" />
            </div>
            <div className="contact-quick-briefs" aria-label="Jenis kebutuhan program">
              {quickBriefs.map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.label}>
                    <Icon aria-hidden="true" />
                    {item.label}
                  </span>
                );
              })}
            </div>
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
