const create = async () => {
  const url = new URL('./files/fresh.txt', import.meta.url);
  const fs = await import('node:fs/promises');
  const data = `I am fresh and young`;
  const file = await fs
    .access(url)
    .then(() => true)
    .catch(() => false);
  if (!file) {
    await fs.appendFile(url, data).catch(() => {
      throw Error(`FS operation failed`);
    });
    console.log(`all done!`);
  } else {
    throw Error(`FS operation failed`);
  }
};

await create();
