interface Device {
    display(): void;
};

class Laptop implements Device {
    display(): void {
        console.log('Laptop message!');
    };
};

class Netbook implements Device {
    display(): void {
        console.log('Netbook message!');
    };
};

class EBook implements Device {
    display(): void {
        console.log('EBook message!');
    };
};

class Smartphone implements Device {
    display(): void {
        console.log('Smartphone message!');
    };
};

export {
    Device,
    Laptop,
    Netbook,
    EBook,
    Smartphone,
};