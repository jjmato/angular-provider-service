import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoatComponent } from "./boat/boat.component";
import { BoatService } from "./boat.service";
import { VehicleService } from "../core/vehicle.service";

@NgModule({
  imports: [CommonModule],
  declarations: [BoatComponent],
  exports: [BoatComponent],
  providers: [{ provide: VehicleService, useFactory: () => new BoatService() }]
})
export class Module2Module {}
