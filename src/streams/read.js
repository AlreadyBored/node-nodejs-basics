import { Readable } from 'node:stream';
import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { getDirname, isDirOrFileExist } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

class FileReadStream extends Readable {
  constructor(fileName, options = {}) {
    super(options);
    this.fileName = fileName;
  }

  async _read(size) {
    try {
      const data = await fs.readFile(this.fileName);
      this.push(data);
      this.push(null);
    } catch (error) {
      this.emit('error', error);
    }
  }
}

const read = async () => {
  const sourcePath = join(__dirname, 'files', 'fileToRead.txt');

  if (!await isDirOrFileExist(sourcePath)) {
    throw new Error('File does not exist');
  }

  const fileStream = new FileReadStream(sourcePath);
  fileStream.pipe(process.stdout);
};

await read();
