import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../core/vehicle.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car = { };

  constructor(
    private vehicleSrv: VehicleService
  ) { }

  ngOnInit() {  
    console.log( this.vehicleSrv );
    this.car = this.vehicleSrv.getVehicle();
  }

}