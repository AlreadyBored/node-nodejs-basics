import fs from "fs/promises";
import path from "path";

const sourceDirPath = path.resolve("./src/fs/files");
const destDirPath = path.resolve("./src/fs/files_copy");

const copy = async () => {
  try {
    await fs.cp(sourceDirPath, destDirPath, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
    console.log("Folder has been successfully copied");
  } catch (error) {
    if (error.code === "ERR_FS_CP_EEXIST" || error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await copy();
