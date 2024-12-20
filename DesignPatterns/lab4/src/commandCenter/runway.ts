import { Aircraft } from "./aircraft";

export class Runway {
    public readonly Id: string = this.generateUniqueId();
    public IsBusyWithAircraft: Aircraft | null = null;

    constructor() {}

    private generateUniqueId(): string {
        return Math.round(Math.random() * 100).toString();
    }

    public CheckIsActive(): boolean {
        let result: boolean = false;
        if (this.IsBusyWithAircraft !== null) {
            result = this.IsBusyWithAircraft.IsTakingOff;
        }
        return result;
    }

    public HighLightRed(): void {
        console.log(`Runway ${this.Id} is busy!`);
    }

    public HighLightGreen(): void {
        console.log(`Runway ${this.Id} is free!`);
    }
}
