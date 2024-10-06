import fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const fileSrc = path.join(__dirname, "files", "fileToRemove.txt");
  try {
    await fs.access(fileSrc);
    await fs.unlink(fileSrc);
  } catch (error) {
    if (error.code == "ENOENT")
      throw new Error(`FS operation failed: src file don't exists`);
    else console.log(error);
    return 1;
  }
};

await remove();
