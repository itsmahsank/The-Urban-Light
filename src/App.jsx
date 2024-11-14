import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/Layout/AppLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Menu } from './pages/Menu';

const App = ({ darkMode, handleToggleTheme }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout darkMode={darkMode} handleToggleTheme={handleToggleTheme} />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/menu', element: <Menu /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
