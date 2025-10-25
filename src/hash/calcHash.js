import { createHmac } from 'crypto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { stdout } from 'process';
import { __dirname } from '../utils.js';

const calculateHash = async () => {
  let data = '';
  const file = join(__dirname, 'hash', 'files', 'fileToCalculateHashFor.txt');
  const secret = 'secret';
  const sha256Hasher = createHmac('sha256', secret);

  const readStream = createReadStream(file, 'utf-8');

  readStream.on('data', (chunk) => (data += chunk.toString()));
  readStream.on('end', () => stdout.write(sha256Hasher.update(data).digest('hex')));
  readStream.on('error', (error) => console.log('Error', error.message));
}

await calculateHash();
