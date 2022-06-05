import fs from 'fs/promises';
export const list = async () => {
  const dir = new URL('./files/', import.meta.url);
  await fs.readdir(dir).then(
    (data) => console.log(data),
    () => console.error(new Error('FS operation failed'))
  );
};
