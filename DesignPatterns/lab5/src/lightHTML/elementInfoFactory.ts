import { ElementInfo } from "./elementInfo";
import { ClosingType, DisplayType } from "./lightElementNode";

export class ElementInfoFactory {
    private static  elementInfos: Map<string, ElementInfo> = new Map();

    static getElementInfo(tagName: string, displayType: DisplayType, closingType: ClosingType): ElementInfo {
        const key = this.getKey(tagName, displayType, closingType);
        
        if (!this.elementInfos.has(key)) {
            this.elementInfos.set(key, new ElementInfo(tagName, displayType, closingType));
        }
        
        return this.elementInfos.get(key)!;
    }
    
    private static getKey(tagName: string, displayType: DisplayType, closingType: ClosingType): string {
        return `${tagName}:${displayType}:${closingType}`;
    }
}