import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const list = async () => {
  const folder = path.join(__dirname, '/files');

  if (!fs.existsSync(folder)) {
    throw new Error('FS operation failed');
  }

  const files = fs.readdirSync(folder);

  files.forEach(file => {
    console.log(file);
  });
};

list();
