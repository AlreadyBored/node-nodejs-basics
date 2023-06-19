import { copyFile, readdir, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const copy = async () => {
  try {
    await mkdir(`${dirName}/files_copy`);
    const files = await readdir(`${dirName}/files`);

    for (let file of files) {
      await copyFile(
        `${dirName}/files/${file}`,
        `${dirName}/files_copy/${file}`
      );
    }
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
