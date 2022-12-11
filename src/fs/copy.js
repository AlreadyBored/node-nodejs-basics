import { readdir, copyFile, mkdir } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const dirname = fileURLToPath(new URL(".", import.meta.url));
const originalFolderPath = path.resolve(dirname);
const copyFolderPath = path.resolve(dirname, "./files_copy");

const copy = async () => {
  try {
    const [files] = await Promise.all([
      readdir(originalFolderPath),
      mkdir(copyFolderPath),
    ]);

    const promises = files.map((fileName) =>
      copyFile(
        `${originalFolderPath}/${fileName}`,
        `${copyFolderPath}/${fileName}`
      )
    );
    await Promise.all(promises);
  } catch (error) {
    throw new Error(error);
  }
};

copy();
