const compress = async () => {
  const fs = await import('node:fs/promises');
  const { pipeline } = await import('node:stream/promises');
  const { createGzip } = await import('node:zlib');
  const { createWriteStream, createReadStream } = await import('node:fs');
  const srcUrl = new URL('./files/fileToCompress.txt', import.meta.url);
  const destUrl = new URL('./files/archive.gz', import.meta.url);
  const zip = createGzip();
  const isFileExists = await fs
    .access(srcUrl)
    .then(() => true)
    .catch(() => false);
  if (!isFileExists) throw Error('File doesn`t exists');
  const readblStrm = createReadStream(srcUrl);
  const wrtblStrm = createWriteStream(destUrl);
  try {
    await pipeline(readblStrm, zip, wrtblStrm);
  } catch {
    throw Error(`smth went wrong`);
  }
  await fs.rm(srcUrl).catch(() => {
    throw Error(`smth went wrong`);
  });
};

await compress();
