import fs from "node:fs";
import fsPromises from "node:fs/promises";


const read = async () => {
  const filepath = './src/fs/files/fileToRead.txt';

  if (!fs.existsSync(filepath)) {
    throw new Error("FS operation failed");
  }

  const content = await fsPromises.readFile(filepath, {encoding: 'utf8'});

  console.log(content);
};

await read();
