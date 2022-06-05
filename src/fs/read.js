import fs from 'fs/promises';
export const read = async () => {
  const filePath = new URL('./files/fileToRead.txt', import.meta.url);
  try {
    const file = await fs.readFile(filePath, {
      encoding: 'utf-8',
    });
    console.log(file);
  } catch {
    console.error(new Error('FS operation failed'));
  }
};
