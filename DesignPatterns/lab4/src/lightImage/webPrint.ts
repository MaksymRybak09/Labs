import { IStrategy } from './IStrategy';

export class WebPrint implements IStrategy {
    print(url: string): void {
        if (url.startsWith("https://")) {
            return console.log('Printed image from the internet');
        }
        throw new Error('This is not a link');
    }
}