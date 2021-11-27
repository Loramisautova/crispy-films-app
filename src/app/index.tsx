import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { EMediaType } from './enums';

import { MainLayout } from './layouts/MainLayout';
import { TvPage } from './pages/TvPage';
import { MainPage } from './pages/Main';
import { MoviePage } from './pages/MoviePage';
import { CreditPage } from './pages/CreditPage';
import { APP_ROUTES } from './routes/consts';

/** Root app component. */
export const App: React.FC = () => (
    <div>
        <Header />
        <MainLayout>
            <Switch>
                <Route component={MoviePage} path={APP_ROUTES.MOVIE.PATH} exact />
                <Route component={TvPage} path={APP_ROUTES.TV.PATH} exact />
                <Route path={APP_ROUTES.MOVIE.CAST.PATH} render={() => <CreditPage type={EMediaType.MOVIE} />} exact />
                <Route path={APP_ROUTES.TV.CAST.PATH} render={() => <CreditPage type={EMediaType.TV} />} exact />
                <Route component={MainPage} path={APP_ROUTES.MAIN.PATH} />
            </Switch>
        </MainLayout>
    </div>
);
