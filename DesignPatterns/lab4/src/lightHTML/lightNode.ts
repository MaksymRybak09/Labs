export abstract class LightNode {
    abstract render(): string;

    abstract notify(event: string): void;
}