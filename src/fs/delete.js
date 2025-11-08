import { unlink, access } from "fs/promises";
import { constants } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const dir = path.join(__dirname, "files");
  const filePath = path.join(dir, "fileToRemove.txt");

  try {
    await access(filePath, constants.F_OK);
    await unlink(filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
