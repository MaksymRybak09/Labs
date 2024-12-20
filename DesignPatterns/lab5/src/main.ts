import { ClickCommand } from "./lightHTML/clickCommand";
import { DepthFirstIterator } from "./lightHTML/depthFirstIterator";
import { DisplayState } from "./lightHTML/displayState";
import { EditState } from "./lightHTML/editState";
import { ClosingType, DisplayType, LightElementNode } from "./lightHTML/lightElementNode";
import { RenderVisitor } from "./lightHTML/renderVisitor";

const rootNode = new LightElementNode("lightDiv", DisplayType.Block, ClosingType.TagWithClosing);
const childNode = new LightElementNode("lightSpan", DisplayType.Inline, ClosingType.TagWithClosing);

rootNode.addChild(childNode);

const iterator = new DepthFirstIterator(rootNode);
while (iterator.hasNext()) {
    console.log(iterator.next().render());
}

rootNode.setCommand('click', new ClickCommand());
rootNode.handleEvent('click');
rootNode.handleEvent('scroll');

try {
    rootNode.renderByState();
} catch (err) {
    console.log(err);
}

rootNode.setState(new EditState());
console.log(rootNode.renderByState());

rootNode.setState(new DisplayState());
console.log(rootNode.renderByState());

rootNode.accept(new RenderVisitor());