/** Classname property model. */
export interface IClassName {
    /** Class name. */
    className?: string;
}

/** Pagination fields. */
export interface IPagination {
    /** Current page. */
    page: number;
    /** Total results. */
    totalResults: number;
    /** Total pages. */
    totalPages: number;
}

export interface ILanguageQueryArg {
    /** Language. */
    language?: string;
}

/** Paginated query arguments. */
export interface IPaginatedQueryArgs extends ILanguageQueryArg {
    /** Page number. */
    page?: number;
}
