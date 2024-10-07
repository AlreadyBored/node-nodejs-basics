import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  try {
    // Check if file already exists
    await fs.access(filePath);
    // If no error, file exists, throw error
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      // File does not exist, create it
      await fs.writeFile(filePath, 'I am fresh and young', 'utf8');
      console.log('File created successfully.');
    } else {
      // Re-throw any other errors
      throw err;
    }
  }
};

create();
