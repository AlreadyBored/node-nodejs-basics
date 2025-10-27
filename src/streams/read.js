import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = () => {
  const stream = createReadStream(filePath, { encoding: 'utf8' });

  stream.pipe(process.stdout);
  stream.on('end', () => process.stdout.write('\n'));
  stream.on('error', (err) => console.error('Error:', err.message));
};

read();