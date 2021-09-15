import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AsyncExample } from './components/AsyncExample';
import { MainLayout } from './layouts/MainLayout';
import { MainPage } from './pages/Main';
import { APP_ROUTES } from './routes/consts';
import { Header } from './components/Header';

/** Root app component. */
export const App: React.FC = () => (
    <div>
        <Header />
        <MainLayout>
            <Switch>
                <Route component={AsyncExample} path={APP_ROUTES.EXAMPLES.ASYNC.PATH} />
                <Route component={MainPage} path={APP_ROUTES.MAIN.PATH} />
            </Switch>
        </MainLayout>
    </div>
);
