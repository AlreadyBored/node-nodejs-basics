const write = async () => {
  const fs = await import('node:fs/promises');
  const { pipeline } = await import('node:stream/promises');
  const { stdin } = await import('node:process');
  const url = new URL('./files/fileToWrite.txt', import.meta.url);
  const isFileExists = await fs
    .access(url)
    .then(() => true)
    .catch(() => false);
  if (!isFileExists) throw Error('File doesn`t exists');
  const file = await fs.open(url, 'w').catch(() => {
    throw Error('Can`t open file');
  });
  const wrtblStrm = file.createWriteStream();
  try {
    await pipeline(stdin, wrtblStrm);
  } catch {
    throw Error(`smth went wrong`);
  }
  file.close();
};
await write();
