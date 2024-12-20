import { Shape } from "./shape";

export interface IRenderer {
    renderShape(shape: Shape): void;
}