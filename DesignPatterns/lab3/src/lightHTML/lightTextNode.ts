import { LightNode } from "./lightNode";

export class LightTextNode extends LightNode {
    constructor(private text: string) {
        super();
    }

    render(): string {
        return this.text;
    }
}