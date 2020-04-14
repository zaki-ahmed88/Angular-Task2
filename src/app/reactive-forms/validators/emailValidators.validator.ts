import { ValidationErrors, AbstractControl } from '@angular/forms';


export class EmailValidators
{

    static noSpacePermitted(control: AbstractControl): ValidationErrors | null
    {
        let getValue: string = control.value;

        if(getValue.indexOf(' ') != -1)
        {
            return {isSpace: true}
        }
        else return null;
    }

}