import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const sourcePath = path.resolve(__dirname, './files/wrongFilename.txt');
  const resultPath = path.resolve(__dirname, './files/properFilename.md');

  if (!fs.existsSync(sourcePath) || fs.existsSync(resultPath)) {
    throw new Error('FS operation failed');
  }

  fs.renameSync(sourcePath, resultPath);
};

await rename();
