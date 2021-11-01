import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';

import { MainLayout } from './layouts/MainLayout';
import { TvPage } from './pages/TvPage';
import { MainPage } from './pages/Main';
import { MoviePage } from './pages/MoviePage';
import { APP_ROUTES } from './routes/consts';

/** Root app component. */
export const App: React.FC = () => (
    <div>
        <Header />
        <MainLayout>
            <Switch>
                <Route component={TvPage} path={APP_ROUTES.TV.PATH} />
                <Route component={MoviePage} path={APP_ROUTES.MOVIE.PATH} />
                <Route component={MainPage} path={APP_ROUTES.MAIN.PATH} />
            </Switch>
        </MainLayout>
    </div>
);
