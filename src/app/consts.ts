import { IVideoItem } from './features/models';

/** Application name */
export const APP_NAME = 'Crispy Films';

/** Base API prefix. */
export const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';

/** Trailers. */
export const TRAILERS: IVideoItem[] = [
    {
        name: 'Fight Club - Theatrical Trailer Remastered in HD',
        key: '6JnN1DmbqoU',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
        official: false,
        publishedAt: '2015-02-26 03:19:25 UTC',
        id: '5e382d1b4ca676001453826d',
    },
    {
        name: 'Fight Club | #TBT Trailer | 20th Century FOX',
        key: 'BdJKm16Co6M',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
        official: true,
        publishedAt: '2014-10-02 19:20:22 UTC',
        id: '5c9294240e0a267cd516835f',
    },
];
