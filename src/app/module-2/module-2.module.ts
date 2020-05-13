import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoatComponent } from './boat/boat.component';
import { BoatService } from './boat.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoatComponent],
  exports: [BoatComponent],
  providers: [BoatService]
})
export class Module2Module { }