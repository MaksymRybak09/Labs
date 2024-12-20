export interface IUserSupport {
    setNext(handler: IUserSupport): IUserSupport;

    handle(request: string): void;
}