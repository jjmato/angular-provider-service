import { Injectable } from '@angular/core';
import { VehicleService } from '../core/vehicle.service';
import { Car } from './car';

@Injectable()
export class CarService extends VehicleService{

  constructor() { 
    super();
  }

  getCar() : Car {
    return this.vehicle = {
      ...this.vehicle,
      
    }
  }

}