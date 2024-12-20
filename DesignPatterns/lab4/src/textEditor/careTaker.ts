import { IMemento } from "./IMemento";
import { TextEditor } from "./textEditor";
import { TextEditorMemento } from "./textEditorMomento";

export class Caretaker {
    private mementos: IMemento[] = [];

    private textEditor: TextEditor;

    constructor(textEditor: TextEditor) {
        this.textEditor = textEditor;
    }

    public backup(): void {
        this.mementos.push(this.textEditor.save());
    }
    
    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop() as IMemento;
        
        this.textEditor.restore(memento);
    }

    public showHistory(): void {
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}