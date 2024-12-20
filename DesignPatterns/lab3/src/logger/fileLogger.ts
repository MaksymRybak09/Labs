export class FileLogger {
    write(text: string, color: string = '\x1b[0m'): void {
        console.log(color, text);
        console.log('\x1b[0m');
    }

    writeLine(text: string, color: string = '\x1b[0m'): void {
        console.log(color, `${text}\n`);
    }
}