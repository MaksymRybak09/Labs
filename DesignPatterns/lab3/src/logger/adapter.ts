import { FileLogger } from "./fileLogger";
import { Logger } from "./logger";

export class Adapter extends Logger {
    constructor(
        private fileLooger: FileLogger,
    ) { super() }

    log(text: string): void {
        this.fileLooger.write(text, '\x1b[32m');
    }
    
    warn(text: string): void {
        this.fileLooger.write(text, '\x1b[33m');
    }
    
    error(text: string): void {
        this.fileLooger.write(text, '\x1b[31m');
    }

    logLine(text: string): void {
        this.fileLooger.writeLine(text, '\x1b[32m');
    }
    
    warnLine(text: string): void {
        this.fileLooger.writeLine(text, '\x1b[33m');
    }
    
    errorLine(text: string): void {
        this.fileLooger.writeLine(text, '\x1b[31m');
    }
}