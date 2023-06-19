const read = async () => {
  const fs = await import('node:fs/promises');
  const { stdout } = await import('node:process');
  let data = '';
  const url = new URL('./files/fileToRead.txt', import.meta.url);
  const isFileExists = await fs
    .access(url)
    .then(() => true)
    .catch(() => false);
  if (!isFileExists) throw Error('File doesn`t exists');
  const file = await fs.open(url, 'r').catch(() => {
    throw Error('Can`t open file');
  });
  const readblStrm = file.createReadStream({ encoding: 'utf8' });
  for await (const chunk of readblStrm) {
    data += chunk;
  }
  stdout.write(`${data}\n`);
  file.close();
};
await read();
