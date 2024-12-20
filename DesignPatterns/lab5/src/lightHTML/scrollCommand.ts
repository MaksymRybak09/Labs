import { ICommand } from "./ICommand";

export class ScrollCommand implements ICommand {
    execute() {
        console.log("Element scrolled!");
    }
}