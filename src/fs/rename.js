import { promises as fs, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = join(__dirname, 'files');

const rename = async () => {
  const wrongFilename = 'wrongFilename.txt';
  const properFilename = 'properFilename.md';

  const sourcePath = join(pathToFile, wrongFilename);
  const destinationPath = join(pathToFile, properFilename);

  if (!existsSync(sourcePath)) {
    throw new Error('FS operation failed: wrongFilename.txt does not exist');
  }

  if (existsSync(destinationPath)) {
    throw new Error('FS operation failed: properFilename.md already exists');
  }

  await fs.rename(sourcePath, destinationPath);
};

await rename();