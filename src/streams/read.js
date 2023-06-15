import { Readable } from 'node:stream';
import { promises as fs } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { isDirOrFileExist } from './../utils/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
