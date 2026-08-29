export interface NutritionCheckInput {
  name: string;
  whatsappNumber: string;
  weightKg: number;
  heightCm: number;
  biggestChallenge: string;
  goal: string;
  consentAgreed: boolean;
  
  // Pola Makan
  veggiePortion: '3-4' | '1-2' | '0'; // 2, 1, 0
  fruitPortion: '2-3' | '1' | '0';    // 2, 1, 0
  waterIntake: '>=2L' | '1-2L' | '<1L'; // 2, 1, 0
  breakfastHabit: 'balanced' | 'simple' | 'none'; // 2, 1, 0
  sweetIntake: '<3' | '3-5' | 'daily'; // 2, 1, 0
  friedIntake: '<3' | '3-5' | 'daily'; // 2, 1, 0

  // Aktivitas Fisik
  physicalActivity: '>=3' | '1-2' | '0'; // 2, 1, 0

  // Tidur
  sleepDuration: '7-8' | '6-7' | '<6'; // 2, 1, 0

  // Manajemen Stres
  stressLevel: 'none' | 'moderate' | 'severe'; // 2, 1, 0
}

export interface DomainScore {
  domainKey: 'diet' | 'activity' | 'sleep' | 'stress';
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface NutritionCheckResult {
  id: string;
  createdAt: string; // ISO string timestamp
  input: NutritionCheckInput;
  
  bmi: number;
  bmiCategory: 'Kurus' | 'Normal' | 'Kelebihan berat badan' | 'Obesitas';
  bmiScore: number;
  
  dietScore: number;     // Max 14
  activityScore: number; // Max 2
  sleepScore: number;    // Max 2
  stressScore: number;   // Max 2
  
  totalScore: number;      // Max 20
  totalPercentage: number; // (totalScore / 20) * 100
  totalCategory: 'Sangat baik' | 'Baik' | 'Cukup' | 'Kurang';
  
  domainScores: DomainScore[];
  lowestDomains: string[]; // e.g. ["pola makan", "pola tidur"]
  
  narrative: string;
  ctaText: string;
  ctaMessage: string;
}

export const calculateNutritionCheck = (input: NutritionCheckInput): NutritionCheckResult => {
  // 1. Perhitungan IMT
  const heightM = input.heightCm / 100;
  const rawBmi = input.weightKg / (heightM * heightM);
  const bmi = Math.round(rawBmi * 10) / 10;

  let bmiCategory: 'Kurus' | 'Normal' | 'Kelebihan berat badan' | 'Obesitas';
  let bmiScore: number;

  if (bmi < 18.5) {
    bmiCategory = 'Kurus';
    bmiScore = 1;
  } else if (bmi < 25) {
    bmiCategory = 'Normal';
    bmiScore = 2;
  } else if (bmi < 30) {
    bmiCategory = 'Kelebihan berat badan';
    bmiScore = 1;
  } else {
    bmiCategory = 'Obesitas';
    bmiScore = 0;
  }

  // 2. Skoring Pola Makan (Max 14)
  let dietScore = bmiScore;

  // Sayur: 3-4 porsi [2], 1-2 porsi [1], Tidak makan [0]
  if (input.veggiePortion === '3-4') dietScore += 2;
  else if (input.veggiePortion === '1-2') dietScore += 1;

  // Buah: 2-3 porsi [2], 1 porsi [1], Tidak makan [0]
  if (input.fruitPortion === '2-3') dietScore += 2;
  else if (input.fruitPortion === '1') dietScore += 1;

  // Air Putih: >=2L / 8 gelas [2], 1-2L [1], <1L [0]
  if (input.waterIntake === '>=2L') dietScore += 2;
  else if (input.waterIntake === '1-2L') dietScore += 1;

  // Sarapan: Ya, bergizi seimbang [2], Ya, seadanya [1], Tidak sarapan [0]
  if (input.breakfastHabit === 'balanced') dietScore += 2;
  else if (input.breakfastHabit === 'simple') dietScore += 1;

  // Makanan/Minuman manis: <3x/minggu [2], 3-5x/minggu [1], Hampir setiap hari [0]
  if (input.sweetIntake === '<3') dietScore += 2;
  else if (input.sweetIntake === '3-5') dietScore += 1;

  // Gorengan/Junk food: <3x/minggu [2], 3-5x/minggu [1], Hampir setiap hari [0]
  if (input.friedIntake === '<3') dietScore += 2;
  else if (input.friedIntake === '3-5') dietScore += 1;

  // 3. Skoring Aktivitas Fisik (Max 2)
  let activityScore = 0;
  if (input.physicalActivity === '>=3') activityScore = 2;
  else if (input.physicalActivity === '1-2') activityScore = 1;

  // 4. Skoring Tidur (Max 2)
  let sleepScore = 0;
  if (input.sleepDuration === '7-8') sleepScore = 2;
  else if (input.sleepDuration === '6-7') sleepScore = 1;

  // 5. Skoring Manajemen Stres (Max 2)
  let stressScore = 0;
  if (input.stressLevel === 'none') stressScore = 2;
  else if (input.stressLevel === 'moderate') stressScore = 1;

  // 6. Total Score & Kategori
  const totalScore = dietScore + activityScore + sleepScore + stressScore;
  const totalPercentage = Math.round((totalScore / 20) * 100);

  let totalCategory: 'Sangat baik' | 'Baik' | 'Cukup' | 'Kurang';
  if (totalPercentage > 85) {
    totalCategory = 'Sangat baik';
  } else if (totalPercentage >= 75) {
    totalCategory = 'Baik';
  } else if (totalPercentage >= 65) {
    totalCategory = 'Cukup';
  } else {
    totalCategory = 'Kurang';
  }

  // 7. Domain Percentages
  const dietPct = Math.round((dietScore / 14) * 100);
  const activityPct = Math.round((activityScore / 2) * 100);
  const sleepPct = Math.round((sleepScore / 2) * 100);
  const stressPct = Math.round((stressScore / 2) * 100);

  const domainScores: DomainScore[] = [
    { domainKey: 'diet', label: 'Pola makan', score: dietScore, maxScore: 14, percentage: dietPct },
    { domainKey: 'activity', label: 'Aktivitas fisik', score: activityScore, maxScore: 2, percentage: activityPct },
    { domainKey: 'sleep', label: 'Pola tidur', score: sleepScore, maxScore: 2, percentage: sleepPct },
    { domainKey: 'stress', label: 'Manajemen stres', score: stressScore, maxScore: 2, percentage: stressPct },
  ];

  // Cari domain terendah
  const minPct = Math.min(dietPct, activityPct, sleepPct, stressPct);
  const lowestDomains = domainScores
    .filter((d) => d.percentage === minPct)
    .map((d) => d.label);

  const lowestDomainsText = lowestDomains.length === 1
    ? lowestDomains[0]
    : lowestDomains.slice(0, -1).join(', ') + ' dan ' + lowestDomains[lowestDomains.length - 1];

  // 8. Generate Narasi & Arahan CTA
  let ctaText = '';
  let ctaMessage = '';
  let adviceNarration = '';

  if (totalCategory === 'Sangat baik') {
    ctaText = 'Gabung Komunitas Kitogizi';
    ctaMessage = `Halo Kitogizi, saya ${input.name} baru saja melakukan Nutrition Check (Skor: ${totalPercentage}%, Sangat Baik). Saya tertarik untuk bergabung dengan Komunitas Kitogizi!`;
    adviceNarration = 'Keren! Pola hidupmu saat ini sudah sangat baik dan kamu sudah berada di jalur yang tepat.';
  } else if (totalCategory === 'Baik') {
    ctaText = 'Dapatkan E-book / Panduan Kitogizi';
    ctaMessage = `Halo Kitogizi, saya ${input.name} telah mengikuti Nutrition Check (Skor: ${totalPercentage}%, Baik). Saya ingin mendapatkan E-book / panduan gizi dari Kitogizi.`;
    adviceNarration = 'Pola hidupmu sudah cukup baik. Tinggal beberapa kebiasaan yang bisa dioptimalkan supaya hasilnya semakin baik.';
  } else if (totalCategory === 'Cukup') {
    ctaText = 'Konsultasikan Kebutuhanmu via WhatsApp';
    ctaMessage = `Halo Kitogizi, saya ${input.name} telah mengikuti Nutrition Check (Skor: ${totalPercentage}%, Cukup). Bagian yang perlu diperbaiki adalah ${lowestDomainsText}. Saya ingin berkonsultasi lebih lanjut.`;
    adviceNarration = 'Sudah ada beberapa kebiasaan baik, tapi masih ada bagian yang perlu diperbaiki agar pola hidupmu lebih sehat dan konsisten.';
  } else {
    ctaText = 'Konsultasi dengan Ahli Gizi Kitogizi via WhatsApp';
    ctaMessage = `Halo Kitogizi, saya ${input.name} telah mengikuti Nutrition Check (Skor: ${totalPercentage}%, Kurang). Saya membutuhkan pendampingan langsung dari Ahli Gizi Kitogizi.`;
    adviceNarration = 'Masih ada beberapa kebiasaan yang perlu mendapat perhatian. Tidak perlu mengubah semuanya sekaligus, kita bisa mulai dari langkah yang paling penting dulu.';
  }

  const narrative = `Halo, ${input.name}! Skor pola hidupmu saat ini ${totalPercentage}% dan masuk kategori ${totalCategory.toLowerCase()}. ${adviceNarration} Dari hasil analisis, bagian yang paling perlu diperhatikan adalah ${lowestDomainsText}. Kamu juga menyebutkan bahwa tantangan terbesarmu adalah ${input.biggestChallenge.toLowerCase()}, sementara tujuanmu adalah ${input.goal.toLowerCase()}. Kamu bisa mulai dari perubahan kecil secara bertahap atau berkonsultasi langsung dengan tim Ahli Gizi Kitogizi.`;

  return {
    id: `SIM-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString(),
    input,
    bmi,
    bmiCategory,
    bmiScore,
    dietScore,
    activityScore,
    sleepScore,
    stressScore,
    totalScore,
    totalPercentage,
    totalCategory,
    domainScores,
    lowestDomains,
    narrative,
    ctaText,
    ctaMessage,
  };
};
