import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import { CarService } from './car.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarComponent],
  exports: [CarComponent],
  providers: [CarService]
})
export class Module1Module { }