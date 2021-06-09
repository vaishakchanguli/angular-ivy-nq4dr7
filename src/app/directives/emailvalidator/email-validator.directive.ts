import { Directive } from "@angular/core";
import {
  Validator,
  NG_VALIDATORS,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";

@Directive({
  selector: "[emailValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: EmailvalidatorDirective,
      multi: true
    }
  ]
})
export class EmailvalidatorDirective implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.emailValidator();
  }

  validate(control: AbstractControl) {
    return this.validator(control);
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return null;
      }
      if (!control.value.endsWith("@gmail.com")) {
        return {
          emailValidator: { valid: false }
        };
      } else {
        return null;
      }
    };
  }
}
