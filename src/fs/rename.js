const rename = async () => {
  const urlWrong = new URL('./files/wrongFilename.txt', import.meta.url);
  const urlProper = new URL('./files/properFilename.md', import.meta.url);
  const fs = await import('node:fs/promises');
  const wrongFile = await fs
    .access(urlWrong)
    .then(() => true)
    .catch(() => false);
  if (!wrongFile) throw Error(`FS operation failed`);
  const properFile = await fs
    .access(urlProper)
    .then(() => true)
    .catch(() => false);
  if (properFile) throw Error(`FS operation failed`);
  await fs.rename(urlWrong, urlProper).catch(() => {
    throw new Error(`FS operation failed`);
  });
  console.log(`all done`);
};

await rename();
