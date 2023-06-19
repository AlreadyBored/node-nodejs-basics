const list = async () => {
  const url = new URL('./files', import.meta.url);
  const fs = await import('node:fs/promises');
  let folder = await fs
    .access(url)
    .then(() => true)
    .catch(() => false);
  if (!folder) throw Error(`FS operation failed`);
  folder = await fs.readdir(url).catch(() => {
    throw Error(`FS operation failed`);
  });
  for await (const file of folder) {
    console.log(file);
  }
};

await list();
