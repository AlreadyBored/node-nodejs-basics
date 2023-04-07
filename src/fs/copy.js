import * as fs from "fs/promises";
const copy = async () => {
  const folderPath = "src/fs/files";
  const destFolderPath = "src/fs/files_copy";
  try {
    await fs.cp(folderPath, destFolderPath, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
