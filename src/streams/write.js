import fs from 'node:fs';
import path from 'node:path';

const write = async () => {
  const file = path.join(path.resolve(''), 'streams', 'files', 'fileToWrite.txt');
  const stream = new fs.WriteStream(file, { encoding: 'utf-8', flags: 'a' });
  process.stdin.on('data',(data) => stream.write(data))
  process.stdin.on('finish', () => stream.close());
};

await write();