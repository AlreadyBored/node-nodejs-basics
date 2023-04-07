import * as path from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c';

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const randomNumber = Math.random();

let unknownObject;

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

if (randomNumber > 0.5) {
  const a = await import('./files/a.json', { assert: { type: 'json' } });
  unknownObject = JSON.parse(JSON.stringify(a));
} else {
  const b = await import('./files/b.json', { assert: { type: 'json' } });
  unknownObject = JSON.parse(JSON.stringify(b));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

console.log(unknownObject);

export {
    unknownObject,
    myServer,
};
