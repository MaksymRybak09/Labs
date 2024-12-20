import { ElementInfo } from "./elementInfo";
import { LightNode } from "./lightNode";
import { ElementInfoFactory } from './elementInfoFactory';

export enum DisplayType {
    Block,
    Inline,
}

export enum ClosingType {
    SingleTag,
    TagWithClosing,
}

export class LightElementNode extends LightNode {
    private children: LightNode[] = [];
    private elementInfo: ElementInfo;

    constructor(
        tagName: string,
        private displayType: DisplayType,
        private closingType: ClosingType,
        cssClasses: string[] = [],
    ) {
        super();
        this.elementInfo = ElementInfoFactory.getElementInfo(tagName, cssClasses);
    }

    addChild(child: LightNode): void {
        if (this.closingType === ClosingType.SingleTag) {
            throw new Error('The single tag cannot have a child.');
        }
        this.children.push(child);
    }

    render(): string {
        let openingTag = `<${this.elementInfo.tagName} class="${this.elementInfo.cssClasses.join(' ')}"`;

        if (this.closingType === ClosingType.SingleTag) {
            openingTag += '/>';
            return openingTag;
        }

        openingTag += '>';
        let closingTag = `</${this.elementInfo.tagName}>`;

        let childrenHTML = '';
        for (const child of this.children) {
            childrenHTML += child.render();
        }

        return openingTag + childrenHTML + closingTag;
    }
}