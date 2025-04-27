import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
  const source = path.join(process.cwd(), 'files');
  const destination = path.join(process.cwd(), 'files_copy');

 
  try {
    await fs.access(source);
  } catch {
    throw new Error('FS operation failed');
  }

  try {
    await fs.access(destination);
    throw new Error('FS operation failed');
  } catch {
    // ok
  }

  await fs.cp(source, destination, { recursive: true });
};

await copy();
