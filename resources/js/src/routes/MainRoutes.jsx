import { lazy } from 'react';

import { MainLayout } from '../layouts';
import Loadable from '../components/Loadable';

const Home = Loadable(lazy(() => import('../pages/Home')));
const Live = Loadable(lazy(() => import('../pages/Live')));
const Prematch = Loadable(lazy(() => import('../pages/Match')));
const EventMatch = Loadable(lazy(() => import('../pages/Event')));
const Casino = Loadable(lazy(() => import('../pages/Casino')));

export const BaseRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'home',
            element: <Home />
        },
        {
            path: 'casino/:id',
            element: <Casino />
        }
    ]
};
export const SportsRoutes = {
    path: '/sports',
    element: <MainLayout />,
    children: [
        {
            path: 'live',
            element: <Live />
        },
        {
            path: 'prematch',
            element: <Prematch />
        },
        {
            path: 'event',
            element: <EventMatch />
        }
    ]
};