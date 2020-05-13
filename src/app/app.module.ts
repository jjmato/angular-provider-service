import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CoreModule } from "./core/core.module";
import { Module1Module } from "./module-1/module-1.module";
import { Module2Module } from "./module-2/module-2.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    Module1Module,
    Module2Module
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
