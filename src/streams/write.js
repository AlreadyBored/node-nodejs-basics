import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';
const write = async () => {
  const currenDir = fileURLToPath(import.meta.url);
  const fileName = path.join(path.dirname(currenDir), 'files', 'fileToWrite.txt');
  const writeStream = await fs.createWriteStream(fileName);
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function (data) {
    writeStream.write(data);
  });
};

await write();
