import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import ErrorPage from '../pages/Error/ErrorPage';
import SearchDetail from '../pages/SearchDetail/SearchDetail';
import SearchResults from '../pages/SearchResults/SearchResults';

export const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={'/'}></Route>
                <Route path={'/items'} element={<SearchResults />}></Route>
                <Route path={'/items/:id'} element={<SearchDetail />}></Route>
                <Route path={'/error/:message'} element={<ErrorPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
