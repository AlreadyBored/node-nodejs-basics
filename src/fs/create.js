import { writeFile, access, constants } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const create = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    try {
      await access(filePath, constants.F_OK);
      throw new Error('FS operation failed');
    } catch (error) {
      if (error.code === 'ENOENT') {
        await writeFile(filePath, 'I am fresh and young');
        return;
      }

      throw new Error('FS operation failed');
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();