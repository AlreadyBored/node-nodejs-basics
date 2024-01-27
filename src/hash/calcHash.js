import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const calculateHash = async () => {
  const file = path.join(path.resolve(''), 'hash', 'files', 'fileToCalculateHashFor.txt');
  const stream = fs.createReadStream(file);
  const hash = crypto.createHash('sha256', file);
  stream.on('data', (data) => hash.update(data))
  stream.on('end', () => console.log(hash.digest('hex')))
};

await calculateHash();