const calculateHash = async () => {
  const { createHash } = await import('node:crypto');
  const fs = await import('node:fs/promises');
  const url = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
  const exist = await fs
    .access(url)
    .then(() => true)
    .catch(() => false);
  if (!exist) throw Error(`File doesn't exist`);
  const file = await fs.open(url).catch(() => {
    throw Error('Can`t read file');
  });
  const fileContent = await file.readFile({ encoding: `utf8` }).catch(() => {
    throw Error('Can`t read file');
  });
  await file.close();
  const hash = createHash(`sha256`).update(fileContent).digest(`hex`);
  console.log(hash);
};

await calculateHash();
