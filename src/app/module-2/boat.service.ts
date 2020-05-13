import { Injectable } from "@angular/core";
import { VehicleService } from "../core/vehicle.service";
import { Boat } from "./boat";

@Injectable()
export class BoatService extends VehicleService {
  constructor() {
    super();
  }

  getVehicle(): Boat{
    return {
      ...this.vehicle,
      remos: true,
    }
  }
}
