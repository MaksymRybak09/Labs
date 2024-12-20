class Subscription {
    protected _mounthlyFee: number;
    protected _minPeriod: number;
    protected _channels: string[];

    constructor(mounthlyFee: number, minPeriod: number, channels: string[]) {
        this._mounthlyFee = mounthlyFee;
        this._minPeriod = minPeriod;
        this._channels = channels;
    };

    set mounthlyFee(value: number) {
        this._mounthlyFee = value;
    };

    get mounthlyFee(): number {
        return this._mounthlyFee;
    };

    set minPeriod(value: number) {
        this._minPeriod = value;
    };

    get minPeriod(): number {
        return this._minPeriod;
    };

    set channels(value: string[]) {
        this._channels = value;
    };

    get channels(): string[] {
        return this._channels;
    };
};

class DomesticSubscription extends Subscription {
    constructor(mounthlyFee: number, minPeriod: number, channels: string[]) {
        super(mounthlyFee, minPeriod, channels);
    };
};

class EducationalSubscription  extends Subscription {
    constructor(mounthlyFee: number, minPeriod: number, channels: string[]) {
        super(mounthlyFee, minPeriod, channels);
    };
};

class PremiumSubscription  extends Subscription {
    constructor(mounthlyFee: number, minPeriod: number, channels: string[]) {
        super(mounthlyFee, minPeriod, channels);
    };
};

export {
    Subscription,
    DomesticSubscription,
    EducationalSubscription,
    PremiumSubscription,
};