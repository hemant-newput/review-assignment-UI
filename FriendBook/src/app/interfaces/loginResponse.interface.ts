export interface loginResponse {
    validate: boolean;
    message: string;
    userID: number;
    token: string;
    refreshToken: string;
}