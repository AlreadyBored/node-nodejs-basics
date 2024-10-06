import fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const filesDir = path.join(__dirname, "files");
  const filesCopyDir = path.join(__dirname, "files_copy");

  try {
    await fs.access(filesDir);
  } catch (error) {
    if (error.code == "ENOENT")
      throw new Error(`FS operation failed: src dist don't exists`);
    else console.log(error);
    return 1;
  }

  try {
    await fs.access(filesCopyDir);
    throw new Error(`FS operation failed: dest dist exists`);
  } catch (error) {
    if (error.code == "ENOENT") {
      await fs.cp(filesDir, filesCopyDir, { recursive: true });
      console.log("dir was copied");
    } else {
      console.error(error.message);
    }
  }
};

await copy();
