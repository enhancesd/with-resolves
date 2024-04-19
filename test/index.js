'use strict';
require('../dist')

class Test extends Promise {

}

var { resolve, reject, promise } = Test.withResolvers();

promise.then(console.log, console.error);
resolve('withResolvers'+ Math.random());
// reject('11')