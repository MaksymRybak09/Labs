import {
    Subscription,
    DomesticSubscription,
    EducationalSubscription,
    PremiumSubscription,
} from './product';

interface SubscriptionFactory {
    create(mounthlyFee: number, minPeriod: number, channels: string[]): Subscription;
};

class WebSite implements SubscriptionFactory {
    public create(mounthlyFee: number, minPeriod: number, channels: string[]): Subscription {
        return new DomesticSubscription(mounthlyFee, minPeriod, channels);
    };
};

class MobileApp implements SubscriptionFactory {
    public create(mounthlyFee: number, minPeriod: number, channels: string[]): Subscription {
        return new EducationalSubscription(mounthlyFee, minPeriod, channels);
    };
};

class ManagerCall implements SubscriptionFactory {
    public create(mounthlyFee: number, minPeriod: number, channels: string[]): Subscription {
        return new PremiumSubscription(mounthlyFee, minPeriod, channels);
    };
};

export {
    WebSite,
    MobileApp,
    ManagerCall,
};