import React, { useState } from 'react';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { calculateNutritionCheck } from '../../../shared/lib/nutritionCalculator';
import type { NutritionCheckInput, NutritionCheckResult } from '../../../shared/lib/nutritionCalculator';
import { storageService } from '../../../shared/lib/storageService';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { createWhatsappHref } from '../../../shared/config/site';

const INITIAL_FORM: NutritionCheckInput = {
  name: '',
  weightKg: 60,
  heightCm: 165,
  biggestChallenge: 'Sulit konsisten makan sehat',
  goal: 'Menjaga berat badan ideal & kebugaran',
  veggiePortion: '3-4',
  fruitPortion: '2-3',
  waterIntake: '>=2L',
  breakfastHabit: 'balanced',
  sweetIntake: '<3',
  friedIntake: '<3',
  physicalActivity: '>=3',
  sleepDuration: '7-8',
  stressLevel: 'none',
};

const CHALLENGE_OPTIONS = [
  'Sulit konsisten makan sehat',
  'Pola tidur tidak teratur / sering lembur',
  'Kurang waktu untuk olahraga / aktivitas fisik',
  'Sering ngemil makanan/minuman manis',
  'Tingkat stres tinggi dari pekerjaan',
  'Lainnya',
];

const GOAL_OPTIONS = [
  'Menurunkan berat badan & kadar lemak',
  'Menjaga berat badan ideal & kebugaran',
  'Meningkatkan stamina & konsentrasi kerja',
  'Mengelola risiko kesehatan (kolesterol/gula darah)',
  'Membangun kebiasaan hidup sehat berkelanjutan',
  'Lainnya',
];

export const SimulasiGiziPage: React.FC = () => {
  const [formData, setFormData] = useState<NutritionCheckInput>(INITIAL_FORM);
  const [customChallenge, setCustomChallenge] = useState('');
  const [customGoal, setCustomGoal] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<NutritionCheckResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof NutritionCheckInput, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi.';
    }

    if (!formData.weightKg || formData.weightKg < 20 || formData.weightKg > 300) {
      newErrors.weightKg = 'Berat badan harus diisi antara 20 - 300 kg.';
    }

    if (!formData.heightCm || formData.heightCm < 50 || formData.heightCm > 250) {
      newErrors.heightCm = 'Tinggi badan harus diisi antara 50 - 250 cm.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const finalChallenge =
      formData.biggestChallenge === 'Lainnya' && customChallenge.trim()
        ? customChallenge.trim()
        : formData.biggestChallenge;

    const finalGoal =
      formData.goal === 'Lainnya' && customGoal.trim()
        ? customGoal.trim()
        : formData.goal;

    const finalInput: NutritionCheckInput = {
      ...formData,
      biggestChallenge: finalChallenge,
      goal: finalGoal,
    };

    const calculatedResult = calculateNutritionCheck(finalInput);
    
    // Save to storage (localStorage / cloud)
    storageService.saveSubmission(calculatedResult);

    setTimeout(() => {
      setResult(calculatedResult);
      setIsSubmitting(false);
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }, 400);
  };

  const handleReset = () => {
    setResult(null);
    setFormData(INITIAL_FORM);
    setCustomChallenge('');
    setCustomGoal('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="simulasi-gizi-page">
      <PageHero
        title="Kitogizi Nutrition Check"
        description="Evaluasi mandiri kebiasaan hidup & gizi harian Anda secara cepat dan berbasis data untuk mendapatkan gambaran kesehatan serta rekomendasi terarah."
        eyebrow="Simulasi & Self-Check Gizi"
      />

      <section className="section">
        <div className="container">
          {!result ? (
            <div className="simulasi-card">
              <div className="simulasi-card-header">
                <h2>Evaluasi Kebiasaan Hidup</h2>
                <p>
                  Isi informasi di bawah ini sesuai kebiasaan sehari-hari Anda. Hasilnya akan memberikan insight personal mengenai pola makan, aktivitas, tidur, dan manajemen stres Anda.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="simulasi-form">
                {/* Section 1: Data Diri */}
                <div className="form-group-section">
                  <h3 className="form-section-title">
                    <LocalHospitalRoundedIcon className="section-icon" /> 1. Data Diri & Target
                  </h3>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label htmlFor="input-name">Nama Lengkap *</label>
                      <input
                        id="input-name"
                        type="text"
                        placeholder="Contoh: Budi Santoso"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={errors.name ? 'input-error' : ''}
                      />
                      {errors.name && <span className="field-error-text">{errors.name}</span>}
                    </div>

                    <div className="form-grid-2-inner">
                      <div className="form-field">
                        <label htmlFor="input-weight">Berat Badan (kg) *</label>
                        <input
                          id="input-weight"
                          type="number"
                          placeholder="60"
                          value={formData.weightKg || ''}
                          onChange={(e) => handleInputChange('weightKg', parseFloat(e.target.value) || 0)}
                          className={errors.weightKg ? 'input-error' : ''}
                        />
                        {errors.weightKg && <span className="field-error-text">{errors.weightKg}</span>}
                      </div>

                      <div className="form-field">
                        <label htmlFor="input-height">Tinggi Badan (cm) *</label>
                        <input
                          id="input-height"
                          type="number"
                          placeholder="165"
                          value={formData.heightCm || ''}
                          onChange={(e) => handleInputChange('heightCm', parseFloat(e.target.value) || 0)}
                          className={errors.heightCm ? 'input-error' : ''}
                        />
                        {errors.heightCm && <span className="field-error-text">{errors.heightCm}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label htmlFor="input-challenge">Tantangan Kesehatan Terbesar</label>
                      <select
                        id="input-challenge"
                        value={formData.biggestChallenge}
                        onChange={(e) => handleInputChange('biggestChallenge', e.target.value)}
                      >
                        {CHALLENGE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {formData.biggestChallenge === 'Lainnya' && (
                        <input
                          type="text"
                          style={{ marginTop: '0.5rem' }}
                          placeholder="Tuliskan tantangan terbesar Anda..."
                          value={customChallenge}
                          onChange={(e) => setCustomChallenge(e.target.value)}
                        />
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="input-goal">Harapan / Target Utama</label>
                      <select
                        id="input-goal"
                        value={formData.goal}
                        onChange={(e) => handleInputChange('goal', e.target.value)}
                      >
                        {GOAL_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {formData.goal === 'Lainnya' && (
                        <input
                          type="text"
                          style={{ marginTop: '0.5rem' }}
                          placeholder="Tuliskan harapan/tujuan Anda..."
                          value={customGoal}
                          onChange={(e) => setCustomGoal(e.target.value)}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 2: Pola Makan */}
                <div className="form-group-section">
                  <h3 className="form-section-title">
                    <RestaurantRoundedIcon className="section-icon" /> 2. Kebiasaan Pola Makan (Maks 14 Poin)
                  </h3>

                  <div className="questions-grid">
                    {/* Sayur */}
                    <div className="question-card">
                      <label className="question-label">Konsumsi Sayur Harian</label>
                      <div className="radio-options">
                        <label className={`radio-pill ${formData.veggiePortion === '3-4' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="veggiePortion"
                            value="3-4"
                            checked={formData.veggiePortion === '3-4'}
                            onChange={(e) => handleInputChange('veggiePortion', e.target.value)}
                          />
                          <span>3–4 porsi/hari</span>
                        </label>
                        <label className={`radio-pill ${formData.veggiePortion === '1-2' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="veggiePortion"
                            value="1-2"
                            checked={formData.veggiePortion === '1-2'}
                            onChange={(e) => handleInputChange('veggiePortion', e.target.value)}
                          />
                          <span>1–2 porsi/hari</span>
                        </label>
                        <label className={`radio-pill ${formData.veggiePortion === '0' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="veggiePortion"
                            value="0"
                            checked={formData.veggiePortion === '0'}
                            onChange={(e) => handleInputChange('veggiePortion', e.target.value)}
                          />
                          <span>Jarang / Tidak makan</span>
                        </label>
                      </div>
                    </div>

                    {/* Buah */}
                    <div className="question-card">
                      <label className="question-label">Konsumsi Buah Harian</label>
                      <div className="radio-options">
                        <label className={`radio-pill ${formData.fruitPortion === '2-3' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="fruitPortion"
                            value="2-3"
                            checked={formData.fruitPortion === '2-3'}
                            onChange={(e) => handleInputChange('fruitPortion', e.target.value)}
                          />
                          <span>2–3 porsi/hari</span>
                        </label>
                        <label className={`radio-pill ${formData.fruitPortion === '1' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="fruitPortion"
                            value="1"
                            checked={formData.fruitPortion === '1'}
                            onChange={(e) => handleInputChange('fruitPortion', e.target.value)}
                          />
                          <span>1 porsi/hari</span>
                        </label>
                        <label className={`radio-pill ${formData.fruitPortion === '0' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="fruitPortion"
                            value="0"
                            checked={formData.fruitPortion === '0'}
                            onChange={(e) => handleInputChange('fruitPortion', e.target.value)}
                          />
                          <span>Jarang / Tidak makan</span>
                        </label>
                      </div>
                    </div>

                    {/* Air Putih */}
                    <div className="question-card">
                      <label className="question-label">Konsumsi Air Putih</label>
                      <div className="radio-options">
                        <label className={`radio-pill ${formData.waterIntake === '>=2L' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="waterIntake"
                            value=">=2L"
                            checked={formData.waterIntake === '>=2L'}
                            onChange={(e) => handleInputChange('waterIntake', e.target.value)}
                          />
                          <span>≥ 2 liter / 8 gelas</span>
                        </label>
                        <label className={`radio-pill ${formData.waterIntake === '1-2L' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="waterIntake"
                            value="1-2L"
                            checked={formData.waterIntake === '1-2L'}
                            onChange={(e) => handleInputChange('waterIntake', e.target.value)}
                          />
                          <span>1–2 liter / ±6 gelas</span>
                        </label>
                        <label className={`radio-pill ${formData.waterIntake === '<1L' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="waterIntake"
                            value="<1L"
                            checked={formData.waterIntake === '<1L'}
                            onChange={(e) => handleInputChange('waterIntake', e.target.value)}
                          />
                          <span>&lt; 1 liter / hari</span>
                        </label>
                      </div>
                    </div>

                    {/* Sarapan */}
                    <div className="question-card">
                      <label className="question-label">Kebiasaan Sarapan</label>
                      <div className="radio-options">
                        <label className={`radio-pill ${formData.breakfastHabit === 'balanced' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="breakfastHabit"
                            value="balanced"
                            checked={formData.breakfastHabit === 'balanced'}
                            onChange={(e) => handleInputChange('breakfastHabit', e.target.value)}
                          />
                          <span>Ya, bergizi seimbang</span>
                        </label>
                        <label className={`radio-pill ${formData.breakfastHabit === 'simple' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="breakfastHabit"
                            value="simple"
                            checked={formData.breakfastHabit === 'simple'}
                            onChange={(e) => handleInputChange('breakfastHabit', e.target.value)}
                          />
                          <span>Ya, seadanya</span>
                        </label>
                        <label className={`radio-pill ${formData.breakfastHabit === 'none' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="breakfastHabit"
                            value="none"
                            checked={formData.breakfastHabit === 'none'}
                            onChange={(e) => handleInputChange('breakfastHabit', e.target.value)}
                          />
                          <span>Jarang / Tidak sarapan</span>
                        </label>
                      </div>
                    </div>

                    {/* Makanan/Minuman Manis */}
                    <div className="question-card">
                      <label className="question-label">Frekuensi Makanan / Minuman Manis</label>
                      <div className="radio-options">
                        <label className={`radio-pill ${formData.sweetIntake === '<3' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="sweetIntake"
                            value="<3"
                            checked={formData.sweetIntake === '<3'}
                            onChange={(e) => handleInputChange('sweetIntake', e.target.value)}
                          />
                          <span>&lt; 3× / minggu</span>
                        </label>
                        <label className={`radio-pill ${formData.sweetIntake === '3-5' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="sweetIntake"
                            value="3-5"
                            checked={formData.sweetIntake === '3-5'}
                            onChange={(e) => handleInputChange('sweetIntake', e.target.value)}
                          />
                          <span>3–5× / minggu</span>
                        </label>
                        <label className={`radio-pill ${formData.sweetIntake === 'daily' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="sweetIntake"
                            value="daily"
                            checked={formData.sweetIntake === 'daily'}
                            onChange={(e) => handleInputChange('sweetIntake', e.target.value)}
                          />
                          <span>Hampir setiap hari</span>
                        </label>
                      </div>
                    </div>

                    {/* Gorengan / Junk Food */}
                    <div className="question-card">
                      <label className="question-label">Frekuensi Gorengan / Junk Food</label>
                      <div className="radio-options">
                        <label className={`radio-pill ${formData.friedIntake === '<3' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="friedIntake"
                            value="<3"
                            checked={formData.friedIntake === '<3'}
                            onChange={(e) => handleInputChange('friedIntake', e.target.value)}
                          />
                          <span>&lt; 3× / minggu</span>
                        </label>
                        <label className={`radio-pill ${formData.friedIntake === '3-5' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="friedIntake"
                            value="3-5"
                            checked={formData.friedIntake === '3-5'}
                            onChange={(e) => handleInputChange('friedIntake', e.target.value)}
                          />
                          <span>3–5× / minggu</span>
                        </label>
                        <label className={`radio-pill ${formData.friedIntake === 'daily' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="friedIntake"
                            value="daily"
                            checked={formData.friedIntake === 'daily'}
                            onChange={(e) => handleInputChange('friedIntake', e.target.value)}
                          />
                          <span>Hampir setiap hari</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Gaya Hidup & Stres */}
                <div className="form-group-section">
                  <h3 className="form-section-title">
                    <FitnessCenterRoundedIcon className="section-icon" /> 3. Aktivitas Fisik, Tidur & Stres
                  </h3>

                  <div className="questions-grid">
                    {/* Aktivitas Fisik */}
                    <div className="question-card">
                      <label className="question-label">
                        <FitnessCenterRoundedIcon style={{ fontSize: '1.1rem', verticalAlign: 'middle', marginRight: '4px' }} />
                        Aktivitas Fisik / Olahraga
                      </label>
                      <div className="radio-options">
                        <label className={`radio-pill ${formData.physicalActivity === '>=3' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="physicalActivity"
                            value=">=3"
                            checked={formData.physicalActivity === '>=3'}
                            onChange={(e) => handleInputChange('physicalActivity', e.target.value)}
                          />
                          <span>≥ 3 kali / minggu</span>
                        </label>
                        <label className={`radio-pill ${formData.physicalActivity === '1-2' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="physicalActivity"
                            value="1-2"
                            checked={formData.physicalActivity === '1-2'}
                            onChange={(e) => handleInputChange('physicalActivity', e.target.value)}
                          />
                          <span>1–2 kali / minggu</span>
                        </label>
                        <label className={`radio-pill ${formData.physicalActivity === '0' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="physicalActivity"
                            value="0"
                            checked={formData.physicalActivity === '0'}
                            onChange={(e) => handleInputChange('physicalActivity', e.target.value)}
                          />
                          <span>Tidak pernah / Sangat jarang</span>
                        </label>
                      </div>
                    </div>

                    {/* Tidur */}
                    <div className="question-card">
                      <label className="question-label">
                        <NightlightRoundedIcon style={{ fontSize: '1.1rem', verticalAlign: 'middle', marginRight: '4px' }} />
                        Durasi Tidur Harian
                      </label>
                      <div className="radio-options">
                        <label className={`radio-pill ${formData.sleepDuration === '7-8' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="sleepDuration"
                            value="7-8"
                            checked={formData.sleepDuration === '7-8'}
                            onChange={(e) => handleInputChange('sleepDuration', e.target.value)}
                          />
                          <span>7–8 jam / malam</span>
                        </label>
                        <label className={`radio-pill ${formData.sleepDuration === '6-7' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="sleepDuration"
                            value="6-7"
                            checked={formData.sleepDuration === '6-7'}
                            onChange={(e) => handleInputChange('sleepDuration', e.target.value)}
                          />
                          <span>6–7 jam / malam</span>
                        </label>
                        <label className={`radio-pill ${formData.sleepDuration === '<6' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="sleepDuration"
                            value="<6"
                            checked={formData.sleepDuration === '<6'}
                            onChange={(e) => handleInputChange('sleepDuration', e.target.value)}
                          />
                          <span>&lt; 6 jam / malam</span>
                        </label>
                      </div>
                    </div>

                    {/* Stres */}
                    <div className="question-card">
                      <label className="question-label">
                        <PsychologyRoundedIcon style={{ fontSize: '1.1rem', verticalAlign: 'middle', marginRight: '4px' }} />
                        Tingkat Stres Saat Ini
                      </label>
                      <div className="radio-options">
                        <label className={`radio-pill ${formData.stressLevel === 'none' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="stressLevel"
                            value="none"
                            checked={formData.stressLevel === 'none'}
                            onChange={(e) => handleInputChange('stressLevel', e.target.value)}
                          />
                          <span>Rendah / Tidak Stres</span>
                        </label>
                        <label className={`radio-pill ${formData.stressLevel === 'moderate' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="stressLevel"
                            value="moderate"
                            checked={formData.stressLevel === 'moderate'}
                            onChange={(e) => handleInputChange('stressLevel', e.target.value)}
                          />
                          <span>Stres Sedang</span>
                        </label>
                        <label className={`radio-pill ${formData.stressLevel === 'severe' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="stressLevel"
                            value="severe"
                            checked={formData.stressLevel === 'severe'}
                            onChange={(e) => handleInputChange('stressLevel', e.target.value)}
                          />
                          <span>Stres Berat</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    <CalculateRoundedIcon />
                    {isSubmitting ? 'Menghitung Hasil...' : 'Hitung Skor Nutrition Check'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Result Section */
            <div className="result-card">
              <div className="result-badge-header">
                <CheckCircleRoundedIcon className="success-icon" />
                <div>
                  <span className="result-eyebrow">Hasil Evaluasi Kitogizi</span>
                  <h2>Halo, {result.input.name}!</h2>
                </div>
              </div>

              <div className="result-main-grid">
                {/* Score Big Card */}
                <div className="score-summary-card">
                  <span className="score-label">Skor Pola Hidup</span>
                  <div className="score-circle">
                    <span className="score-number">{result.totalPercentage}%</span>
                    <span className="score-max">Skor {result.totalScore}/20</span>
                  </div>
                  <div className={`category-tag category-${result.totalCategory.toLowerCase().replace(/\s+/g, '-')}`}>
                    Kategori: {result.totalCategory}
                  </div>
                </div>

                {/* BMI Card */}
                <div className="bmi-summary-card">
                  <span className="card-subhead">Indeks Massa Tubuh (IMT)</span>
                  <div className="bmi-value-display">
                    <span className="bmi-number">{result.bmi}</span>
                    <span className="bmi-unit">kg/m²</span>
                  </div>
                  <div className="bmi-category-badge">
                    Kategori: <strong>{result.bmiCategory}</strong>
                  </div>
                  <p className="bmi-hint">
                    Tinggi: {result.input.heightCm} cm | Berat: {result.input.weightKg} kg
                  </p>
                </div>
              </div>

              {/* Domain Scores Progress */}
              <div className="domain-scores-container">
                <h3>Skor Per Domain Kesehatan</h3>
                <div className="domains-list">
                  {result.domainScores.map((domain) => (
                    <div key={domain.domainKey} className="domain-item">
                      <div className="domain-info">
                        <span className="domain-name">{domain.label}</span>
                        <span className="domain-val">
                          {domain.score}/{domain.maxScore} ({domain.percentage}%)
                        </span>
                      </div>
                      <div className="progress-bar-bg">
                        <div
                          className="progress-bar-fill"
                          style={{
                            width: `${domain.percentage}%`,
                            backgroundColor:
                              domain.percentage >= 75
                                ? '#009f9d'
                                : domain.percentage >= 50
                                ? '#ffa500'
                                : '#e74c3c',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Narrative */}
              <div className="narrative-box">
                <h4><PsychologyRoundedIcon className="narrative-icon" /> Rekomendasi & Insight Personal</h4>
                <p className="narrative-text">{result.narrative}</p>
              </div>

              {/* CTA Actions */}
              <div className="result-actions">
                <a
                  href={createWhatsappHref(result.ctaMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-cta-btn"
                >
                  <WhatsAppIcon /> {result.ctaText}
                </a>

                <button type="button" onClick={handleReset} className="reset-btn">
                  <RefreshRoundedIcon /> Hitung Ulang Simulasi
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SimulasiGiziPage;
