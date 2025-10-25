import { stdin, stdout } from 'process';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { __dirname } from '../utils.js';

const write = async () => {
  const outputFile = createWriteStream(
    join(__dirname, 'streams', 'files', 'fileToWrite.txt')
  )
  stdout.write('Write something:\n');
  stdin.pipe(outputFile);

}

await write();
