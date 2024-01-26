import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const readStream = createReadStream(
    path.join(__dirname, 'files', 'fileToRead.txt')
  );
  const output = process.stdout;
  readStream.pipe(output);
};

await read();
