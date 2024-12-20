import { ISmartTextReader } from "./iSmartTextReader";
import { SmartTextReader } from "./smartTextReader";

export class SmartTextReaderChecker implements ISmartTextReader {
    private smartTextReader: SmartTextReader;

    constructor() {
        this.smartTextReader = new SmartTextReader();
    }

    read(filePath: string): string[][] {
        console.log(`Opening file ${filePath}`);
        this.smartTextReader.read(filePath);
        console.log('Read successfully');
        console.log('Number of lines - some number');
        console.log('Number of characters - some number');
        console.log(`Closing file ${filePath}`);
        return [];
    }
}