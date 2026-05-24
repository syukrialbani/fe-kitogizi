import { Outlet } from 'react-router-dom';
import { SiteFooter } from '../../widgets/site-footer';
import { SiteHeader } from '../../widgets/site-header';

export const PublicLayout = () => {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default PublicLayout;
