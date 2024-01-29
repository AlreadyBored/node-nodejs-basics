import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
  const fileName = 'fileToWrite.txt';
  const currentDir = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(currentDir, 'files', fileName);

  const writableStream = createWriteStream(filePath, { flags: 'a' });

  process.stdin.pipe(writableStream);

  console.log(`Writing data from process.stdin to ${fileName}...`);
};

await write();