import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { access, mkdir, readdir, copyFile } from "fs/promises";

const dirpath = join(dirname(fileURLToPath(import.meta.url)));
const sourceFolder = join(dirpath, "files");
const destinationFolder = join(dirpath, "files_copy");

console.log({ dirpath, sourceFolder, destinationFolder });

const copy = async () => {
  try {
    await checkFolderExists();
    await copyFilesToFolder();
  } catch (error) {
    throw error;
  }
};

const checkFolderExists = async () => {
  try {
    await access(sourceFolder);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

const copyFilesToFolder = async () => {
  try {
    await mkdir(destinationFolder);
    const filesToCopy = await readdir(sourceFolder);

    for (const file of filesToCopy) {
      await copyFile(join(sourceFolder, file), join(destinationFolder, file));
    }
  } catch (error) {
    if (error.code === "EEXIST") {
      throw new Error("FS operation failed");
    }
    throw error;
  }
};

await copy();
