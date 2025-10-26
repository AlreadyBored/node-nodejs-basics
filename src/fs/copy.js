import fs from "fs/promises";
import path from "path";
const copy = async () => {
  const srcDir = path.join("files");
  const destDir = path.join("files_copy");

  try {
    await fs.cp(srcDir, destDir, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
    console.log("Folder copied successfully!");
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
