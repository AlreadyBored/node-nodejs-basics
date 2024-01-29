import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const url = new URL('./files/fileToWrite.txt', import.meta.url);

const write = async () => {
  const output = createWriteStream(url);
  stdin.on('data', chunk => output.write(chunk));
};

await write();