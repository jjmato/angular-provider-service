import { Vehicle } from "../core/vehicle";

export interface Car extends Vehicle {
  color: string;
  doors: number;
  cv: number;
}
