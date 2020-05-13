import { Vehicle } from "../core/vehicle";

export interface Car extends Vehicle {
  color: string;
  cv: number;
}
