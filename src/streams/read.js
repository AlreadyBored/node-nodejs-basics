import { createReadStream } from 'node:fs';
import process from 'node:process';

import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const fileName = 'fileToRead.txt';
  const pathFile = join(__dirname, 'files', fileName);

  const r = await createReadStream(pathFile);
  r.pipe(process.stdout);
};

await read();
