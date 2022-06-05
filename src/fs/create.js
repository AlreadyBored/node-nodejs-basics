import path from 'path';
import { fileURLToPath } from "url";
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const create = async () => {
  const file = path.join(__dirname, '/files/fresh.txt')
  if (fs.existsSync(file)) {
    throw new Error('FS operation failed')
  }

  fs.writeFileSync(file, 'I am fresh and young')

  fs.writeFileSync(path.join(__dirname, 'jai.txt'), 'Zhai zat qoi')
};

create()
