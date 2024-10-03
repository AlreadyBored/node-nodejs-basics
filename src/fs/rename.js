import fs from "fs/promises";
import path from "path";

const destDirPath = path.resolve("./src/fs/files/properFilename.md");
const sourceDirPath = path.resolve("./src/fs/files/wrongFilename.txt");
const rename = async () => {
  try {
    await fs.rename(sourceDirPath, destDirPath);
    console.log("File has been successfully renamed");
  } catch (error) {
    if (error.code === "ERR_FS_CP_EEXIST" || error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await rename();
