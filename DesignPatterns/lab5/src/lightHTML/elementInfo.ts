import { ClosingType, DisplayType } from "./lightElementNode";

export class ElementInfo {
    constructor(
        public readonly tagName: string,
        public readonly displayType: DisplayType,
        public readonly closingType: ClosingType,
    ) {}
}