import { IState } from "./IState";

export class DisplayState implements IState {
    render(): string {
        return "Display State type";
    }
}