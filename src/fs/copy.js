import { mkdir, readdir, copyFile } from "fs/promises";
import path from "path";
import * as url from "url";

export const errorMassage = "FS operation failed";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const pathToDir = path.join(__dirname, "files");
const pathToCopyDir = path.join(__dirname, "files_copy");

const copy = async () =>
  await readdir(pathToDir)
    .then(async (files) => {
      await mkdir(pathToCopyDir);
      return files;
    })
    .then(async (files) => {
      for (const file of files) {
        const pathToFile = path.join(pathToDir, file);
        const pathToCopyFile = path.join(pathToCopyDir, file);

        await copyFile(pathToFile, pathToCopyFile);
      }
    })
    .catch((_err) => {
      throw new Error(errorMassage);
    });

copy();
