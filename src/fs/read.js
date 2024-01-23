import fs from "node:fs";

import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const pathToReadFile = path.join(__dirname, "..", "fs", "files", "fileToRead.txt");

  if (!fs.existsSync(pathToReadFile)) {
    throw new Error("FS operation failed");
  }

  fs.readFile(pathToReadFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};

await read();
