/** App routing. */
export const APP_ROUTES = {
    MAIN: {
        PATH: '/',
    },
    EXAMPLES: {
        ASYNC: { PATH: '/examples/async' },
    },
    MOVIE: {
        PATH: '/movie/:id',
        CAST: {
            PATH: '/movie/:id/cast',
        },
    },
    TV: {
        PATH: '/tv/:id',
        CAST: {
            PATH: '/tv/:id/cast',
        },
    },
};
