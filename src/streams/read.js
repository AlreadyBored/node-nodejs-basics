import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'node:fs';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  await pipeline(
    createReadStream(join(__dirname, 'files', 'fileToRead.txt')),
    stdout
  );
};

await read();
