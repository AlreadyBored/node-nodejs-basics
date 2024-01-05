import fs from "node:fs/promises";
import path from "node:path";

const copy = async () => {
  const newFolderName = "files_copy";
  const folderPath = path.join("src/fs/files");
  const copyFolderPath = path.join("src/fs", newFolderName);

  try {
    await fs.access(folderPath);
    await fs.access(copyFolderPath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(copyFolderPath, { recursive: true });

      const files = await fs.readdir(folderPath);

      files.map(async (file) => {
        await fs.copyFile(`${folderPath}/${file}`, `${copyFolderPath}/${file}`);
      });
    } else {
      console.log(`error => ${error}`);
    }
  }
};

await copy();
