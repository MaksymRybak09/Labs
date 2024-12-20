import { IState } from './IState';

export class EditState implements IState {
    render(): string {
        return "Edit State type";
    }
}