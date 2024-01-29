import fsPromises from "fs/promises";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const fileToRead = path.join(basePath, "/files/fileToRead.txt");

  const errorMessage = "FS operation failed";

  if (!fs.existsSync(fileToRead)) {
    throw new Error(errorMessage);
  }

  console.log(await fsPromises.readFile(fileToRead, "utf8"));
};

await read();
