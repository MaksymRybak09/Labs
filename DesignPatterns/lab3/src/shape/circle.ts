import { IRenderer } from "./IRenderer";
import { Shape } from "./shape";

export class Circle extends Shape {
    constructor(renderer: IRenderer) {
        super(renderer);
    }

    draw(): void {
        this.renderer.renderShape(this);
    }
}