import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const sourcePath = path.resolve(__dirname, './files');
  const destinationPath = path.resolve(__dirname, './files_copy');

  if (!fs.existsSync(sourcePath) || fs.existsSync(destinationPath)) {
    throw new Error('FS operation failed');
  }

  fs.mkdirSync(destinationPath);
  fs.cpSync(sourcePath, destinationPath, {recursive: true});
}

await copy();
