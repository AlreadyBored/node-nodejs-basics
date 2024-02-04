import { fileURLToPath } from 'url';
import { promises as fsPromises, existsSync } from 'fs';
import { resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

async function remove() {
  try {
    const filePath = resolve(__dirname, 'files/fileToRemove.txt');

    if (!existsSync(filePath)) {
      throw new Error(`FS operation failed: File '${filePath}' does not exist`);
    }

    await fsPromises.unlink(filePath);

    console.log('File deleted successfully!');
  } catch (error) {
    console.error(`FS operation failed: ${error.message}`);
    throw error;
  }
}

await remove();