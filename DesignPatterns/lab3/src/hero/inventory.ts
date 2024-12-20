import { Hero } from "./hero";

export abstract class Inventory extends Hero {
    abstract hit(): number;
    abstract protect(): number;
}