import { IStrategy } from './IStrategy';

export class FsPrint implements IStrategy {
    print(url: string): void {
        if (!url.startsWith("https://")) {
            return console.log('Printed image from file system');
        }
        throw new Error('This is not a file system path');
    }
}