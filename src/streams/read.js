import { promises as fs } from 'fs';

const read = async () => {
  const filePath = "./files/fileToRead.txt";
  const readStream = fs.createReadStream(filePath, "utf-8");
  readStream.pipe(process.stdout);
};

await read();
