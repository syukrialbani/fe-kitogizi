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
  { value: '5+', label: 'Kolaborasi', description: 'Program kesehatan dan wellness' },
];

export const homeProblems = [
  'Edukasi tidak berlanjut menjadi kebiasaan',
  'Program berjalan tanpa target yang jelas',
  'Risiko kesehatan tidak terkelola sejak dini',
  'Perubahan sulit dipertahankan dalam jangka panjang',
];

export const processSteps = [
  {
    title: 'Assessment',
    description: 'Analisis data kesehatan karyawan (MCU & lifestyle)',
  },
  {
    title: 'Strategy Design',
    description: 'Menentukan prioritas dan program intervensi',
  },
  {
    title: 'Implementation',
    description: 'Pelaksanaan program edukasi & intervensi',
  },
  {
    title: 'Monitoring & Evaluation',
    description: 'Monitoring berkala untuk membantu melihat perkembangan dan efektivitas program.',
  },
];

export const dataToProgramPoints = [
  'Analisis data kesehatan',
  'Penentuan prioritas intervensi',
  'Program berbasis risiko',
  'Monitoring berkelanjutan',
];

export const homeServices = [
  {
    title: 'Corporate Wellness Program (highlight)',
    description:
      'Program kesehatan berbasis data untuk membantu perusahaan membangun budaya kerja yang lebih sehat, produktif, dan berkelanjutan dan mengelola risiko kesehatan karyawan.',
    cta: 'Lihat Layanan',
    href: '/corporate-wellness',
  },
  {
    title: 'Wellness Experience',
    description:
      'Pendampingan, konsultasi gizi & wellness, workshop, dan wellness session yang dirancang untuk individu, keluarga, komunitas, private group, maupun berbagai bentuk kolaborasi healthy lifestyle.',
    cta: 'Lihat Layanan',
    href: '/wellness-experience',
  },
  {
    title: 'School Wellness Program (opsional)',
    description:
      'Program edukasi gizi dan wellness untuk membantu sekolah membangun kebiasaan hidup sehat sejak dini melalui pendekatan yang interaktif, edukatif, dan berkelanjutan.',
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
    href: '/corporate-wellness#awareness-program',
  },
  {
    label: 'Premium',
    title: 'Targeted Intervention',
    description: 'Program intervensi berdasarkan kebutuhan karyawan.',
    href: '/corporate-wellness#targeted-intervention',
  },
  {
    label: 'Recommended',
    title: 'Annual — Strategic Health Partnership',
    description: 'Pendampingan jangka panjang berbasis data.',
    href: '/corporate-wellness#annual-strategic-health-partnership',
    recommended: true,
  },
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
  {
    label: 'Nutrition & Wellness Consultation',
    href: '/wellness-experience#nutrition-wellness-consultation',
  },
  {
    label: 'Wellness Journey Program',
    href: '/wellness-experience#wellness-journey-program',
  },
  {
    label: 'Wellness Session & Workshop',
    href: '/wellness-experience#wellness-session-workshop',
  },
  {
    label: 'Brand Collaboration',
    href: '/wellness-experience#brand-collaboration',
  },
];

export const programDocumentations = [
  {
    title: 'Konsultasi & pendampingan peserta',
    description: 'Dokumentasi sesi konsultasi individu maupun kelompok dalam program wellness.',
    tag: 'Konsultasi',
  },
  {
    title: 'Seminar dan health talk',
    description: 'Dokumentasi edukasi kesehatan, nutrition talk, dan sesi awareness untuk peserta.',
    tag: 'Seminar',
  },
  {
    title: 'Workshop interaktif',
    description: 'Dokumentasi aktivitas workshop, challenge, dan campaign yang melibatkan peserta.',
    tag: 'Workshop',
  },
  {
    title: 'Healthy lifestyle challenge',
    description: 'Dokumentasi aktivitas kebiasaan sehat yang dibuat ringan, konsisten, dan dekat dengan rutinitas peserta.',
    tag: 'Challenge',
  },
  {
    title: 'Kolaborasi program komunitas',
    description: 'Dokumentasi sesi kolaborasi bersama komunitas, institusi, dan tim untuk membangun budaya sehat.',
    tag: 'Kolaborasi',
  },
];

export const wellnessExperienceDocumentations = [
  {
    title: 'Sesi konsultasi pola makan personal',
    description:
      'Cuplikan diskusi kebutuhan peserta, review kebiasaan harian, dan rekomendasi yang lebih mudah dijalankan.',
    tag: 'Konsultasi',
  },
  {
    title: 'Wellness journey dan habit check-in',
    description:
      'Dokumentasi pendampingan bertahap, support group, serta monitoring progres peserta selama program berjalan.',
    tag: 'Journey',
  },
  {
    title: 'Praktik healthy plate dan cooking demo',
    description:
      'Momen peserta belajar menyusun pilihan makan sehat melalui demo, aktivitas, dan praktik yang interaktif.',
    tag: 'Praktik',
  },
  {
    title: 'Workshop komunitas dan private group',
    description:
      'Aktivasi wellness untuk komunitas, sekolah, perusahaan, atau private group dengan tema yang disesuaikan.',
    tag: 'Workshop',
  },
  {
    title: 'Kolaborasi brand healthy lifestyle',
    description:
      'Dokumentasi sesi bersama brand, studio, dan komunitas untuk campaign hidup sehat yang relevan.',
    tag: 'Kolaborasi',
  },
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
  program: 'Annual - Strategic Health Partnership',
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
        'Penurunan risiko kesehatan paling signifikan pada kategori Sindrom Metabolik sebesar 65%',
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
  resultPeriods: [
    {
      period: 'Periode 2023-2024',
      metrics: [
        {
          title: 'Employee Engagement Survey',
          description: 'Meningkat dari',
          value: '80 -> 94',
        },
        {
          title: 'Penurunan Risiko Kesehatan',
          description: 'Paling signifikan pada kategori Sindrom Metabolik',
          value: '↓ 65%',
        },
        {
          title: 'Peserta Mengalami Perbaikan Kesehatan',
          description: '',
          value: '95%',
        },
        {
          title: 'Peningkatan Kesadaran Karyawan',
          description: 'Terhadap pola makan sehat dan pola hidup sehat',
          value: '90%',
        },
      ],
    },
    {
      period: 'Periode 2024-2025',
      metrics: [
        {
          title: 'Peserta Mengalami Perbaikan Kesehatan',
          description: '',
          value: '95%',
        },
        {
          title: 'Health Age',
          description: 'Naik 9% dari target sebelumnya dalam evaluasi lanjutan',
          value: '↑ 9%',
        },
        {
          title: 'Peningkatan Kesadaran Karyawan',
          description: 'Terhadap pola makan sehat dan pola hidup sehat',
          value: '92%',
        },
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
  'Jumlah karyawan atau peserta program',
  'Durasi dan frekuensi pendampingan',
  'Tingkat intervensi serta kebutuhan reporting',
];

export const wellnessConsultation = [
  'Weight management',
  'Healthy lifestyle habit',
  'Family wellness',
  'Healthy relationship with food',
  'Personalized nutrition guidance',
  'Sleep & daily routine awareness',
];

export const wellnessWorkshopTopics = [
  'Group support',
  'Habit monitoring',
  'Wellness check-in',
  'Interactive sharing session',
];

export const wellnessSessionTopics = [
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
  'Interactive discussion',
  'Sustainable approach',
  'Simple monitoring',
];

export const wellnessFit = [
  'Healthy habit building',
  'Weight management journey',
  'Accountability support',
  'Sustainable lifestyle',
];

export const wellnessSession = [
  'Community gathering',
  'Women community',
  'Brand collaboration',
  'School session',
  'Wellness activation',
  'Private healthy lifestyle session',
];

export const wellnessPackages = [
  {
    id: 'nutrition-wellness-consultation',
    tier: 'Personal',
    title: 'Nutrition & Wellness Consultation',
    description:
      'Pendampingan personal maupun keluarga untuk membantu membangun pola hidup sehat yang lebih realistis dan berkelanjutan.',
    deliverables: wellnessGains,
    fit: 'Cocok untuk weight management, family wellness, healthy relationship with food, personalized nutrition guidance, serta awareness rutinitas harian.',
  },
  {
    id: 'wellness-journey-program',
    tier: 'Journey',
    title: 'Wellness Journey Program',
    description:
      'Program pendampingan 1-3 bulan dengan support group untuk membantu membangun kebiasaan sehat secara lebih konsisten.',
    deliverables: wellnessWorkshopTopics,
    fit: 'Cocok untuk healthy habit building, weight management journey, accountability support, dan sustainable lifestyle.',
    recommended: true,
  },
  {
    id: 'wellness-session-workshop',
    tier: 'Session',
    title: 'Wellness Session & Workshop',
    description:
      'Seminar, workshop, dan sesi edukasi interaktif yang dirancang untuk komunitas, perusahaan, sekolah, maupun private group.',
    deliverables: wellnessSessionTopics,
    fit: 'Cocok untuk community gathering, women community, brand collaboration, school session, wellness activation, dan private healthy lifestyle session.',
  },
  {
    id: 'brand-collaboration',
    tier: 'Collaboration',
    title: 'Brand Collaboration',
    description:
      'Kitogizi terbuka untuk kolaborasi bersama komunitas, brand, studio wellness, sekolah, maupun berbagai program healthy lifestyle dan edukasi kesehatan.',
    deliverables: wellnessCollaboration,
    fit: 'Kami percaya bahwa wellness dapat dibangun melalui pengalaman yang lebih interaktif, relevan, dan dekat dengan kehidupan sehari-hari.',
  },
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
    role: 'Perusahaan Partner Kitogizi',
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
