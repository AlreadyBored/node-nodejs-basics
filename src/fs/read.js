import { promises as fs, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    if (!existsSync(pathToFile)) {
      throw new Error('FS operation failed: fileToRead.txt does not exist');
    }

    const content = await fs.readFile(pathToFile, 'utf-8');
    console.log(content);
  } catch (err) {
    throw new Error(err.message);
  }
};

await read();