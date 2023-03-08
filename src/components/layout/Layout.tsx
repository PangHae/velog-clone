import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/layout/Header';

const Layout: FC<{}> = () => (
  <>
    <Header />
    <Outlet />
  </>
);
export default Layout;
