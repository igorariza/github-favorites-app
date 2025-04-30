import { User } from '../types';

const AUTH_KEY = 'authUser';

export const signUp = (userData: User) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
};

export const login = (userData: User) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
};

export const logout = () => {
    localStorage.removeItem(AUTH_KEY);
};

export const getCurrentUser = (): User | null => {
    const user = localStorage.getItem(AUTH_KEY);
    return user ? JSON.parse(user) : null;
};