export interface QueryPagination {
    sort?: string;
    limit?: number;
    page?: number;
}


export interface PaginationResponse<T> {
    total: number;
    limit: number;
    page: number;
    result: T[];
}