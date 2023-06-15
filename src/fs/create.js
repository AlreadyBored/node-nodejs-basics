import fs from "node:fs";
import fsPromises from "node:fs/promises";

const create = async () => {
  const filepath = './src/fs/files/fresh.txt';

  if (fs.existsSync(filepath)) {
    throw new Error("FS operation failed");
  }

  await fsPromises.appendFile(filepath, 'I am fresh and young');
};

await create();
