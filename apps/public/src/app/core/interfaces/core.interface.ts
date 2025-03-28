export interface MultiLanguageField {
    uk: string;
    en: string;
}

export interface PaginationResponse<T> {
    limit: number;
    page: number;
    total: number;
    result: T[];
}