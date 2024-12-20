interface IPrototype {
    clone(): this;
};

class Virus {
    weight: number;
    age: number;
    name: string;
    species: string;
    children: Virus[];

    constructor(weight: number, age: number, name: string, species: string, children: Virus[] = []) {
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.species = species;
        this.children = children;
    };

    clone(): Virus {
        const clonedChildren = JSON.parse(JSON.stringify(this.children));
        return new Virus(this.weight, this.age, this.name, this.species, clonedChildren);
    };
};

export {
    Virus,
};