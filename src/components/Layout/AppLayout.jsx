import React from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export const AppLayout = ({ darkMode, handleToggleTheme }) => {
  return (
    <>
      <Header darkMode={darkMode} handleToggleTheme={handleToggleTheme} />
      <Outlet />
      <Footer />
    </>
  );
};
