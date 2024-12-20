export class Logger {
    log(text: string): void {
        console.log('\x1b[32m', text);
        console.log('\x1b[0m');
    }
    
    warn(text: string): void {
        console.log('\x1b[33m', text);
        console.log('\x1b[0m');
    }
    
    error(text: string): void {
        console.log('\x1b[31m', text);
        console.log('\x1b[0m');
    }
}