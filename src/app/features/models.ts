import { IPagination } from '../models';

/** Paginated data generic model. */
export interface IPaginatedData<T> extends IPagination {
    results: T;
}

/** Movie list item model. */
export interface IMovieListItem {
    id: number;
    title: string;
    originalTitle: string;
    originalLanguage: string;
    popularity: number;
    overview: string;
    releaseDate: string;
    genreIds: number[];
    posterPath?: string;
    backdropPath?: string;
    voteCount: number;
    voteAverage: number;
    adult: boolean;
    video: boolean;
}

/** TV list item model. */
export interface ITVListItem {
    id: number;
    name: string;
    originalName: string;
    originalLanguage: string;
    originalCountry: string[];
    popularity: number;
    overview: string;
    firstAirDate: string;
    genreIds: number[];
    posterPath?: string;
    backdropPath?: string;
    voteCount: number;
    voteAverage: number;
}

/** Tv List Item type guard. */
export const isTvListItem = (item: ITVListItem | IMovieListItem): item is ITVListItem =>
    (item as ITVListItem).name !== undefined || (item as ITVListItem).firstAirDate !== undefined;

/** Movie List Item type guard. */
export const isMovieListItem = (item: ITVListItem | IMovieListItem): item is IMovieListItem =>
    (item as IMovieListItem).title !== undefined || (item as IMovieListItem).releaseDate !== undefined;

/** Movie list model. */
export interface IPaginatedMovieList extends IPaginatedData<IMovieListItem[]> {}

/** Tv list model. */
export interface IPaginatedTvList extends IPaginatedData<ITVListItem[]> {}

/** Video item model. */
export interface IVideoItem {
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    publishedAt: string;
    id: string;
}
