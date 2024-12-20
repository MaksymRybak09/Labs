import { ElementInfo } from "./elementInfo";

export class ElementInfoFactory {
    private static  elementInfos: Map<string, ElementInfo> = new Map();

    static getElementInfo(tagName: string, cssClasses: string[]): ElementInfo {
        const key = this.getKey(tagName, cssClasses);
        
        if (!this.elementInfos.has(key)) {
            this.elementInfos.set(key, new ElementInfo(tagName, cssClasses));
        }
        
        return this.elementInfos.get(key)!;
    }
    
    private static getKey(tagName: string, cssClasses: string[]): string {
        return `${tagName}:${cssClasses.join(',')}`;
    }
}