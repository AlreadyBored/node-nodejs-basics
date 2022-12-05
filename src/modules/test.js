import { unknownObject, createMyServer } from './esm.mjs';
console.log(unknownObject);
createMyServer.listen(3000);
console.log('Server started on port 3000');