import { Aircraft } from "./aircraft";
import { Runway } from "./runway";

export class CommandCentrer {
    private _runways: Runway[] = [];
    private _aircrafts: Aircraft[] = [];

    constructor(runways: Runway[], aircrafts: Aircraft[]) {
        this._runways.push(...runways);
        this._aircrafts.push(...aircrafts);
    }

    public landAnAircraft(aircraft: Aircraft, runway: Runway): void {
        if (this._aircrafts.includes(aircraft) && this._runways.includes(runway)) {
            if (runway.IsBusyWithAircraft) {
                throw new Error('The runway is busy with an aircraft.');
            }

            runway.IsBusyWithAircraft = aircraft;
            aircraft.IsTakingOff = false;
            aircraft.CurrentRunway = runway;
    
            aircraft.land();
            runway.HighLightRed();
            return;
        }
        throw new Error('The aircraft or runway does not exist.');
    }

    public takeOffAnAircraft(aircraft: Aircraft, runway: Runway): void {
        if (this._aircrafts.includes(aircraft) && this._runways.includes(runway)) {
            runway.IsBusyWithAircraft = null;
            aircraft.CurrentRunway = null;

            runway.HighLightGreen();
            aircraft.IsTakingOff = true;
            aircraft.takeOff();

            return;
        }
        throw new Error('The aircraft or runway does not exist.');
    }
}
