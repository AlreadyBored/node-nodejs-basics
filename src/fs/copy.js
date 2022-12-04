import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  // Write your code here
  const errMsg = "FS operation failed";
  try {
    await fs.mkdir(__dirname + "/files_copy");
    const readSourceFolder = await fs.readdir(__dirname + "/files");

    readSourceFolder.forEach((fileName) => {
      fs.copyFile(
        `${__dirname + "/files"}/${fileName}`,
        `${__dirname + "/files_copy"}/${fileName}`
      );
    });
  } catch (err) {
    throw new Error(errMsg);
  }
};

await copy();
