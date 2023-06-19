const read = async () => {
  const url = new URL('./files/fileToRead.txt', import.meta.url);
  const fs = await import('node:fs/promises');
  let file = await fs
    .access(url)
    .then(() => true)
    .catch(() => false);
  if (!file) {
    throw Error(`FS operation failed`);
  }
  file = await fs.open(url).catch(() => {
    throw Error(`FS operation failed`);
  });
  const content = await file.readFile({ encoding: `utf8` }).catch(() => {
    throw Error(`FS operation failed`);
  });
  console.log(content);
  await file.close();
};

await read();
