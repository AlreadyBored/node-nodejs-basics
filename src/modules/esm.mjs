import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';

const random = Math.random();
let unknownObject;
const PORT = 3000;

if (random > 0.5) {
    unknownObject = await import('./files/a.json', { with: { type: 'json' } });
} else {
    unknownObject = await import('./files/b.json', { with: { type: 'json' } });
}
console.log(unknownObject.default);

console.log();

console.log(`Version ${version()}`);
console.log(`Release ${release()}`);

console.log();

console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

console.log();
const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});
myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
