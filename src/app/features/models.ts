import { IPagination } from '../models';

/** Paginated data generic model. */
export interface IPaginatedData<T> extends IPagination {
    results: T;
}

/** Search list item model. */
export interface ISearch {
    page: number;
    results: any;
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
    genres: IGenre[];
    tagline?: string;
    runtime: number;
    createdBy?: ICreator[];
    status: string;
    budget: number;
    revenue: number;
}

/** Languages list */
export interface ILanguagesItem {
    iso6391: string;
    englishName: string;
    name: string;
}

/** People list item model. */
export interface IPeopleBase {
    id: number;
    adult: boolean;
    gender: number;
    knownForDepartment: string;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: string;
    creditId: string;
}

/** Cast list item model. */
export interface ICast extends IPeopleBase {
    id: number;
    order: number;
    character: string;
}

export interface IRole {
    creditId: string;
    character: string;
    episodeCount: number;
}

export interface ITVCast extends ICast {
    roles: IRole[];
    totalEpisodeCount: number;
}

/** Crew list item model. */
export interface ICrew extends IPeopleBase {
    id: number;
    department: string;
    job: string;
}

/** Crew list filtered by job . */
export interface ICrewFilteredByJob {
    name: string;
    jobs: string[];
}

/** Media credit list item model. */
export interface IMediaCreditList<TCast = ICast, TCrew = ICrew> {
    id: number;
    cast: TCast[];
    crew: TCrew[];
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
    episodeRunTime: number[];
    tagline?: string;
    status: string;
    type: string;
    networks: INetwork[];
    genres: IGenre[];
    createdBy?: ICreator[];
}

/** Array of networks. */
export interface INetwork {
    name: string;
    id: number;
    logoPath: string | null;
    originCountry: string;
}

/** Array of genres. */
export interface IGenre {
    id: number;
    name: string;
}

/** Array of creators. */
export interface ICreator {
    id: number;
    creditId: string;
    name: string;
    gender: number;
    profilePath: string;
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

/** Route param for movie. */
export interface IIdRouteParam {
    id: string;
}
