import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  if (!await isFileExist(filePath)) {
    throw new Error('FS operation failed');
  }

  const content = await fs.readFile(filePath, 'utf8');

  console.log(content);
};

const isFileExist = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') { // File does not exist
      return false;
    }
    throw error;
  }
};

await read();
