export {};

declare interface Promise {
    withResolvers:  PromiseWithResolvers<T>;
};