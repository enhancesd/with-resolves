// @ts-ignore
Promise.withResolvers || (Promise.withResolvers = function () {
    var rs, rj, pm = new this(function (resolve, reject) {
        rs = resolve;
        rj = reject;
    });
    return {
        resolve: rs,
        reject: rj,
        promise: pm,
    };
});
