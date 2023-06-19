const remove = async () => {
  const url = new URL('./files/fileToRemove.txt', import.meta.url);
  const fs = await import('node:fs/promises');
  const fileToDel = await fs
    .access(url)
    .then(() => true)
    .catch(() => false);
  if (!fileToDel) throw Error(`FS operation failed`);
  await fs.rm(url).catch(() => {
    throw Error(`FS operation failed`);
  });
  console.log(`deleted`);
};

await remove();
