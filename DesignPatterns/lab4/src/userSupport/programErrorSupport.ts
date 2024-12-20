import { UserSupport } from "./userSupport";

export class ProgramErrorSupport extends UserSupport {
    public handle(request: string): void {
        if (request === "Program error") {
            console.log("The error has been fixed!");
        } else {
            super.handle(request);
        }
    }
}