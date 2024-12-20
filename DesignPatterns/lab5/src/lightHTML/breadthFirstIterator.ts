import { LightElementNode } from "./lightElementNode";
import { LightNode } from "./lightNode";
import { LightNodeIterator } from "./lightNodeIterator";

export class BreadthFirstIterator implements LightNodeIterator {
    private queue: LightNode[] = [];
    
    constructor(root: LightNode) {
        this.queue.push(root);
    }

    hasNext(): boolean {
        return this.queue.length > 0;
    }

    next(): LightNode {
        if (!this.hasNext()) {
            throw new Error("No more nodes.");
        }

        const current = this.queue.shift()!;
        
        if (current instanceof LightElementNode) {
            this.queue.push(...current.getChildren());
        }

        return current;
    }
}