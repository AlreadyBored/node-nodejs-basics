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

  await new Promise(resolve => {
    fs.mkdir(destinationPath, {}, resolve);
  });

  await new Promise(resolve => {
    fs.cp(sourcePath, destinationPath, { recursive: true}, resolve);
  });
}

await copy();
