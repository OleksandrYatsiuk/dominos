export enum DrinksCategories {
    BEER = 1,
    WATER = 2,
    JUICE = 3
}

export interface DrinkView {
    id: string;
    name: {
        uk: string;
        en: string;
    }
    price: {
        small: number;
        middle: number;
        big: number;
    }
    size: {
        small: number;
        middle: number;
        big: number;
    }
    image: string | null;
    category: DrinksCategories;
    createdAt: string;
    updatedAt: string;
}