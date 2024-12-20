import { Hero } from "./hero";

export class Warrior extends Hero {
    constructor(
        protected damage: number,
        protected health: number,
    ) { super(); };

    hit(): number {
        return this.damage;
    }

    protect(): number {
        return this.health;
    }
}