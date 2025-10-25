import { constants } from 'fs';
import { access, readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorText = 'FS operation failed';

const list = async () => {
  const folder = path.join(__dirname, 'files');

  try {
    await access(folder, constants.F_OK);
    const files = await readdir(folder, {
      withFileTypes: true,
    });
    files.forEach((file) => console.log(file.name));
  } catch (error) {
    throw new Error(errorText);
  }
};

await list();
