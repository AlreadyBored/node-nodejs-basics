import path from 'path';
import * as fs from 'fs/promises';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const sourcePath = path.resolve(_dirname, 'files');

import './files/c.js';

let unknownObject;
let myServer;

async function readFiles() {
  unknownObject = await fs.readFile(
    path.join(sourcePath, Math.random() > 0.5 ? 'a.json' : 'b.json'),
    'utf8',
  );

  console.log(`Release ${release()}`);
  console.log(`Version ${version()}`);
  console.log(`Path segment separator is "${path.sep}"`);

  console.log(`Path to current file is ${_filename}`);
  console.log(`Path to current directory is ${_dirname}`);

  myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
  });

  const PORT = 3000;

  console.log(unknownObject);

  myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
  });
}

await readFiles();

export { unknownObject, myServer };
