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

/** Movie list model. */
export interface IPaginatedMovieList extends IPaginatedData<IMovieListItem[]> {}
