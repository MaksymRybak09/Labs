import { 
    WalkingAnimal,
    Parrot,
    Giraffe,
    Fish,
    GiraffeFood,
    BirdFood,
    FishFood,
    Aviary,
    Zookeeper,
    Inventory
 } from "./zoo";

const parrot = new Parrot("Parrot", "Green", true);
parrot.makeSound();
parrot.fly();
parrot.speak('parrot');
const giraffe = new Giraffe("Giraffe");
giraffe.makeSound();
giraffe.walk();
const fish = new Fish("Fish");
fish.swim();

const giraffeFood = new GiraffeFood(10, 50);
giraffeFood.buy(10);
const birdFood = new BirdFood(5, 100);
const fishFood = new FishFood(3, 30);

const giraffeAviary = new Aviary("Large", giraffeFood);
const birdAviary = new Aviary("Medium", birdFood);
const fishTank = new Aviary("Small", fishFood);

const john = new Zookeeper("John");
const alice = new Zookeeper("Alice");

john.putAnimal(birdAviary, parrot);
john.putAnimal(giraffeAviary, giraffe);
alice.putAnimal(fishTank, fish);

john.feed(giraffeAviary, 95);
giraffeFood.buy(100);
john.feed(giraffeAviary, 95);
john.feed(birdAviary, 10);
alice.feed(fishTank, 8);

const zooInventory = new Inventory([parrot, giraffe, fish], [john, alice]);
zooInventory.displayInventory();
