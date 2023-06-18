import fs from "node:fs";
import fsPromises from "node:fs/promises";

const list = async () => {
  const folderPath = './src/fs/files';

  if (!fs.existsSync(folderPath)) {
    throw new Error("FS operation failed");
  }

  const files = await fsPromises.readdir(folderPath, {
    withFileTypes: true
  });

  const fileNames = files.map(({name}) => name);

  console.log(fileNames);
};

await list();
