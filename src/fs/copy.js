import { access, cp } from 'node:fs/promises';

const copy = async () => {
  const __dirname = import.meta.dirname;
  const sourceDir = `${__dirname}/files`;
  const destinationDir = `${__dirname}/files_copy`;

  try {
    await access(destinationDir);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  try {
    await cp(sourceDir, destinationDir, { recursive: true });
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await copy();
