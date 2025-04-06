export interface PromotionView {
    id: string;
    name: {
        uk: string;
        en: string;
    },
    description: {
        uk: string;
        en: string;
    },
    image: string | null;
    isActive: boolean;
    startedAt: string | null;
    endedAt: string | null;
    createdAt: string;
    updatedAt: string;
}