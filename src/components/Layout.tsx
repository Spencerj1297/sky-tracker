import React, { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
    children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return <section className="z-0 bg-gradient-custom min-h-screen pt-32">
    <Outlet />
  </section>;
};

export default Layout;
