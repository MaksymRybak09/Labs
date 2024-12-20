import { EventObserver } from "./lightElementNode";
import { LightNode } from "./lightNode";

export class LightTextNode extends LightNode {
    private eventObservers: EventObserver[] = [];
    private events: string[] = [];

    constructor(private text: string) {
        super();
    }

    render(): string {
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
}