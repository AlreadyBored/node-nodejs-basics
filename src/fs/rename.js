import { existsSync, promises as fs } from 'node:fs';
import path from 'path';

const rename = async () => {
  const file = path.join(process.cwd(), 'files', 'wrongFilename.txt');
  const renamed_file = path.join(process.cwd(), 'files', 'properFilename.md');

  if (!existsSync(file) || existsSync(renamed_file)) {
    throw new Error('FS operation failed');
  }

  await fs.rename(file, renamed_file);
};

await rename();
