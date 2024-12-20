import { Hero } from "./hero";
import { Inventory } from "./inventory";

export class Armor extends Inventory {
    hero: Hero;
    health: number;

    constructor(hero: Hero, health: number) {
        super();
        this.hero = hero;
        this.health = health;
    }

    hit(): number {
        return this.hero.hit();
    }

    protect(): number {
        return this.hero.hit() + this.health;
    }
}