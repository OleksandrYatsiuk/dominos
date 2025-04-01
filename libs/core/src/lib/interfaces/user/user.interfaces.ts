export interface UserView {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    role: string;
    birthday: string;
    phone: string | null;
    image: string | null;
    latitude: number | null;
    longitude: number | null,
    createdAt: string;
    updatedAt: string;
}