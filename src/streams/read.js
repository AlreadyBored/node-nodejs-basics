import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const read = createReadStream(__dirname + '/files/fileToRead.txt');

  read.on('readable', () => {
    const data = read.read();
    if (data) {
      process.stdout.write(data.toString());
    }
  });
};

await read();
