import { Injectable } from '@angular/core';
import { VehicleService } from '../core/vehicle.service';
import { Car } from './car';

@Injectable()
export class CarService extends VehicleService{

  constructor() { 
    super();
  }

  getVehicle() : Car {
    return this.vehicle = {
      ...this.vehicle,
      color: 'red',
      cv: 100
    } as Car;
  }

}