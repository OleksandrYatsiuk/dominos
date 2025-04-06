export interface PizzaView {
    id: string,
    name: {
        uk: string;
        en: string;
    },
    ingredients: string[],
    price: {
        small: number;
        middle: number;
        big: number;
    },
    size: {
        small: number;
        middle: number;
        big: number;
    },
    categoryId: number;
    category: any;
    image: string | null;
    createdAt: string;
    updatedAt: string;
}