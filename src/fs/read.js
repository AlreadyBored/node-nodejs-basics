import { constants } from 'fs';
import { access, readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorText = 'FS operation failed';

const read = async () => {
  const file = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    await access(file, constants.F_OK);
    const content = await readFile(file, { encoding: 'utf8' });
    console.log(content);
  } catch {
    throw new Error(errorText);
  }
};

await read();

