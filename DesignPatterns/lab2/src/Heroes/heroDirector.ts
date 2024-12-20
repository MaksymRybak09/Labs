import {
    HeroBuilder,
} from './heroBuilder';

import {
    Hero,
} from './hero';

class HeroDirector {
    private _builder: HeroBuilder<Hero> = new HeroBuilder(new Hero());

    set builder(builder: HeroBuilder<Hero>) {
        this._builder = builder;
    };

    buildMVPHero(): Hero {
        return this._builder
                    .buildHeight(155)
                    .buildBuild('Week')
                    .buildClothing('Armor')
                    .buildInventory(['Wooden sword'])
                    .getHero();
    };
    
    buildBestHero(): Hero {
        return this._builder
                    .buildHeight(195)
                    .buildBuild('Athletic')
                    .buildClothing('Metal armor')
                    .buildInventory(['Sword', 'Bow', 'Shield'])
                    .getHero();
    };
};

export {
    HeroDirector,
};