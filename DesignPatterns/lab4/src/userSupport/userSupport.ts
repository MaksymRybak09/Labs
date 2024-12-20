import { IUserSupport } from "./iUserSupport";

export abstract class UserSupport implements IUserSupport {
    private nextHandler?: IUserSupport;

    public setNext(handler: IUserSupport): IUserSupport {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        } else {
            console.log(`No handler for request: ${request}`);
        }
    }
}