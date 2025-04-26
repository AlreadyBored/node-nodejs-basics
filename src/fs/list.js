import { readdir, access, constants } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const list = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const folderPath = path.join(__dirname, 'files/');
    await access(folderPath, constants.F_OK);

    const filesList = await readdir(folderPath);
    for (const file of filesList) {
      console.log(file);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();