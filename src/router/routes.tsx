import { lazy } from 'react';
const Index = lazy(() => import('../pages/backend/Index'));

const LoginBoxed = lazy(() => import('../pages/Authentication/LoginBoxed'));
const About = lazy(() => import('../pages/backend/About'));
const HomePage = lazy(() => import('../pages/FrontEnd/HomePage'));
const TagPage = lazy(() => import('../pages/backend/tag-page'));

const routes = [
    // BACK END
    {
        path: '/dashboard',
        element: <Index />,
    },
    {
        path: '/tag',
        element: <TagPage />,
    },

    //Authentication
    {
        path: '/auth/boxed-signin',
        element: <LoginBoxed />,
        layout: 'blank',
    },

    {
        path: '/dashboard/about',
        element: <About />,
        layout: '',
    },
    // FRONT END
    {
        path: '',
        element: <HomePage />,
        layout: 'frontend',
    },
];

export { routes };
