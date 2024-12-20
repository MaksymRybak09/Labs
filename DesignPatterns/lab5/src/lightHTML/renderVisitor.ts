import { IVisitor } from "./IVisitor";
import { LightElementNode } from "./lightElementNode";
import { LightTextNode } from "./lightTextNode";

export class RenderVisitor implements IVisitor {
    visitTextNode(node: LightTextNode): void {
        console.log("Rendering text:", node.render());
    }

    visitElementNode(node: LightElementNode): void {
        console.log("Rendering element:", node.render());
    }
}