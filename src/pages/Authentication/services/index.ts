import jwt_decode from 'jwt-decode';
import nookies, { destroyCookie } from 'nookies';

interface UserInfo{
    id: string
    nome: string
    email: string
    postoId: string
    sub: string
}

export const logout = () => {
    destroyCookie(null, 'token', { path: '/' });
};

export const isAuthenticated = () => {
    const { token } = nookies.get(null);
    return !!token;
};


export const getUserInfo = (): UserInfo | null => {
    const cookies = nookies.get();
    const token = cookies.token;
    if (token) {
        return jwt_decode(token) as UserInfo;
    }
    return null;
};