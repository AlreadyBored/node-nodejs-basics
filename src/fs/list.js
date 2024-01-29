import fsPromises from "fs/promises";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const filesDirectory = path.join(basePath, "/files");

  const errorMessage = "FS operation failed";

  if (!fs.existsSync(filesDirectory)) {
    throw new Error(errorMessage);
  }

  const filesList = await fsPromises.readdir(filesDirectory);

  filesList.forEach((file) => {
    console.log(file);
  });
};

await list();
