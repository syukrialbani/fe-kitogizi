import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { AboutPage } from '../../pages/about';
import { CaseStudyPage } from '../../pages/case-study';
import { ContactPage } from '../../pages/contact';
import { CorporateWellnessPage } from '../../pages/corporate-wellness';
import { HomePage } from '../../pages/home';
import { SchoolWellnessPage } from '../../pages/school-wellness';
import { WellnessExperiencePage } from '../../pages/wellness-experience';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="corporate-wellness" element={<CorporateWellnessPage />} />
        <Route path="wellness-experience" element={<WellnessExperiencePage />} />
        <Route path="school-wellness" element={<SchoolWellnessPage />} />
        <Route path="case-study" element={<CaseStudyPage />} />
        <Route path="tentang-kami" element={<AboutPage />} />
        <Route path="kontak" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
