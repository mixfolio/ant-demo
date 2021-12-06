import { 
    HOME_ROUTE,
    CARDS_ROUTE,
    BASIC_TABLES_ROUTE
 } from "./utils/consts";
import Admin from './pages/Admin';
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import BasicTablesPage from './pages/BasicTablesPage';

export const authRoutes = [
    {
        path: '/admin',
        Component: Admin
    }
];

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: BASIC_TABLES_ROUTE,
        Component: BasicTablesPage
    },
    {
        path: CARDS_ROUTE,
        Component: CardsPage
    }
];
