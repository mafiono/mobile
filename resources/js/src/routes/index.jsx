import { useRoutes, Navigate } from 'react-router-dom';
import { SportsRoutes, BaseRoutes } from './MainRoutes';

export default function ThemeRoutes() {
    return useRoutes([{ path: '*', element: <Navigate to="/home" /> }, BaseRoutes, SportsRoutes]);
}
