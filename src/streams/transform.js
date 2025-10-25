import path from 'path';
import { createDeflate } from 'node:zlib';
import { fileURLToPath } from 'url';
import { Transform } from 'node:stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorText = 'FS operation failed';

const transform = async () => {
  const stream = new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString().split('').reverse().join('')
      callback(null, data)
    }
  });
  process.stdin.pipe(stream).pipe(process.stdout);
};

await transform();
