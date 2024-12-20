import { FsPrint } from './lightImage/fsPrint';
import { DeviceErrorSupport } from './userSupport/deviceErrorSupport';
import { ProgramErrorSupport } from './userSupport/programErrorSupport';
import { BugFixingSupport } from './userSupport/bugFixingSupport';
import { OsSupport } from './userSupport/osSupport';
import { Aircraft } from './commandCenter/aircraft';
import { Runway } from './commandCenter/runway';
import { CommandCentrer } from './commandCenter/commandCenter';
import { ClosingType, DisplayType, LightElementNode } from './lightHTML/lightElementNode';
import { LightImage } from './lightImage/lightImage';
import { WebPrint } from './lightImage/webPrint';
import { TextDocument } from './textEditor/textDocument';
import { TextEditor } from './textEditor/textEditor';
import { Caretaker } from './textEditor/careTaker';

const problems = ["Bug", "Program error", "Os error", "Device error", "Headeche"];

const bugFixingSupport = new BugFixingSupport();
const programErrorSupport = new ProgramErrorSupport();
const osSupport = new OsSupport();
const deviceErrorSupport = new DeviceErrorSupport();

bugFixingSupport.setNext(programErrorSupport).setNext(osSupport).setNext(deviceErrorSupport);

problems.forEach(prob => bugFixingSupport.handle(prob));

const aircraft = new Aircraft("My super duper aircraft");
const aircraftToo = new Aircraft("Not my super duper aircraft");
const runway = new Runway();
const commanCenter = new CommandCentrer([runway], [aircraft]);

try {
    commanCenter.landAnAircraft(aircraft, runway);
    commanCenter.landAnAircraft(aircraft, runway);
} catch (err) {
    console.log(err);
}

try {
    commanCenter.landAnAircraft(aircraftToo, runway);
} catch (err) {
    console.log(err);
}

try {
    commanCenter.takeOffAnAircraft(aircraft, runway);
    commanCenter.takeOffAnAircraft(aircraft, runway);
} catch (err) {
    console.log(err);
}

try {
    commanCenter.takeOffAnAircraft(aircraftToo, runway);
} catch (err) {
    console.log(err);
}

const button = new LightElementNode('LightButton', DisplayType.Inline, ClosingType.TagWithClosing);

button.attach('click', () => {
    console.log('Button click!!');
});

button.click();

try {
    button.scroll();
} catch (err) {
    console.log(err);
}

const fsPrint = new FsPrint();
const image = new LightImage(fsPrint);

try {
    image.print('../images/some image.png');
    image.print('https:///images/some image.png');
} catch (err) {
    console.log(err);
}

const webPrint = new WebPrint();
image.setStrategy(webPrint);

try {
    image.print('https:///images/some image.png');
    image.print('../images/some image.png');
} catch (err) {
    console.log(err);
}

const document = new TextDocument("Initial content.");
const editor = new TextEditor(document);
const caretaker = new Caretaker(editor);

console.log(editor.render());
caretaker.backup();
editor.addContent(" Additional content.");

console.log(editor.render());
caretaker.backup();
editor.addContent(" Additional content 2.");

console.log(' ');
caretaker.showHistory();

caretaker.undo();
console.log(editor.render());

caretaker.undo();
console.log(editor.render());
