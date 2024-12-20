import { IRenderer } from "./IRenderer";

export abstract class Shape {
    protected renderer: IRenderer;

    constructor(renderer: IRenderer) {
        this.renderer = renderer;
    }

    abstract draw(): void;
}