import { IState } from "./IState";
import { IVisitor } from "./IVisitor";
import { EventObserver, LightElementNode } from "./lightElementNode";
import { LightNode } from "./lightNode";

export class LightTextNode extends LightNode {
    private eventObservers: EventObserver[] = [];
    private events: string[] = [];
    private state: IState | null = null;

    constructor(private text: string) {
        super();
        this.onCreated();
    }

    accept(visitor: IVisitor): void {
        if (this instanceof LightTextNode) {
            visitor.visitTextNode(this);
        } else {
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

    render(): string {
        this.onRendered();
        return this.text;
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

    onCreated() {
        console.log(`Element created.`);
    }

    onInserted() {
        console.log(`Element inserted.`);
    }

    onRendered() {
        console.log(`Element rendered.`);
    }
}