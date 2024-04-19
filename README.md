
### Promise.witResolvers() polyfill
### use
```js
// main.js
import '@enhance/with-resolvers';
or 
require('@enhance/with-resolvers');
or
import('@enhance/with-resolvers');

const {resolve, reject, promise} = Promise.withResolvers();

promise.then(console.log, console.error);
resolve('withResolvers');
```