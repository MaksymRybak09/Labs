import { LightElementNode } from "./lightElementNode";
import { LightTextNode } from "./lightTextNode";

export interface IVisitor {
    visitTextNode(node: LightTextNode): void;
    visitElementNode(node: LightElementNode): void;
}