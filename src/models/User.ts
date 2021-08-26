export interface User {
    id: string;
    login: string;
    name: string;
    role: 'admin' | 'user';
    age: number;
    birth: Date;
}