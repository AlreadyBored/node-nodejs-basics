import { promises as fs, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = join(__dirname, 'files');
const pathToCopy = join(__dirname, 'files_copy');

const copy = async () => {
  if (!existsSync(pathToFile)) {
    throw new Error('Source folder `files` does not exist');
  }

  if (existsSync(pathToCopy)) {
    throw new Error('Destination folder `files_copy` already exists');
  }

  try {
    await fs.mkdir(pathToCopy);
    const files = await fs.readdir(pathToFile);
    for (const file of files) {
      const contents = await fs.readFile(join(pathToFile, file));
      await fs.writeFile(join(pathToCopy, file), contents);
    }
    console.log('All files copied successfully');
  } catch (error) {
    throw new Error('FS operation failed: ' + error.message);
  }
};

await copy();