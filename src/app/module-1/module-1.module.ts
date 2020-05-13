import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarComponent } from "./car/car.component";
import { CarService } from "./car.service";
import { VehicleService } from "../core/vehicle.service";

@NgModule({
  imports: [CommonModule],
  declarations: [CarComponent],
  exports: [CarComponent],
  providers: [{ provide: VehicleService, useValue: new CarService() }]
})
export class Module1Module {}
