import url from 'url';
import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import fileA from './files/a.json' assert { type: 'json' };
import fileB from './files/b.json' assert { type: 'json' };
import './files/c.js';

const unknownObject = Math.random() > 0.5 ? fileA : fileB;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = url.fileURLToPath(import.meta.url);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${path.dirname(__filename)}`);

const myServer = createServerHttp((_, res) => res.end('Request accepted'));

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };