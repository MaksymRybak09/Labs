import { Hero } from "./hero";
import { Inventory } from "./inventory";

export class Artifact extends Inventory {
    hero: Hero;
    damage: number;
    health: number;

    constructor(hero: Hero, damage: number, health: number) {
        super();
        this.hero = hero;
        this.damage = damage;
        this.health = health;
    }

    hit(): number {
        return this.hero.hit() + this.damage;
    }

    protect(): number {
        return this.hero.hit() + this.health;
    }
}