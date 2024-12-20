import {
    Laptop,
    Netbook,
    EBook,
    Smartphone,
} from './devices';

interface DeviceFactory {
    createLaptop(): Laptop;
    createNetbook(): Netbook;
    createEBook(): EBook;
    createSmartphone(): Smartphone;
};

class IProneFactory implements DeviceFactory {
    createLaptop(): Laptop {
        return new Laptop();
    };

    createNetbook(): Netbook {
        return new Netbook();
    };

    createEBook(): EBook {
        return new EBook();
    };

    createSmartphone(): Smartphone {
        return new Smartphone();
    };
};

class XiaomiFactory implements DeviceFactory {
    createLaptop(): Laptop {
        return new Laptop();
    };

    createNetbook(): Netbook {
        return new Netbook();
    };

    createEBook(): EBook {
        return new EBook();
    };

    createSmartphone(): Smartphone {
        return new Smartphone();
    };
};

class GalaxyFactory implements DeviceFactory {
    createLaptop(): Laptop {
        return new Laptop();
    };

    createNetbook(): Netbook {
        return new Netbook();
    };

    createEBook(): EBook {
        return new EBook();
    };

    createSmartphone(): Smartphone {
        return new Smartphone();
    };
};

export {
    IProneFactory,
    XiaomiFactory,
    GalaxyFactory,
};