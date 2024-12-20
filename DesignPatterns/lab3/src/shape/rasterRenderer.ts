import { IRenderer } from "./IRenderer";
import { Shape } from "./shape";

export class RasterRenderer implements IRenderer {
    renderShape(shape: Shape): void {
        console.log(`Drawing ${shape.constructor.name} as pixels`);
    }
}