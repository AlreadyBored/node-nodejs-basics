import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'node:fs';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  await pipeline(
    createReadStream(join(__dirname, 'files', 'fileToRead.txt')),
    stdout
  );
};

await read().catch(console.error);
