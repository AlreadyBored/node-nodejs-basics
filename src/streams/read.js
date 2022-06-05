import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const read = async () => {
  const file = path.join(__dirname, '/files/fileToRead.txt');
  const readStream = fs.createReadStream(file, 'utf8');
  readStream.on('data', (data) => {
    process.stdout.write(data);
  });
};

read()
