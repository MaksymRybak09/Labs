import { Runway } from "./runway";

export class Aircraft {
    public Name: string;
    public CurrentRunway: Runway | null = null;
    public IsTakingOff: boolean = false;

    constructor(name: string) {
        this.Name = name;
    }

    public land(): void {
        console.log(`Aircraft ${this.Name} is landing.`);
    }

    public takeOff(): void {
        console.log(`Aircraft ${this.Name} is taking off.`);
    }
}