import { Navigate, Route, useLocation } from 'react-router';
import Destination from '../../Pages/Destination';
import { lazy } from 'react';
const Moon = lazy(() => import('./components/DestinationComponents/Moon'));
const Mars = lazy(() => import('./components/DestinationComponents/Mars'));
const Titan = lazy(() => import('./components/DestinationComponents/Titan'));
const Europe = lazy(() => import('./components/DestinationComponents/Europe'));
const AnimatedDestinationRoutes = () => {
  const location = useLocation();
  return (
    <Route path="destination" element={<Destination />} key={location.key} location={location}>
      <Route index element={<Navigate to="moon" replace />} />
      <Route path="moon" element={<Moon />} />
      <Route path="europa" element={<Europe />} />
      <Route path="mars" element={<Mars />} />
      <Route path="titan" element={<Titan />} />
    </Route>
  );
};

export default AnimatedDestinationRoutes;
