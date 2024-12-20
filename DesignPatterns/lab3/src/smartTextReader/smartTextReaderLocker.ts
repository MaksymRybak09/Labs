import { ISmartTextReader } from './iSmartTextReader';
import { SmartTextReader } from './smartTextReader';

export class SmartTextReaderLocker implements ISmartTextReader {
    private smartTextReader: SmartTextReader;
    private fileLock: string;

    constructor(fileLock: string) {
        this.smartTextReader = new SmartTextReader();
        this.fileLock = fileLock;
    }

    read(filePath: string): string[][] {
        if (filePath === this.fileLock) {
            console.log('Access denied');
            return [];
        }
        return this.smartTextReader.read(filePath);
    }
}