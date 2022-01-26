import { 
    HOME_ROUTE,
    CARDS_ROUTE,
    BASIC_TABLES_ROUTE,
    FORMS_ROUTE,
    GRID_ROUTE,
    UI_ROUTE
 } from "./utils/consts";
import Admin from './pages/Admin';
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import BasicTablesPage from './pages/BasicTablesPage';
import FormsPage from "./pages/FormsPage";
import GridPage from "./pages/GridPage";
import UI from "./pages/UI";

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
    },
    {
        path: FORMS_ROUTE,
        Component: FormsPage
    },
    {
        path: GRID_ROUTE,
        Component: GridPage
    },
    {
        path: UI_ROUTE,
        Component: UI
    },
];
