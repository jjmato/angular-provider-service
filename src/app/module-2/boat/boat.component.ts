import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../core/vehicle.service';
import { BoatService } from '../boat.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css']
})
export class BoatComponent implements OnInit {

  boat = {}

  constructor(
    private vehicleSrv: BoatService,
  ) { }

  ngOnInit() {
    console.log( 'boat', this.vehicleSrv )
    this.boat = this.vehicleSrv.getVehicle();
  }

}