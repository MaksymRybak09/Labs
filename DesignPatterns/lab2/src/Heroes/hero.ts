class Hero {
    private _height: number = 0;
    private _build: string = "";
    private _clothing: string = "";
    private _inventory: string[] = [];

    set height(height: number) {
        this._height = height;
    };
    
    get height(): number {
        return this._height;
    };

    set build(build: string) {
        this._build = build;
    };
    
    get build(): string {
        return this._build;
    };

    set clothing(clothing: string) {
        this._clothing = clothing;
    };
    
    get clothing(): string {
        return this._clothing;
    };

    set inventory(inventory: string[]) {
        this._inventory = inventory;
    };
    
    get inventory(): string[] {
        return this._inventory;
    };

    addToInventory(item: string): void {
        this._inventory.push(item);
    };

    getHeroInfo(): string {
        return `Hero Info:\nHeight: ${this.height} cm\nBuild: ${this.build}\nClothing: ${this.clothing}\nInventory: ${this._inventory.join(", ")}`;
    };
};

class GoodHero extends Hero {
    makeGoodThings(): void {
        console.log('Good things have been made!');
    };
};

class BadHero extends Hero {
    makeBadThings(): void {
        console.log('Bad things have been made!');
    };
};

export {
    Hero,
    GoodHero,
    BadHero,
};