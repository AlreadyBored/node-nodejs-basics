import fs from 'fs/promises';
export const copy = async () => {
  const files_copy = new URL('./files_copy/', import.meta.url);
  const files = new URL('./files/', import.meta.url);
  const exists = await fs.stat(files_copy).then(
    () => true,
    () => false
  );
  if (exists) {
    console.error(new Error('FS operation failed'));
    return;
  }
  await fs.cp(files, files_copy, { recursive: true });
};
