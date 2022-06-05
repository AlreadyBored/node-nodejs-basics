import fs from 'fs/promises';
export const remove = async () => {
  const filePath = new URL('./files/fileToRemove.txt', import.meta.url);
  const exists = await fs.stat(filePath).then(
    () => true,
    () => false
  );
  if (!exists) {
    console.log(new Error('FS operation failed'));
    return;
  }
  fs.rm(filePath);
};
