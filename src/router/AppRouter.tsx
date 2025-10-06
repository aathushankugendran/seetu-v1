import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import HowItWorksIndividuals from '@/pages/HowItWorksIndividuals';
import HowItWorksCommunities from '@/pages/HowItWorksCommunities';
import HowItWorksBusinesses from '@/pages/HowItWorksBusinesses';
import About from '@/pages/About';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';
import Login from '@/pages/Login';
import Waitlist from '@/pages/Waitlist';
import Pricing from '@/pages/Pricing';
import NotFound from '@/pages/NotFound';
import { ROUTES } from '@/constants';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Public routes without layout */}
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.WAITLIST} element={<Waitlist />} />
      
      {/* Routes with layout */}
      <Route path="/*" element={
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.HOW_IT_WORKS.INDIVIDUALS} element={<HowItWorksIndividuals />} />
            <Route path={ROUTES.HOW_IT_WORKS.COMMUNITIES} element={<HowItWorksCommunities />} />
            <Route path={ROUTES.HOW_IT_WORKS.BUSINESSES} element={<HowItWorksBusinesses />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.FAQ} element={<FAQ />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.PRICING} element={<Pricing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      } />
    </Routes>
  );
};
