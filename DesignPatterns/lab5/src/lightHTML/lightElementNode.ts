import { ElementInfo } from "./elementInfo";
import { LightNode } from "./lightNode";
import { ElementInfoFactory } from './elementInfoFactory';
import { ICommand } from "./ICommand";
import { IState } from "./IState";
import { IVisitor } from "./IVisitor";
import { LightTextNode } from "./lightTextNode";

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
    private commands: { [key: string]: ICommand } = {};
    private state: IState | null = null;

    constructor(
        private tagName: string,
        private displayType: DisplayType,
        private closingType: ClosingType,
        public cssClasses: string[] = [],
    ) {
        super();
        this.elementInfo = ElementInfoFactory.getElementInfo(tagName, displayType, closingType);
        this.onCreated();
    }

    accept(visitor: IVisitor): void {
        if (this instanceof LightTextNode) {
            visitor.visitTextNode(this);
        } else if (this instanceof LightElementNode) {
            visitor.visitElementNode(this);
        }
    }

    setState(state: IState): void {
        this.state = state;
    }

    renderByState(): string {
        if (this.state === null) {
            throw new Error('The state is not set.');
        }
        return this.state.render();
    }

    addChild(child: LightNode): void {
        if (this.closingType === ClosingType.SingleTag) {
            throw new Error('The single tag cannot have a child.');
        }
        this.children.push(child);
        child.onInserted();
    }

    getChildren(): LightNode[] {
        return this.children;
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
        
        this.onRendered();
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

    setCommand(event: string, command: ICommand) {
        this.commands[event] = command;
    }

    handleEvent(event: string) {
        if (this.commands[event]) {
            this.commands[event].execute();
        } else {
            console.log("No command for event:", event);
        }
    }

    onCreated() {
        console.log(`Element ${this.elementInfo.tagName} created.`);
    }

    onInserted() {
        console.log(`Element ${this.elementInfo.tagName} inserted.`);
    }

    onRendered() {
        console.log(`Element ${this.elementInfo.tagName} rendered.`);
    }
}