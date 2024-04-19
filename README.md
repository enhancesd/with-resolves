
### Promise.witResolvers() polyfill
### use
```js
// main.js
import '@enhances/with-resolvers';
or 
require('@enhances/with-resolvers');
or
import('@enhances/with-resolvers');

const {resolve, reject, promise} = Promise.withResolvers();

promise.then(console.log, console.error);
resolve('withResolvers');
```