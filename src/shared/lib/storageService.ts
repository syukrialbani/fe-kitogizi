import { createClient } from '@supabase/supabase-js';
import type { NutritionCheckResult } from './nutritionCalculator';

const STORAGE_KEY = 'kitogizi_nutrition_submissions';
const ADMIN_AUTH_KEY = 'kitogizi_admin_authenticated';

// Konfigurasi Supabase dari .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

// Database Seed Data (Kosong)
const SEED_DATA: NutritionCheckResult[] = [];

export const storageService = {
  // Save a new submission (ke Supabase jika aktif, dan selalu simpan di LocalStorage sebagai backup)
  saveSubmission: async (result: NutritionCheckResult): Promise<boolean> => {
    // 1. Simpan di LocalStorage
    try {
      const existing = storageService.getLocalSubmissions();
      const updated = [result, ...existing];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.error('Error saving to localStorage:', err);
    }

    // 2. Jika Supabase terhubung, simpan ke Cloud Database PostgreSQL
    if (supabase) {
      try {
        const { error } = await supabase.from('nutrition_submissions').insert({
          id: result.id,
          created_at: result.createdAt,
          name: result.input.name,
          whatsapp_number: result.input.whatsappNumber,
          weight_kg: result.input.weightKg,
          height_cm: result.input.heightCm,
          biggest_challenge: result.input.biggestChallenge,
          goal: result.input.goal,
          consent_agreed: result.input.consentAgreed,
          veggie_portion: result.input.veggiePortion,
          fruit_portion: result.input.fruitPortion,
          water_intake: result.input.waterIntake,
          breakfast_habit: result.input.breakfastHabit,
          sweet_intake: result.input.sweetIntake,
          fried_intake: result.input.friedIntake,
          physical_activity: result.input.physicalActivity,
          sleep_duration: result.input.sleepDuration,
          stress_level: result.input.stressLevel,
          bmi: result.bmi,
          bmi_category: result.bmiCategory,
          bmi_score: result.bmiScore,
          diet_score: result.dietScore,
          activity_score: result.activityScore,
          sleep_score: result.sleepScore,
          stress_score: result.stressScore,
          total_score: result.totalScore,
          total_percentage: result.totalPercentage,
          total_category: result.totalCategory,
          lowest_domains: result.lowestDomains,
          narrative: result.narrative,
          cta_text: result.ctaText,
          cta_message: result.ctaMessage,
        });

        if (error) {
          console.error('Supabase Insert Error:', error);
        } else {
          console.log('Successfully saved to Supabase PostgreSQL database!');
        }
      } catch (cloudErr) {
        console.error('Error saving to Supabase:', cloudErr);
      }
    }

    return true;
  },

  // Get Submissions (Mencoba ambil dari Supabase jika terhubung, jika tidak ambil dari LocalStorage)
  getAllSubmissionsAsync: async (): Promise<NutritionCheckResult[]> => {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('nutrition_submissions')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          return data.map((row: any) => ({
            id: row.id,
            createdAt: row.created_at,
            input: {
              name: row.name,
              whatsappNumber: row.whatsapp_number || '-',
              weightKg: Number(row.weight_kg),
              heightCm: Number(row.height_cm),
              biggestChallenge: row.biggest_challenge,
              goal: row.goal,
              consentAgreed: Boolean(row.consent_agreed),
              veggiePortion: row.veggie_portion,
              fruitPortion: row.fruit_portion,
              waterIntake: row.water_intake,
              breakfastHabit: row.breakfast_habit,
              sweetIntake: row.sweet_intake,
              friedIntake: row.fried_intake,
              physicalActivity: row.physical_activity,
              sleepDuration: row.sleep_duration,
              stressLevel: row.stress_level,
            },
            bmi: Number(row.bmi),
            bmiCategory: row.bmi_category,
            bmiScore: row.bmi_score,
            dietScore: row.diet_score,
            activityScore: row.activity_score,
            sleepScore: row.sleep_score,
            stressScore: row.stress_score,
            totalScore: row.total_score,
            totalPercentage: row.total_percentage,
            totalCategory: row.total_category,
            domainScores: [
              { domainKey: 'diet', label: 'Pola makan', score: row.diet_score, maxScore: 14, percentage: Math.round((row.diet_score / 14) * 100) },
              { domainKey: 'activity', label: 'Aktivitas fisik', score: row.activity_score, maxScore: 2, percentage: Math.round((row.activity_score / 2) * 100) },
              { domainKey: 'sleep', label: 'Pola tidur', score: row.sleep_score, maxScore: 2, percentage: Math.round((row.sleep_score / 2) * 100) },
              { domainKey: 'stress', label: 'Manajemen stres', score: row.stress_score, maxScore: 2, percentage: Math.round((row.stress_score / 2) * 100) },
            ],
            lowestDomains: Array.isArray(row.lowest_domains) ? row.lowest_domains : [],
            narrative: row.narrative,
            ctaText: row.cta_text,
            ctaMessage: row.cta_message,
          }));
        }
      } catch (err) {
        console.error('Error fetching from Supabase, falling back to LocalStorage:', err);
      }
    }

    return storageService.getLocalSubmissions();
  },

  // Synchronous local helper
  getLocalSubmissions: (): NutritionCheckResult[] => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_DATA));
        return SEED_DATA;
      }
      return JSON.parse(raw);
    } catch (err) {
      return SEED_DATA;
    }
  },

  // Alias for backward compatibility
  getAllSubmissions: (): NutritionCheckResult[] => {
    return storageService.getLocalSubmissions();
  },

  // Clear submissions
  clearSubmissions: (): boolean => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (err) {
      return false;
    }
  },

  // Admin Auth helpers
  isAdminAuthenticated: (): boolean => {
    return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  },

  adminLogin: (username: string, pass: string): boolean => {
    const validUser = import.meta.env.VITE_ADMIN_USER || 'admin';
    const validPass = import.meta.env.VITE_ADMIN_PASS || 'admin123';

    if (username.trim() === validUser && pass === validPass) {
      localStorage.setItem(ADMIN_AUTH_KEY, 'true');
      return true;
    }
    return false;
  },

  adminLogout: (): void => {
    localStorage.removeItem(ADMIN_AUTH_KEY);
  },
};
