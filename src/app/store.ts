import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { tmdbMoviesApi } from './features/movies/api';
import { tmdbTrendingApi } from './features/trending/api';

/** Configure store. */
export const store = configureStore({
    reducer: {
        [tmdbMoviesApi.reducerPath]: tmdbMoviesApi.reducer,
        [tmdbTrendingApi.reducerPath]: tmdbTrendingApi.reducer,
    },
    /**
     * Adding the api middleware enables caching, invalidation, polling,
     * and other useful features of `rtk-query`.
     */
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbMoviesApi.middleware),
});

/**
 * Setup redux listeners.
 *
 * Required for refetchOnFocus/refetchOnReconnect behaviors. See `setupListeners` docs - takes an optional
 * callback as the 2nd arg for customization.
 */
setupListeners(store.dispatch);

/** Export typings. */
export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
export type TAppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, Action<string>>;
