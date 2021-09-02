import { ValidatorFn } from '@angular/forms';


export const passwordValidator: ValidatorFn = (fg) => {
    if ((fg.get('password').value as string).trim() != (fg.get('passwordConfirm').value as string).trim()) {
        return { password: true };
    }
    return null;
};