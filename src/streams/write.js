import { Writable } from 'node:stream';
import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

class FileWriteStream extends Writable {
  constructor(fileName, options = {}) {
    super(options);
    this.fileName = fileName;
  }

  async _write(chunk, encoding, callback) {
    try {
      await fs.appendFile(this.fileName, chunk);
      callback();
    } catch (error) {

      callback(error);
    }
  }
}

const write = async () => {
  const destinationPath = join(__dirname, 'files', 'fileToWrite.txt');

  const fileStream = new FileWriteStream(destinationPath);
  process.stdin.pipe(fileStream);

};

await write();
