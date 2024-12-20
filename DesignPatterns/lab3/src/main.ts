import { Armor } from "./hero/armor";
import { Artifact } from "./hero/artifact";
import { Hero } from "./hero/hero";
import { Warrior } from "./hero/warrior";
import { Weapon } from "./hero/weapon";
import { ClosingType, DisplayType, LightElementNode } from "./lightHTML/lightElementNode";
import { LightTextNode } from "./lightHTML/lightTextNode";
import { Adapter } from "./logger/adapter";
import { FileLogger } from "./logger/fileLogger";
import { Logger } from "./logger/logger";
import { Circle } from "./shape/circle";
import { RasterRenderer } from "./shape/rasterRenderer";
import { Square } from "./shape/square";
import { Triangle } from "./shape/triangle";
import { VectorRenderer } from "./shape/vectorRenderer";
import { SmartTextReader } from "./smartTextReader/smartTextReader";
import { SmartTextReaderChecker } from "./smartTextReader/smartTextReaderChecker";
import { SmartTextReaderLocker } from "./smartTextReader/smartTextReaderLocker";

const div = new LightElementNode('lightDiv', DisplayType.Block, ClosingType.TagWithClosing, ['container']);
const h1 = new LightElementNode('lightH1', DisplayType.Block, ClosingType.TagWithClosing, ['header']);
const p1 = new LightTextNode('This is a paragraph inside a div.');

div.addChild(h1);
div.addChild(p1);

console.log(div.render());

const img = new LightElementNode('lightImg', DisplayType.Inline, ClosingType.SingleTag);

try {
    console.log(img.render());
    img.addChild(h1);
} catch (error) {
    console.error(error);
}

const rasterRenderer = new RasterRenderer();
const vectorRenderer = new VectorRenderer();

const circle = new Circle(rasterRenderer);
const square = new Square(vectorRenderer);
const triangle = new Triangle(rasterRenderer);

circle.draw();
square.draw();
triangle.draw();

let warrior: Hero = new Warrior(100, 100);
console.log(`Warrior hits - ${warrior.hit()}`);
console.log(`Warrior protects - ${warrior.protect()}`);

warrior = new Armor(warrior, 50);
console.log(`Warrior with armor hits - ${warrior.hit()}`);
console.log(`Warrior with armor protects - ${warrior.protect()}`);

warrior = new Weapon(warrior, 50);
console.log(`Warrior with weapon hits - ${warrior.hit()}`);
console.log(`Warrior with weapon protects - ${warrior.protect()}`);

warrior = new Armor(new Weapon(warrior, 100), 100);
console.log(`Warrior with weapon and armor hits - ${warrior.hit()}`);
console.log(`Warrior with weapon and armor protects - ${warrior.protect()}`);

warrior = new Artifact(warrior, 20, 10);
console.log(`Warrior with artifact hits - ${warrior.hit()}`);
console.log(`Warrior with artifact protects - ${warrior.protect()}`);

const logger = new Logger();

logger.log('Green text');
logger.warn('Yellow text');
logger.error('Red text');
console.log('Original text');

const fileLogger = new FileLogger();

fileLogger.write('Wrote text');
fileLogger.writeLine('Wrote textline');

const adapteeFileLogger = new Adapter(fileLogger);

adapteeFileLogger.log('Green file text');
adapteeFileLogger.warn('Yellow file text');
adapteeFileLogger.error('Red file text');
adapteeFileLogger.logLine('Green file textline');
adapteeFileLogger.warnLine('Yellow file textline');
adapteeFileLogger.errorLine('Red file textline');

const filePath = 'example.txt';
const smartTextReader = new SmartTextReader();
smartTextReader.read(filePath);

const smartTextReaderChecker = new SmartTextReaderChecker();
smartTextReaderChecker.read(filePath);

const smartTextReaderLocker = new SmartTextReaderLocker(filePath);
smartTextReaderLocker.read(filePath);
smartTextReaderLocker.read('another' + filePath);