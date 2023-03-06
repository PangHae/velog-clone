import { Outlet } from 'react-router-dom';
import NavBar from '@/components/layout/NavBar';

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);
export default Layout;
