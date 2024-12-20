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

export type EventObserver = {
    event: string,
    func: any,
};


export class LightElementNode extends LightNode {
    private children: LightNode[] = [];
    private elementInfo: ElementInfo;
    private eventObservers: EventObserver[] = [];
    private events: string[] = [];

    constructor(
        private tagName: string,
        private displayType: DisplayType,
        private closingType: ClosingType,
        public cssClasses: string[] = [],
    ) {
        super();
        this.elementInfo = ElementInfoFactory.getElementInfo(tagName, displayType, closingType);
    }

    addChild(child: LightNode): void {
        if (this.closingType === ClosingType.SingleTag) {
            throw new Error('The single tag cannot have a child.');
        }
        this.children.push(child);
    }

    render(): string {
        let openingTag = `<${this.elementInfo.tagName} class="${this.cssClasses.join(' ')}"`;

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

    attach(event: string, func: any): void {
        if (event === 'click' || event === 'scroll' || event === 'mousemove') {
            this.events.push(event);
            this.eventObservers.push({event, func});
            return;
        }
        throw new Error('Invalid event');
    }

    click() {
        if (!this.events.includes('click')) {
            throw new Error('Invalid event');
        }
        this.notify('click');
    }

    scroll() {
        if (!this.events.includes('scroll')) {
            throw new Error('Invalid event');
        }
        this.notify('scroll');
    }

    mousemove() {
        if (!this.events.includes('mousemove')) {
            throw new Error('Invalid event');
        }
        this.notify('mousemove');
    }

    notify(event:  string): void {
        this.eventObservers.forEach(observer => {
            if (observer.event === event) {
                observer.func(this);
            }
        });
    }
}