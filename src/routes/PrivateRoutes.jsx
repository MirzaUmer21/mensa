import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  return true;
};
const PrivateRoute = () => {
  return useAuth() ? <Outlet /> : <Navigate to='/login' />;
};
export default PrivateRoute;
