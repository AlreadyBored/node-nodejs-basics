const decompress = async () => {
  const fs = await import('node:fs/promises');
  const { pipeline } = await import('node:stream/promises');
  const { createUnzip } = await import('node:zlib');
  const { createWriteStream, createReadStream } = await import('node:fs');
  const destUrl = new URL('./files/fileToCompress.txt', import.meta.url);
  const srcUrl = new URL('./files/archive.gz', import.meta.url);
  const gzip = createUnzip();
  const isFileExists = await fs
    .access(srcUrl)
    .then(() => true)
    .catch(() => false);
  if (!isFileExists) throw Error('File doesn`t exists');
  const readblStrm = createReadStream(srcUrl);
  const wrtblStrm = createWriteStream(destUrl, { encoding: 'utf8' });
  try {
    await pipeline(readblStrm, gzip, wrtblStrm);
  } catch {
    throw Error(`smth went wrong`);
  }
  await fs.rm(srcUrl).catch(() => {
    throw Error(`smth went wrong`);
  });
};

await decompress();
