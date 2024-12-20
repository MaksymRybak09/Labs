import { LightElementNode } from "./lightElementNode";
import { LightNode } from "./lightNode";
import { LightNodeIterator } from "./lightNodeIterator";

export class DepthFirstIterator implements LightNodeIterator {
    private stack: LightNode[] = [];
    
    constructor(root: LightNode) {
        this.stack.push(root);
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }

    next(): LightNode {
        if (!this.hasNext()) {
            throw new Error("No more nodes.");
        }

        const current = this.stack.pop()!;
        
        if (current instanceof LightElementNode) {
            // Add children to stack in reverse order
            for (let i = current.getChildren().length - 1; i >= 0; i--) {
                this.stack.push(current.getChildren()[i]);
            }
        }

        return current;
    }
}