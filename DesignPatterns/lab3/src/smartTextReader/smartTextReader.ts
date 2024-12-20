import { ISmartTextReader } from "./iSmartTextReader";

export class SmartTextReader implements ISmartTextReader {
    read(filePath: string): string[][] {
        console.log(`Read file - ${filePath}`);
        return [];
    }
}