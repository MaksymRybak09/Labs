import {
    WebSite,
    MobileApp,
    ManagerCall,
} from './Subscription/creators';

const webSiteFactory = new WebSite();
const mobileAppFactory = new MobileApp();
const managerCallFactory = new ManagerCall();

const domesticSubscription = webSiteFactory.create(100, 3, ['Standart channel']);
const educationalSubscription = mobileAppFactory.create(150, 6, ['Standart channel', 'Education channel']);
const premiumSubscription = managerCallFactory.create(300, 12, ['Premium channel']);

console.log('Domestic Subscription:', domesticSubscription);
console.log('Educational Subscription:', educationalSubscription);
console.log('Premium Subscription:', premiumSubscription);

import { 
    IProneFactory, 
    XiaomiFactory, 
    GalaxyFactory,
} from './Devices/factories';

 const iProneFactory = new IProneFactory();
 const xiaomiFactory = new XiaomiFactory();
 const galaxyFactory = new GalaxyFactory();

 const iProneLaptop = iProneFactory.createLaptop();
 const iProneNetbook = iProneFactory.createNetbook();
 const xiaomiEBook = xiaomiFactory.createEBook();
 const galaxySmartphone = galaxyFactory.createSmartphone();

 console.log('IProne Laptop:');
 iProneLaptop.display();

 console.log('IProne Netbook:');
 iProneNetbook.display();

 console.log('Xiaomi EBook:');
 xiaomiEBook.display();

 console.log('Galaxy Smartphone:');
 galaxySmartphone.display();

import {
    Authentificator,
} from './Authentificator/authentificator';

const auth1 = Authentificator.getInstance();
const auth2 = Authentificator.getInstance();

console.log(auth1 === auth2);

import {
    Virus,
} from './Virus/virus';

const firstGenerationVirus = new Virus(10, 1, "Virus A", "Type A");
const secondGenerationVirus1 = new Virus(8, 2, "Virus B", "Type B");
const secondGenerationVirus2 = new Virus(9, 2, "Virus C", "Type C");
const thirdGenerationVirus1 = new Virus(7, 3, "Virus D", "Type D");
const thirdGenerationVirus2 = new Virus(6, 3, "Virus E", "Type E");

firstGenerationVirus.children.push(secondGenerationVirus1, secondGenerationVirus2);
secondGenerationVirus1.children.push(thirdGenerationVirus1);
secondGenerationVirus2.children.push(thirdGenerationVirus2);

const clonedFirstGenerationVirus = firstGenerationVirus.clone();

console.log('--- Before changing');
console.log("Original first generation virus:", firstGenerationVirus);
console.log("Cloned first generation virus:", clonedFirstGenerationVirus);

clonedFirstGenerationVirus.name = 'New virus\' name';
clonedFirstGenerationVirus.children[0].name = 'New second gneration virus\' name';

console.log('--- After changing');
console.log("Original first generation virus:", firstGenerationVirus);
console.log("Cloned first generation virus:", clonedFirstGenerationVirus);

import {
    Hero,
    GoodHero,
    BadHero,
} from './Heroes/hero';

import {
    HeroBuilder,
} from './Heroes/heroBuilder';

import {
    HeroDirector,
} from './Heroes/heroDirector';

const myGoodHeroBuilder = new HeroBuilder(new GoodHero());

const myGoodHero = myGoodHeroBuilder
                    .buildHeight(165)
                    .buildBuild('Normal')
                    .buildClothing('Hoodie')
                    .buildInventory(['Sword'])
                    .getHero();

myGoodHero.makeGoodThings();
console.log(myGoodHero.getHeroInfo());

const myGoodHeroDirector = new HeroDirector();
myGoodHeroDirector.builder = myGoodHeroBuilder;

const myGoodMVPHero = myGoodHeroDirector.buildMVPHero();
console.log(myGoodMVPHero.getHeroInfo());
const myGoodBestHero = myGoodHeroDirector.buildBestHero();
console.log(myGoodBestHero.getHeroInfo());


const myBadHeroBuilder = new HeroBuilder(new BadHero());

const myBadHero = myBadHeroBuilder
                    .buildHeight(165)
                    .buildBuild('Normal')
                    .buildClothing('Hoodie')
                    .buildInventory(['Sword'])
                    .getHero();

myBadHero.makeBadThings();
console.log(myBadHero.getHeroInfo());

const myBadHeroDirector = new HeroDirector();
myBadHeroDirector.builder = myBadHeroBuilder;

const myBadMVPHero = myBadHeroDirector.buildMVPHero();
console.log(myBadMVPHero.getHeroInfo());
const myBadBestHero = myBadHeroDirector.buildBestHero();
console.log(myBadBestHero.getHeroInfo());
