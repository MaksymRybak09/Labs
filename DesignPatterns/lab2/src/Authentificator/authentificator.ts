class Authentificator {
    private static instance: Authentificator;
    private _authentificatorName: string;

    private constructor(authentificatorName: string = 'default name') {
        this._authentificatorName = authentificatorName;
    };

    public static getInstance(name?: string): Authentificator {
        if (!Authentificator.instance) {
            Authentificator.instance = new Authentificator(name);
        };

        return Authentificator.instance;
    };
};

export {
    Authentificator,
};