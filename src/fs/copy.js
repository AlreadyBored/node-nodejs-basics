import { stat, readdir, mkdir, copyFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathFiles = __dirname + "/files";
  const pathCopy = __dirname + "/files_copy";

  try {
    await stat(pathFiles);
  } catch {
    throw new Error("FS operation failed");
  }

  try {
    const hasCopyDir = await stat(pathCopy);

    if (hasCopyDir) {
      throw new Error("FS operation failed");
    }
  } catch (e) {
    if (e.code !== "ENOENT") {
      throw new Error("FS operation failed");
    }
  }

  await mkdir(pathCopy);

  const files = await readdir(pathFiles);
  files.forEach(async (element) => {
    await copyFile(join(pathFiles, element), join(pathCopy, element));
  });
};

await copy();
