import { UserSupport } from "./userSupport";

export class OsSupport extends UserSupport {
    public handle(request: string): void {
        if (request === "Os error") {
            console.log("The oparation system error has been fixed!");
        } else {
            super.handle(request);
        }
    }
}