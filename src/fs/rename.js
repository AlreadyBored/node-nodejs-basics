import fs from 'fs/promises';

const rename = async () => {
  const source = new URL('./files/wrongFilename.txt', import.meta.url);
  const destination = new URL('./files/properFilename.md', import.meta.url);

  try {
    try {
      await fs.stat(destination);
      throw new Error('FS operation failled');
    } catch (e){
      if (!e || e.code !== 'ENOENT')
      throw new Error('FS operation failled');
    }
    await fs.rename(source, destination);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
