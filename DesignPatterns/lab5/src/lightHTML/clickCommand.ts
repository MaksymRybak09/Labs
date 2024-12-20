import { ICommand } from "./ICommand";

export class ClickCommand implements ICommand {
    execute() {
        console.log("Element clicked!");
    }
}