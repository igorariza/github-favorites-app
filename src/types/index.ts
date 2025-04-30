export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
}

export interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    signup: (username: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface Repository {
    id: string;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
}