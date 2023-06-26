import fs from "node:fs";
import fsPromises from "node:fs/promises";

const remove = async () => {
  const filepath = './src/fs/files/fileToRemove.txt';

  if (!fs.existsSync(filepath)) {
    throw new Error("FS operation failed");
  }

  await fsPromises.unlink(filepath);
};

await remove();
