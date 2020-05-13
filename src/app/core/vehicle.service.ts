import { Injectable } from "@angular/core";
import { Vehicle } from "./vehicle";

export class VehicleService {

  vehicle: Vehicle;

  constructor() {
    this.vehicle = this.getCommon();
  }

  getCommon(): Vehicle {
    return { id: new Date().getTime() };
  }
}
