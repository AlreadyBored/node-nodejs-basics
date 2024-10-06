import fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const fileSrc = path.join(__dirname, "files", "wrongFilename.txt");
  const fileDest = path.join(__dirname, "files", "properFilename.md");

  try {
    await fs.access(fileSrc);
  } catch (error) {
    if (error.code == "ENOENT")
      throw new Error(`FS operation failed: src file don't exists`);
    else console.log(error);
    return 1;
  }

  try {
    await fs.access(fileDest);
    throw new Error(`FS operation failed: dest file already exists`);
  } catch (error) {
    if (error.code == "ENOENT") {
      await fs.rename(fileSrc, fileDest);
      console.log("file renamed");
    } else {
      console.error(error.message);
    }
  }
};

await rename();
