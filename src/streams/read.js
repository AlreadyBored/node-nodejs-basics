import fs from 'node:fs';
import path from 'node:path';

const read = async () => {
  const file = path.join(path.resolve(''), 'streams', 'files', 'fileToRead.txt');
  const stream = new fs.ReadStream(file, { encoding: 'utf-8' });
  stream.on('data', (data) => process.stdout.write(data))
  stream.on('finish', () => stream.close());
};

await read();