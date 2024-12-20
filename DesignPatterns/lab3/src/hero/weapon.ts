import { Hero } from "./hero";
import { Inventory } from "./inventory";

export class Weapon extends Inventory {
    hero: Hero;
    damage: number;

    constructor(hero: Hero, damage: number) {
        super();
        this.hero = hero;
        this.damage = damage;
    }

    hit(): number {
        return this.hero.hit() + this.damage;
    }

    protect(): number {
        return this.hero.hit();
    }
}