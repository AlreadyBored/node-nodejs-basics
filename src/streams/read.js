import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const input = createReadStream(join(__dirname, 'files', 'fileToRead.txt'));
  input.pipe(stdout);
};

await read();
