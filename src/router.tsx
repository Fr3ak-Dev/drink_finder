import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import IndexPage from './views/IndexPage';
import Layout from './layouts/Layout';
import FavoritePage from './views/FavoritePage';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} index />
                    <Route path="/favorites" element={<FavoritePage />} index />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}