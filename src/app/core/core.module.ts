import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from './vehicle.service';
import { VehicleComponent } from './vehicle/vehicle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehicleComponent],
  exports: [VehicleComponent],
  providers: [VehicleService]
})
export class CoreModule { }