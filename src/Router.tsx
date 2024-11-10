import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const Router = () => {
    return createBrowserRouter([
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/about',
            element: <AboutPage />
        }
    ]);
};

export default Router;