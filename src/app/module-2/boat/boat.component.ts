import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../core/vehicle.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css']
})
export class BoatComponent implements OnInit {

  boat = {}

  constructor(
    private vehicleSrv: VehicleService,
  ) { }

  ngOnInit() {
    this.boat = this.vehicleSrv.getVehicle();
  }

}