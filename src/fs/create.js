import fs from 'fs/promises';
export const create = async () => {
  const path = new URL('./files/fresh.txt', import.meta.url);
  const exists = await fs.stat(path).then(
    () => true,
    () => false
  );
  if (exists) {
    console.error(new Error('FS operation failed'));
    return;
  }
  await fs.writeFile('./src/fs/files/fresh.txt', 'I am fresh and young');
};
