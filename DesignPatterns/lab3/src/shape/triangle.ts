import { IRenderer } from "./IRenderer";
import { Shape } from "./shape";

export class Triangle extends Shape {
    constructor(renderer: IRenderer) {
        super(renderer);
    }

    draw(): void {
        this.renderer.renderShape(this);
    }
}