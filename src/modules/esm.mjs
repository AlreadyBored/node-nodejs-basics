import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';

import './files/c.js';

const random = Math.random();

let unknownObject;

const importAndLogModule = async (file) => {
  try {
    const module = await import(file);
    unknownObject = module.default;
    console.log(unknownObject);
  } catch (error) {
    console.error(`Error importing and logging module from ${file}: ${error.message}`);
  }
};

if (random > 0.5) {
  await importAndLogModule('./files/a.json');
} else {
  await importAndLogModule('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export {
  unknownObject,
  myServer,
};