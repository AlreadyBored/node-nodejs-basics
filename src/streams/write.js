import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const write = createWriteStream(__dirname + '/files/fileToWrite.txt');

  write.on('error', err => {
    console.log(err);
  });

  process.stdin.on('data', data => {
    write.write(data.toString());
  });
};

await write();
