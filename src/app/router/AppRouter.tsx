import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { AboutPage } from '../../pages/about';
import { ContactPage } from '../../pages/contact';
import { CorporateWellnessPage } from '../../pages/corporate-wellness';
import { HomePage } from '../../pages/home';
import { SchoolWellnessPage } from '../../pages/school-wellness';
import { WellnessExperiencePage } from '../../pages/wellness-experience';
import { SimulasiGiziPage } from '../../pages/simulasi-gizi';
import { AdminLoginPage } from '../../pages/admin/login';
import { AdminDashboardPage } from '../../pages/admin/dashboard';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="nutrition-check" element={<SimulasiGiziPage />} />
        <Route path="corporate-wellness" element={<CorporateWellnessPage />} />
        <Route path="wellness-experience" element={<WellnessExperiencePage />} />
        <Route path="school-wellness" element={<SchoolWellnessPage />} />
        <Route path="tentang-kami" element={<AboutPage />} />
        <Route path="kontak" element={<ContactPage />} />
      </Route>

      {/* Admin Portal Routes */}
      <Route path="admin/login" element={<AdminLoginPage />} />
      <Route path="admin/dashboard" element={<AdminDashboardPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
