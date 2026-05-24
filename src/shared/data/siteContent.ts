import ajinomotoLogo from '../../assets/ajinomoto.png';
import heroLayerImage from '../../assets/hero.png';
import heroCardImage from '../../assets/heroCard.png';
import kitogiziLogo from '../../assets/Logo.png';
import presidentUniversityLogo from '../../assets/presidentUniversity.png';
import temanIbuLogo from '../../assets/teman-ibu-logo.png';
import unsikaLogo from '../../assets/unsika.png';
import welcomeImage from '../../assets/Welcome.png';

export const brandAssets = {
  logo: kitogiziLogo,
  welcome: welcomeImage,
  heroCard: heroCardImage,
  heroLayer: heroLayerImage,
};

export const partnerLogos = [
  { name: 'Ajinomoto Indonesia', image: ajinomotoLogo },
  { name: 'President University', image: presidentUniversityLogo },
  { name: 'Universitas Singaperbangsa Karawang', image: unsikaLogo },
  { name: 'Teman Ibu', image: temanIbuLogo },
];

export const impactStats = [
  { value: '3+', label: 'Tahun', description: 'Program berjalan berkelanjutan' },
  { value: '2000+', label: 'Sesi konsultasi', description: 'Pendampingan dan edukasi peserta' },
  { value: '80+', label: 'Karyawan', description: 'Dalam satu program' },
  { value: '95%', label: 'Peserta', description: 'Mengalami perbaikan' },
  { value: '3+', label: 'Kolaborasi', description: 'Program kesehatan dan wellness' },
];

export const homeProblems = [
  'MCU hanya menjadi laporan',
  'Tidak ada tindak lanjut program',
  'Risiko kesehatan karyawan tetap tinggi',
  'Program kesehatan tidak terarah',
];

export const processSteps = [
  {
    title: 'Assessment',
    description: 'Analisis data kesehatan karyawan, termasuk MCU dan lifestyle.',
  },
  {
    title: 'Strategy Design',
    description: 'Menentukan prioritas dan program intervensi.',
  },
  {
    title: 'Implementation',
    description: 'Pelaksanaan program edukasi dan intervensi.',
  },
  {
    title: 'Monitoring & Evaluation',
    description: 'Evaluasi berkala untuk memastikan hasil.',
  },
];

export const dataToProgramPoints = [
  'Analisis data kesehatan karyawan, termasuk hasil MCU',
  'Identifikasi risiko utama',
  'Perancangan program intervensi berbasis kebutuhan',
  'Monitoring dan evaluasi berkala',
];

export const homeServices = [
  {
    title: 'Corporate Wellness Program',
    description:
      'Program kesehatan berbasis data untuk meningkatkan produktivitas dan membantu perusahaan mengelola risiko kesehatan karyawan.',
    cta: 'Lihat Layanan',
    href: '/corporate-wellness',
  },
  {
    title: 'Nutrition Consultation',
    description:
      'Pendampingan individu dan kelompok untuk membantu mencapai tujuan kesehatan secara lebih terarah dan berkelanjutan.',
    cta: 'Lihat Layanan',
    href: '/wellness-experience',
  },
  {
    title: 'Wellness Workshop & Education',
    description:
      'Seminar, workshop, dan sesi edukasi interaktif untuk perusahaan, komunitas, sekolah, maupun grup privat.',
    cta: 'Lihat Layanan',
    href: '/wellness-experience',
  },
  {
    title: 'School Wellness Program',
    description:
      'Program edukasi gizi dan wellness untuk membangun kebiasaan sehat sejak dini.',
    cta: 'Lihat Layanan',
    href: '/school-wellness',
  },
];

export const targetSegments = [
  {
    title: 'Industri & Manufaktur',
    description:
      'Mendukung pengelolaan risiko kesehatan karyawan serta pemenuhan standar kesehatan kerja.',
    points: ['Pengelolaan risiko kesehatan', 'Dukungan program K3', 'Persiapan kebutuhan sertifikasi'],
  },
  {
    title: 'Perkantoran',
    description:
      'Meningkatkan produktivitas dan kesejahteraan karyawan melalui program kesehatan yang terarah.',
    points: ['Employee wellbeing', 'Peningkatan produktivitas', 'Program kesehatan berbasis data'],
  },
  {
    title: 'Sekolah',
    description: 'Edukasi gizi dan wellness untuk membangun kebiasaan sehat sejak dini.',
    points: ['Edukasi pola makan sejak dini', 'Keterlibatan orang tua dan guru', 'Kebiasaan sehat siswa'],
  },
  {
    title: 'Komunitas & Brand',
    description: 'Aktivasi healthy lifestyle yang lebih interaktif dan dekat dengan audiens.',
    points: ['Wellness campaign', 'Brand activation', 'Healthy lifestyle event'],
  },
];

export const homeCorporatePrograms = [
  {
    label: 'Basic',
    title: 'Awareness Program',
    description: 'Edukasi untuk meningkatkan kesadaran kesehatan karyawan.',
  },
  {
    label: 'Premium',
    title: 'Targeted Intervention',
    description: 'Program intervensi berdasarkan kebutuhan karyawan.',
  },
  {
    label: 'Recommended',
    title: 'Annual — Strategic Health Partnership',
    description: 'Pendampingan jangka panjang berbasis data.',
    recommended: true,
  },
];

export const mcuFollowUpPoints = [
  'Analisis data',
  'Penentuan prioritas',
  'Program intervensi',
  'Monitoring',
];

export const mcuMaximizePoints = [
  'Analisis data kesehatan',
  'Penentuan prioritas intervensi',
  'Program berbasis risiko',
  'Monitoring berkelanjutan',
];

export const beliefPoints = [
  'Berbasis evidence, ilmiah, dan aplikatif',
  'Dipandu langsung oleh ahli gizi profesional',
  'Disesuaikan dengan kebutuhan individu dan perusahaan',
  'Fokus pada perubahan jangka panjang, bukan solusi instan',
  'Fokus pada hasil yang terukur',
  'Mendukung kebutuhan kesehatan kerja dan wellbeing',
];

export const homeWellnessExperience = [
  'Wellness Session & Workshop',
  'Community & Brand Collaboration',
  'Nutrition Consultation',
  'Private / Group Wellness Session',
];

export const corporatePackages = [
  {
    tier: 'Basic',
    title: 'Health Awareness Program',
    description: 'Meningkatkan kesadaran karyawan terhadap kesehatan dan pola hidup sehat.',
    deliverables: [
      '1x seminar / health talk',
      'Materi edukasi, seperti slide dan e-poster',
      'Q&A session',
      'Evaluasi sederhana, seperti pre-post awareness',
    ],
    fit: 'Cocok untuk langkah awal atau program edukasi dasar.',
  },
  {
    tier: 'Premium',
    title: 'Targeted Intervention Program',
    description: 'Mendorong perubahan perilaku berdasarkan kebutuhan karyawan.',
    deliverables: [
      '2-3x seminar / workshop',
      'Mini assessment pola makan dan gaya hidup',
      'Group coaching session',
      'Edukasi berkala, seperti poster atau konten',
      'Program challenge opsional',
      'Insight report dan rekomendasi',
    ],
    fit: 'Cocok untuk perusahaan yang ingin mulai menjalankan intervensi nyata.',
  },
  {
    tier: 'Annual',
    title: 'Strategic Health Partnership',
    description: 'Membangun sistem kesehatan karyawan yang berkelanjutan.',
    deliverables: [
      'Perancangan strategi kesehatan perusahaan',
      'Analisis data MCU secara aggregated',
      'Program intervensi berbasis risiko',
      'Edukasi rutin bulanan',
      'Konsultasi individu dengan kuota tertentu',
      'Campaign kesehatan dengan tema bulanan',
      'Monitoring dan evaluasi berkala',
      'Laporan berkala berisi insight dan rekomendasi strategis',
    ],
    fit: 'Cocok untuk perusahaan yang ingin menciptakan dampak jangka panjang.',
    recommended: true,
  },
];

export const corporateProblems = [
  'Tidak ada strategi tindak lanjut yang jelas',
  'Data kesehatan tidak dimanfaatkan secara optimal',
  'Program kesehatan berjalan tanpa arah',
  'Risiko kesehatan karyawan tetap tinggi',
];

export const corporateAudience = [
  {
    title: 'Industri & Manufaktur',
    points: ['Pengelolaan risiko kesehatan', 'Dukungan program K3', 'Persiapan kebutuhan sertifikasi'],
  },
  {
    title: 'Perusahaan & Perkantoran',
    points: ['Employee wellbeing', 'Peningkatan produktivitas', 'Program kesehatan berbasis data'],
  },
];

export const caseStudy = {
  title: '3 Tahun Berkolaborasi, Kesehatan Karyawan Terus Meningkat',
  subtitle:
    'Kolaborasi berkelanjutan untuk membangun budaya sehat dan meningkatkan kualitas hidup karyawan.',
  client: 'Salah satu perusahaan di industri makanan.',
  cooperation: 'Lebih dari 3 tahun berturut-turut hingga sekarang.',
  program: 'Annual — Strategic Health Partnership',
  programNote: 'Program kesehatan karyawan berlangganan.',
  mainGoal:
    'Meningkatkan kesehatan karyawan secara berkelanjutan dan mendukung produktivitas perusahaan.',
  quote: 'Program ini terus berlanjut sebagai bagian dari strategi kesehatan perusahaan.',
  approach: [
    {
      title: 'Edukasi Gizi',
      description:
        'Meningkatkan pengetahuan dan kesadaran karyawan tentang pola makan dan gaya hidup sehat.',
    },
    {
      title: 'Intervensi Personalized',
      description:
        'Program intervensi berbasis kebutuhan karyawan secara personalized untuk hasil yang lebih optimal.',
    },
    {
      title: 'Monitoring Berkala',
      description:
        'Evaluasi rutin dan pendampingan berkelanjutan untuk memastikan dampak program terukur.',
    },
  ],
  periodResults: [
    {
      period: 'Periode 2023-2024',
      points: [
        'Employee Engagement Survey meningkat dari 80 menjadi 94',
        'Penurunan risiko kesehatan paling signifikan pada kategori sindrom metabolik sebesar 65%',
        'Peserta mengalami perbaikan kesehatan sebesar 95%',
        'Peningkatan kesadaran karyawan terhadap pola makan sehat dan pola hidup sehat sebesar 90%',
      ],
    },
    {
      period: 'Periode 2024-2025',
      points: [
        'Peserta mengalami perbaikan kesehatan sebesar 95%',
        'Health Age naik 9% dari target sebelumnya dalam evaluasi lanjutan',
        'Peningkatan kesadaran karyawan terhadap pola makan sehat dan pola hidup sehat sebesar 92%',
      ],
    },
  ],
  impact: [
    { value: '3+', label: 'tahun kerja sama' },
    { value: '94', label: 'engagement survey' },
    { value: '65%', label: 'penurunan risiko sindrom metabolik' },
    { value: '95%', label: 'perbaikan kesehatan peserta' },
  ],
  sustainableImpact: [
    'Risiko kesehatan menurun',
    'Kualitas hidup meningkat',
    'Produktivitas meningkat',
    'Budaya sehat semakin kuat',
    'Program berlanjut secara berkelanjutan',
  ],
};

export const mcuOutcomePoints = [
  'Mengolah data MCU menjadi insight',
  'Mengidentifikasi risiko dominan',
  'Menentukan prioritas intervensi',
  'Mengubah laporan menjadi aksi nyata',
];

export const corporateAchievableResults = [
  'Mengurangi risiko kesehatan karyawan',
  'Meningkatkan produktivitas',
  'Mengoptimalkan hasil MCU',
  'Meningkatkan engagement karyawan',
  'Mendukung kebutuhan standar kesehatan kerja',
];

export const investmentFactors = [
  'Jumlah karyawan',
  'Durasi program',
  'Tingkat intervensi yang dibutuhkan',
];

export const wellnessConsultation = [
  'Weight management',
  'Healthy lifestyle habit',
  'Mindful eating',
  'Healthy relationship with food',
  'Personalized nutrition guidance',
  'Small group consultation',
];

export const wellnessWorkshopTopics = [
  'Healthy lifestyle',
  'Nutrition for productivity',
  'Mindful eating',
  'Healthy beauty from within',
  'Weight management',
  'Sustainable healthy habit',
  'Wellness for women',
];

export const wellnessCollaboration = [
  'Community event',
  'Wellness campaign',
  'Studio collaboration',
  'Brand activation',
  'Healthy lifestyle gathering',
  'Educational session',
];

export const wellnessGains = [
  'Personalized guidance',
  'Diskusi interaktif',
  'Pendekatan realistis dan berkelanjutan',
  'Monitoring dan evaluasi',
];

export const wellnessFit = [
  'Community gathering',
  'Women community',
  'Brand collaboration',
  'School session',
  'Wellness activation',
  'Private healthy lifestyle session',
];

export const wellnessAdvantages = [
  {
    title: 'Evidence-Based Approach',
    description: 'Materi disampaikan berdasarkan pendekatan ilmu gizi dan wellness yang relevan.',
  },
  {
    title: 'Relatable & Interactive',
    description: 'Penyampaian dibuat engaging, nyaman, dan mudah dipahami.',
  },
  {
    title: 'Sustainable Habit',
    description: 'Fokus pada perubahan kecil yang realistis dan dapat diterapkan secara konsisten.',
  },
  {
    title: 'Flexible & Personalized',
    description: 'Program dapat disesuaikan dengan kebutuhan audiens dan tujuan kegiatan.',
  },
];

export const schoolNeeds = [
  {
    title: 'Pola Makan & Gaya Hidup',
    description:
      'Kebiasaan makan dan pola hidup sehat berperan penting dalam tumbuh kembang dan aktivitas belajar siswa.',
  },
  {
    title: 'Fokus & Produktivitas Belajar',
    description:
      'Kondisi kesehatan yang baik membantu siswa lebih fokus, aktif, dan optimal dalam proses belajar.',
  },
  {
    title: 'Kolaborasi Sekolah & Orang Tua',
    description:
      'Perubahan kebiasaan lebih efektif saat sekolah dan orang tua berjalan bersama.',
  },
];

export const schoolPackages = [
  {
    tier: 'Basic',
    title: 'Nutrition Awareness Program',
    description: 'Edukasi awal yang interaktif dan mudah dipahami siswa.',
    deliverables: ['Seminar edukasi interaktif', 'Aktivitas sederhana dan engaging', 'Tema sesuai usia siswa'],
    fit: 'Cocok untuk aktivasi sekolah satu kali atau pembuka program.',
  },
  {
    tier: 'Premium',
    title: 'Healthy Habit Program',
    description: 'Program kebiasaan sehat dengan aktivitas dan keterlibatan orang tua.',
    deliverables: [
      'Workshop dan aktivitas interaktif',
      'Healthy challenge',
      'Parent education session',
      'Mini wellness insight report siswa',
    ],
    fit: 'Cocok untuk sekolah yang ingin membangun kebiasaan rutin.',
  },
  {
    tier: 'Partnership',
    title: 'School Wellness Partnership',
    description: 'Kemitraan program wellness sekolah yang berjalan berkala.',
    deliverables: [
      'School wellness campaign',
      'Edukasi berkala',
      'Parent & teacher wellness talk',
      'Student wellness monitoring',
      'Program dan evaluasi berkala',
    ],
    fit: 'Cocok untuk sekolah atau yayasan dengan target perubahan jangka panjang.',
    recommended: true,
  },
];

export const testimonials = [
  {
    quote:
      'Program ini membantu kami dalam mengelola kesehatan karyawan secara lebih terarah, khususnya dalam menindaklanjuti hasil Medical Check Up (MCU). Pendekatan yang dilakukan relevan dan dapat dijalankan secara berkelanjutan.',
    name: 'PIC Program / HR',
    role: 'Perusahaan Partner KitoGizi',
  },
  {
    quote: 'Berat badan menurun dan tubuh terasa lebih ringan serta bugar untuk beraktivitas.',
    name: 'Peserta Program',
    role: 'Anonim',
  },
  {
    quote: 'Gula darah dan parameter kesehatan mulai membaik dan lebih terkontrol.',
    name: 'Peserta Program',
    role: 'Anonim',
  },
  {
    quote: 'Program ini membantu saya mengontrol pola makan dan lebih sadar dalam memilih makanan.',
    name: 'Peserta Program',
    role: 'Anonim',
  },
  {
    quote: 'Dengan tubuh yang lebih sehat, saya bisa bekerja lebih optimal dan produktif.',
    name: 'Peserta Program',
    role: 'Anonim',
  },
];

export const aboutPrinciples = [
  'Evidence-based',
  'Relatable dan mudah diterapkan',
  'Didampingi ahli gizi profesional',
  'Fokus pada perubahan jangka panjang',
  'Program disesuaikan dengan kebutuhan klien',
];
