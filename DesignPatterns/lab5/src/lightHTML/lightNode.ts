import { IState } from "./IState";
import { IVisitor } from "./IVisitor";
import { LightElementNode } from "./lightElementNode";
import { LightTextNode } from "./lightTextNode";

export abstract class LightNode {
    abstract render(): string;

    abstract notify(event: string): void;

    abstract onCreated(): void;

    abstract onInserted(): void;

    abstract onRendered(): void;

    abstract setState(state: IState): void;

    abstract renderByState(): string;

    abstract accept(visitor: IVisitor): void;
}