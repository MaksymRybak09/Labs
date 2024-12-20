import { UserSupport } from "./userSupport";

export class DeviceErrorSupport extends UserSupport {
    public handle(request: string): void {
        if (request === "Device error") {
            console.log("The device error has been fixed!");
        } else {
            super.handle(request);
        }
    }
}