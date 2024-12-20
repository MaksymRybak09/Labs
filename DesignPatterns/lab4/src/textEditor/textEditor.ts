import { IMemento } from "./IMemento";
import { TextDocument } from "./textDocument";
import { TextEditorMemento } from "./textEditorMomento";

export class TextEditor {
    constructor(
        private textDocument: TextDocument,
    ) {}

    public render(): string {
        return this.textDocument.content;
    }

    public addContent(content: string) {
        this.textDocument.content += content;
    }

    public save(): IMemento {
        return new TextEditorMemento(this.textDocument.content);
    }
    public restore(memento: IMemento): void {
        this.textDocument.content = memento.getState();
    }
}