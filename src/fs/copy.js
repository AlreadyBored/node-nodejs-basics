import { copyFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const copy = async () => {
  const sourcePath = "./src/fs/files";
  const destinationPath = "./src/fs/files_copy";

  if (!existsSync(sourcePath) || existsSync(destinationPath)) {
    throw new Error("FS operation failed");
  }

  try {
    await mkdir(destinationPath);
    const entries = await readdir(sourcePath, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(sourcePath, entry.name);
      const destPath = path.join(destinationPath, entry.name);

      if (entry.isDirectory()) {
        await mkdir(destPath);
        const subEntries = await readdir(srcPath, { withFileTypes: true });

        for (const subEntry of subEntries) {
          const subSrcPath = path.join(srcPath, subEntry.name);
          const subDestPath = path.join(destPath, subEntry.name);
          await copyFile(subSrcPath, subDestPath);
        }
      } else {
        await copyFile(srcPath, destPath);
      }
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

await copy();
