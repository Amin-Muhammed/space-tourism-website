import { Navigate, Routes, useLocation } from 'react-router';
import { Route } from 'react-router';
import { lazy, Suspense } from 'react';

import Layout from './components/Layout/Layout';
import SpinnerFullPage from './components/ReUseComp/SpinnerFullPage';
import { AnimatePresence } from 'framer-motion';
const Home = lazy(() => import('./Pages/Home'));
const Moon = lazy(() => import('./components/DestinationComponents/Moon'));
const Mars = lazy(() => import('./components/DestinationComponents/Mars'));
const Titan = lazy(() => import('./components/DestinationComponents/Titan'));
const Europe = lazy(() => import('./components/DestinationComponents/Europe'));
const CrewContent = lazy(() => import('./components/CrewComponents/CrewContent'));
const TechnologyContent = lazy(() => import('./components/TechnologyComponents/TechnologyContent'));
const Destination = lazy(() => import('./Pages/Destination'));
const Crew = lazy(() => import('./Pages/Crew'));
const Technology = lazy(() => import('./Pages/Technology'));
const PageNotFound = lazy(() => import('./components/PageNotFound/PageNotFound'));

function App() {
  const location = useLocation();
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destination" element={<Destination />}>
              <Route index element={<Navigate to="moon" replace />} />
              <Route path="moon" element={<Moon />} />
              <Route path="europa" element={<Europe />} />
              <Route path="mars" element={<Mars />} />
              <Route path="titan" element={<Titan />} />
            </Route>
            <Route path="crew" element={<Crew />}>
              <Route index element={<Navigate to="missionspecialist" replace />} />
              <Route index path=":role" element={<CrewContent />} />
            </Route>

            <Route path="technology" element={<Technology />}>
              <Route index element={<Navigate to="launch-vehicle" replace />} />
              <Route index path=":technology" element={<TechnologyContent />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
