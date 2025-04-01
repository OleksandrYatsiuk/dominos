export interface AuthLoginBody {
    username: string;
    password: string;
}

export interface AuthLoginResponse {
    token: string;
    expiredAt: string;
}