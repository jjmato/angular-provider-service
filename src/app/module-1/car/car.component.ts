import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../core/vehicle.service';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [{ provide: VehicleService, useClass: CarService }]
})
export class CarComponent implements OnInit {

  car = { };

  constructor(
    private vehicleSrv: VehicleService
  ) { }

  ngOnInit() {  
    console.log( 'car',  this.vehicleSrv );
    this.car = this.vehicleSrv.getVehicle();
  }

}