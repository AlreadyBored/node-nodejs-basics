import { fileURLToPath } from 'url';
import { promises as fsPromises, existsSync } from 'fs';
import { resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

const read = async () => {
  const filePath = resolve(__dirname, 'files/fileToRead.txt');

  try {
    if (!existsSync(filePath)) {
      console.log(`File '${filePath}' does not exist. Unable to read.`);
      return;
    }

    const fileContent = await fsPromises.readFile(filePath, 'utf-8');
    console.log('Content of "fileToRead.txt":', fileContent);
  } catch (error) {
    console.error(`FS operation failed: ${error.message}`);
    throw error;
  }
};

await read();