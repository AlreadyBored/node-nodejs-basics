import { writeFile, access } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorText = 'FS operation failed';

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  const content = 'I am fresh and young';

  try {
    await access(filePath, constants.F_OK);
    throw new Error(errorText);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await writeFile(filePath, content, 'utf8');
    } else {
      throw new Error(errorText);
    }
  }
};

await create();
