import { FormControl, FormGroup, Validators } from "@angular/forms";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    login: string;
    role: 'admin' | 'user';
    birth: Date;
    activated: boolean;
}

// export const userForm: FormGroup = new FormGroup({
//     'login': new FormControl('qwe', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]),
//     'firstName': new FormControl('qwe', [Validators.required]),
//     'lastName': new FormControl('qwe', [Validators.required]),
//     'role': new FormControl('user', [Validators.required]),
//     'birth': new FormControl('2020-12-01', [Validators.required, Validators.pattern(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)]),
//     'activated': new FormControl(true),
// });