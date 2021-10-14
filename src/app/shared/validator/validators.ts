import { FormControl } from "@angular/forms";

export const nombreApellidoPattern: string = '([a-zA-A-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const noPuedeSerAsdf = (control: FormControl) => {
    const value = control.value?.trim().toLowerCase();

    return (value === 'asdf')
        ? { noAsdf: true }
        : null
}