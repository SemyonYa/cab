export class User {
    id: string;
    firstName: string;
    lastName: string;
    login: string;
    role: 'admin' | 'user';
    birth: Date;
    activated: boolean;
}