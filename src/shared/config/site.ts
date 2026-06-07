export const contact = {
  brandName: 'Kitogizi',
  legalName: 'PT Kitojum Sehat Bersama',
  email: 'hello.kitogizi@gmail.com',
  phoneDisplay: '0821-2244-5687',
  whatsappNumber: '6282122445687',
  location:
    'Berbasis di Karawang dan melayani area Cikarang & Jabodetabek untuk berbagai program wellness secara onsite maupun online.',
};

export const whatsappMessage =
  'Halo Kitogizi, saya ingin diskusi kebutuhan program wellness untuk perusahaan/institusi kami.';

export const createWhatsappHref = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const whatsappHref = createWhatsappHref(whatsappMessage);

export const corporateWhatsappHref = createWhatsappHref(
  'Halo Kitogizi, saya ingin konsultasi terkait program Corporate Wellness. Perusahaan kami sudah memiliki hasil MCU dan ingin mendiskusikan tindak lanjutnya.',
);

export const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Corporate Wellness', href: '/corporate-wellness' },
  { label: 'Wellness Experience', href: '/wellness-experience' },
  { label: 'School Wellness', href: '/school-wellness' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Kontak', href: '/kontak' },
];
