import { IStrategy } from './IStrategy';

export class LightImage {
    private strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: IStrategy) {
        this.strategy = strategy;
    }

    print(url: string): void {
        this.strategy.print(url);
    }
}