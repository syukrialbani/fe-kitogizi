export const contact = {
  brandName: 'KitoGizi',
  legalName: 'PT Kitojum Sehat Bersama',
  email: 'kitogizi@gmail.com',
  phoneDisplay: '+62 812-0000-0000',
  whatsappNumber: '6281200000000',
  location: 'Karawang, Indonesia',
};

export const whatsappMessage =
  'Halo KitoGizi, saya ingin diskusi kebutuhan program wellness untuk perusahaan/institusi kami.';

export const createWhatsappHref = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const whatsappHref = createWhatsappHref(whatsappMessage);

export const corporateWhatsappHref = createWhatsappHref(
  'Halo KitoGizi, saya ingin konsultasi terkait program Corporate Wellness. Perusahaan kami sudah memiliki hasil MCU dan ingin mendiskusikan tindak lanjutnya.',
);

export const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Corporate Wellness', href: '/corporate-wellness' },
  { label: 'Wellness Experience', href: '/wellness-experience' },
  { label: 'School Wellness', href: '/school-wellness' },
  { label: 'Case Study', href: '/case-study' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Kontak', href: '/kontak' },
];
