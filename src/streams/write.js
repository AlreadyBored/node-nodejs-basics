import { createWriteStream } from 'node:fs';
import path from 'path';
import { stdin } from 'process';
import { pipeline } from 'stream';

const write = async () => {
  const file = path.join(process.cwd(), 'files', 'fileToWrite.txt');
  const writable_stream = createWriteStream(file);

  pipeline(stdin, writable_stream, () => {});
};

await write();
