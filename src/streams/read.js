import { createReadStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';


const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);


const read = async () => {
  const txtPath = path.resolve(__dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(txtPath,'utf-8');
  let str = '';
  readStream.on('data', chunk => str += chunk);
  readStream.on('end', () => stdout.write(str));
};

read();