import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.resolve(__dirname, './files/fileToRead.txt');

  if (!fs.existsSync(filePath) || !fs.lstatSync(filePath).isFile()) {
    throw new Error('FS operation failed');
  }

  const content = await fs.promises.readFile(filePath, { encoding: 'utf-8' });
  console.log(content);
};

await read();
