import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const read = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const stream = createReadStream(join(__dirname, 'files', 'fileToRead.txt'), { encoding: 'utf8' });

    let data = '';
    stream.on('data', (chunk) => {
      data += chunk;
    });
    stream.on('end', () => {
      process.stdout.write(data + '\n');
    });
  } catch (error) {
    throw new Error('Read operation failed');
  }
};

await read();