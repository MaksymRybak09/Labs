import {
    Hero,
    GoodHero,
    BadHero,
} from './hero';

interface IHeroBuilder<heroType extends Hero> {
    buildHeight(height: number): IHeroBuilder<heroType>;
    buildBuild(build: string): IHeroBuilder<heroType>;
    buildClothing(height: string): IHeroBuilder<heroType>;
    getHero(): heroType;
};

class HeroBuilder<heroType extends Hero> implements IHeroBuilder<heroType> {
    hero: heroType;

    constructor(hero: heroType) {
        this.hero = hero;
    };

    buildHeight(height: number): HeroBuilder<heroType> {
        this.hero.height = height;
        return this;
    };

    buildBuild(build: string): HeroBuilder<heroType> {
        this.hero.build = build;
        return this;
    };

    buildClothing(clothing: string): HeroBuilder<heroType> {
        this.hero.clothing = clothing;
        return this;
    };
    
    buildInventory(inventory: string[]): HeroBuilder<heroType> {
        if (!this.hero.inventory) {
            this.hero.inventory = [];
        }
        inventory.forEach(item => this.hero.addToInventory(item));
        return this;
    };

    protected reset(hero : heroType): void {
        this.hero = hero;
    };

    getHero(): heroType {
        const resu = this.hero;
        this.reset(Object.create(this.hero.constructor.prototype));
        return resu;
    };
};

export {
    HeroBuilder,
}