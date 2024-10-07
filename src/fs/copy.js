import { promises as fs } from "fs";
import path from "path";

const copy = async () => {
  const folderPath = path.join("src", "fs", "files");
  const newfolderPath = path.join("src", "fs", "files_copy");

  try {
    await fs.access(folderPath);
  } catch (error) {
    throw new Error("FS operation failed: " + error.message);
  }

  try {
    await fs.cp(folderPath, newfolderPath, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (error) {
    if (error.code == "ERR_FS_CP_EEXIST") {
      throw new Error("FS operation failed");
    }
  }
};

await copy();
