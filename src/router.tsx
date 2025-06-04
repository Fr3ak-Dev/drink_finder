import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
// import IndexPage from './views/IndexPage';
// import FavoritePage from './views/FavoritePage';
import { lazy, Suspense } from 'react';

const IndexPage = lazy(() => import('./views/IndexPage'));
const FavoritePage = lazy(() => import('./views/FavoritePage'));
const GenerateAI = lazy(() => import('./views/GenerateAI'));

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {/* <Route path="/" element={<IndexPage />} index />
                    <Route path="/favorites" element={<FavoritePage />} index /> */}
                    <Route path="/" element={
                        <Suspense fallback='Loading...'>
                            <IndexPage />
                        </Suspense>
                    } index />
                    <Route path="/favorites" element={
                        <Suspense fallback='Loading...'>
                            <FavoritePage />
                        </Suspense>
                    } />
                    <Route path="/generate" element={
                        <Suspense fallback='Loading...'>
                            <GenerateAI />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}