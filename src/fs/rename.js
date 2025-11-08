import { rename, access } from "fs/promises";
import { constants } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const renameFile = async () => {
  const dir = path.join(__dirname, "files");
  const oldPath = path.join(dir, "wrongFilename.txt");
  const newPath = path.join(dir, "properFilename.md");

  try {
    await access(oldPath, constants.F_OK);
    await access(newPath, constants.F_OK);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await rename(oldPath, newPath);
    } else {
      throw err;
    }
  }
};

await renameFile();
