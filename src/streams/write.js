import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const write = async () => {
  const file = path.join(__dirname, '/files/fileToRead.txt');
  const writeStream = fs.createWriteStream(file, 'utf8');
  process.stdin.pipe(writeStream)
  process.stdin.resume()
};

write()
