import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import { Home } from '../containers/Home';

export const AppRoutes = () => {
  useEffect(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
  }, []);

  const MainRoutes = () => {
    return (
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    );
  };
  return MainRoutes();
};
