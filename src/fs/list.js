import fs from 'fs';
import path from 'path';

const list = async () => {
const folderPath = path.join(process.cwd(), 'files');

  if (!fs.existsSync(folderPath)) {
    throw new Error('FS operation failed');
  }

  const files = fs.readdirSync(folderPath);
  console.log(files);
};

await list();