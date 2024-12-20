export class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} makes sound`);
    }
}

export class WalkingAnimal extends Animal {
    constructor(name: string) {
        super(name);
    }

    walk(): void {
        console.log(`${this.name} walks`);
    }
}

export class SwimingAnimal extends Animal {
    constructor(name: string) {
        super(name);
    }

    swim(): void {
        console.log(`${this.name} swims`);
    }
}

export class Bird extends WalkingAnimal {
    constructor(name: string) {
        super(name);
    }

    fly(): void {
        console.log(`${this.name} flies`);
    }
    
    walk(): void {
        console.log(`${this.name} walks`);
    }
}

export class Parrot extends Bird {
    color: string;
    canSpeack: boolean;

    constructor(name: string, color: string, canSpeack: boolean) {
        super(name),
        this.color = color,
        this.canSpeack = canSpeack
    }

    speak(speach: string): void {
        if (this.canSpeack) {
            console.log(speach);
            return;
        }
        console.log('Silence');
    }
}

export class Giraffe extends WalkingAnimal {
    constructor(name: string) {
        super(name);
    }
}

export class Fish extends SwimingAnimal {
    constructor(name: string) {
        super(name);
    }
}

export class Aviary {
    size: string;
    animals: Array<Animal> = [];
    food: Food;

    constructor(size: string, food: Food) {
        this.size = size;
        this.food = food;
    }
}

export class Food {
    price: number;
    quantity: number;

    constructor(price: number, quantity: number) {
        this.price = price;
        this.quantity = quantity;
    }

    buy(amount: number): void {
        if (amount > 0) {
            this.quantity += amount;
        }
    }
}

export class BirdFood extends Food {
    constructor(price: number, quantity: number) {
        super(price, quantity);
    }
}

export class GiraffeFood extends Food {
    constructor(price: number, quantity: number) {
        super(price, quantity);
    }
}

export class FishFood extends Food {
    constructor(price: number, quantity: number) {
        super(price, quantity);
    }
}

export class Zookeeper {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    putAnimal(aviary: Aviary, animal: Animal): void {
        aviary.animals.push(animal);
    }

    putAwayAnimal(aviary: Aviary, animalName: string): void {
        aviary.animals = aviary.animals.filter(animal => !(animal.name === animalName));
    }

    feed(aviary: Aviary, amount: number): void {
        if (aviary.food.quantity >= amount) {
            aviary.food.quantity -= amount;
        } else {
            console.log('There is no enough food!');
        }
    }
}

export class Inventory {
    private animals: Animal[];
    private employees: Zookeeper[];

    constructor(animals: Animal[], employees: Zookeeper[]) {
        this.animals = animals;
        this.employees = employees;
    }

    displayInventory(): void {
        console.log("Inventory:");
        console.log("Animals:");
        this.animals.forEach(animal => {
            console.log(`- ${animal.name}`);
        });

        console.log("Employees:");
        this.employees.forEach(employee => {
            console.log(`- ${employee.name}`);
        });
    }
}

