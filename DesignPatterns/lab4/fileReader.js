const fs = require('fs');
const { LightElementNode, DisplayType, ClosingType } = require('./dist/lightHTML/lightElementNode');
const { LightTextNode } = require('./dist/lightHTML/lightTextNode');

const filePath = 'text.txt';
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    data = data.split('\n');
    data = data.filter(elem => !(elem === '\r'));
    data = data.map(elem => elem.slice(0, -2));

    const body = new LightElementNode('body', DisplayType.Block, ClosingType.TagWithClothing);

    data.map((elem, index) => {
        if (index === 0) {
            body.addChild(new LightElementNode('h1', DisplayType.Block, ClosingType.TagWithClothing));
            return;
        };
        
        if (elem.length < 20) {
            body.addChild(new LightElementNode('h2', DisplayType.Block, ClosingType.TagWithClothing));
            return;
        };
        
        if (elem[0] === ' ') {
            body.addChild(new LightElementNode('blockquote', DisplayType.Block, ClosingType.TagWithClothing));
            return;
        };
        
        const p = new LightElementNode('p', DisplayType.Block, ClosingType.TagWithClothing);
        p.addChild(new LightTextNode(elem));
        body.addChild(p);
    });
    
    console.log(body.render());
});