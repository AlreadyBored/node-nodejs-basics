import fs from 'fs';

const write = async () => {
  const targetPath = new URL("./files/fileToWrite.txt", import.meta.url);
  const writableStream = fs.createWriteStream(targetPath);

  process.stdin.pipe(writableStream);
};

await write();
