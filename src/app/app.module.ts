import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ExportModule } from "./export/export.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TestComponent } from "./export/test/test.component";
import { TemplateLoginFormComponent } from "./form/template-login-form.component";
import { SignupFormComponent } from "./form/reactive/signup-form.component";

import { EmailvalidatorDirective } from "./directives/emailvalidator/email-validator.directive";

@NgModule({
  imports: [BrowserModule, FormsModule, ExportModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
