import { LightNode } from "./lightNode";

export interface LightNodeIterator {
    hasNext(): boolean;
    next(): LightNode;
}