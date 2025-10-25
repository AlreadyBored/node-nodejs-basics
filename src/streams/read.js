import { createReadStream } from 'fs';
import { join } from 'path'
import { __dirname } from '../utils.js'
import { once } from 'node:events';

const read = async () => {
  const file = join(__dirname, 'streams', 'files', 'fileToRead.txt');
  const readStream = createReadStream(file, 'utf-8');

readStream.pipe(process.stdout);
await once(readStream, 'end');
process.stdout.write('\n');
process.stdout.end();
}

await read();
