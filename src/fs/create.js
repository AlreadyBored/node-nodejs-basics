import { writeFile, access } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const folderPath = path.join(__dirname, 'files');
  const filePath = path.join(folderPath, 'fresh.txt');
  
  try {
    await access(filePath);
    throw new Error('FS operation failed: file already exists');
  } catch (error) {
    if (error.message.includes('file already exists')) {
      console.error(error.message);
      return;
    }
  }

  try {
    await writeFile(filePath, 'I am fresh and young');
    console.log('File created successfully.');
  } catch (writeErr) {
    console.error('Error writing file:', writeErr.message);
  }
};

await create();
