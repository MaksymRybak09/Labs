import { IRenderer } from "./IRenderer";
import { Shape } from "./shape";

export class VectorRenderer implements IRenderer {
    renderShape(shape: Shape): void {
        console.log(`Drawing ${shape.constructor.name} as vectors`);
    }
}