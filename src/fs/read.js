import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.stat(path.join(__dirname, 'files', 'fileToRead.txt'), function (err) {
    if (err) {
      throw new Error('FS operation failed');
    }
  })

  const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
  const { stdout } = process;
  readableStream.on('data', data => stdout.write(data));
};

await read();
