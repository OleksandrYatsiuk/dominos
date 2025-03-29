
export interface PromotionView {
    id: string;
    name: string;
    description: string;
    image: string | null,
    isActive: boolean,
    startedAt: string | null;
    endedAt: string | null;
    createdAt: string;
    updatedAt: string;
}