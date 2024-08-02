import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidations{

    static equalTo(otherField: string): ValidatorFn{ //otherField = email
        return (control: AbstractControl): ValidationErrors | null => {
            const fieldValue = control.value //fieldValue = confirmaçãoEmail.value
            const otherFieldValue = control.root.get(otherField)?.value //otherFieldValue = email.value

            if(fieldValue !== otherFieldValue){ //comparação
                return {equalTo: true}
            }

            return null
        }
    }
}