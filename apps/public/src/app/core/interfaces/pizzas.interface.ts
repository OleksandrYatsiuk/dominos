import { MultiLanguageField } from './core.interface';

export interface PizzaView {
    id: string;
    name: MultiLanguageField;
    price: {
        small: number;
        middle: number;
        big: number;
    };
    size: {
        small: number;
        middle: number;
        big: number;
    };
    image: string | null;
    updatedAt: string;
    createdAt: string;
}