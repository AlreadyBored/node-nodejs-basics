import { promises as fs, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    if (existsSync(pathToFile)) {
        await fs.unlink(pathToFile);
        console.log('File fileToRemove.txt has been deleted');
      } else {
        throw new Error('FS operation failed: fileToRemove.txt does not exist');
      }
};

await remove();