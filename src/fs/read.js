import { createReadStream, existsSync } from 'fs';
import { join } from 'path';
import { __dirname } from '../utils.js';

const read = async () => {
  const file = join(__dirname, 'fs', 'files', 'fileToRead.txt');
  if (!existsSync(file)) {
    throw new Error('FS operation failed');
  }
  const readStream = createReadStream(file,'utf8');

  readStream.on('data', (data) => console.log(data));
  readStream.on('error', (error) => console.log('Error', error.message));

}

await read();
 