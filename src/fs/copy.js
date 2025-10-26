import fs from 'fs/promises';

const copy = async () => {
  const source = new URL('./files/', import.meta.url);
  const destination = new URL('./files_copy/', import.meta.url);

  try {
    await fs.cp(source, destination, { recursive: true, force: false, errorOnExist: true });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
