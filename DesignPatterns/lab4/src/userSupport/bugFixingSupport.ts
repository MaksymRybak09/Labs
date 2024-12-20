import { UserSupport } from "./userSupport";

export class BugFixingSupport extends UserSupport {
    public handle(request: string): void {
        if (request === "Bug") {
            console.log("The bug has been fixed!");
        } else {
            super.handle(request);
        }
    }
}