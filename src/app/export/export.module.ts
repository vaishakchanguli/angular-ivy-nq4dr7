import { NgModule } from "@angular/core";

import { TestComponent } from "./test/test.component";

@NgModule({
  declarations: [TestComponent],
  exports: [TestComponent],
  imports: [],
  providers: [],
  bootstrap: []
})
export class ExportModule {}
