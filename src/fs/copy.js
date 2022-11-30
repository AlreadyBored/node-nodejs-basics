import { copyFile, readdir, mkdir } from "node:fs/promises";
import { getDirName, isExist } from "../helpers/files.mjs";

const copy = async () => {
  const __dirname = getDirName(import.meta.url);
  const filesPath = `${__dirname}/files`;
  const copyFilesPath = `${__dirname}/files_copy`;
  const canCopy = (await isExist(filesPath)) && !(await isExist(copyFilesPath));

  if (canCopy) {
    try {
      await mkdir(`${__dirname}/files_copy`);
      const files = await readdir(filesPath);
      for (const file of files) {
        copyFile(`${filesPath}/${file}`, `${copyFilesPath}/${file}`);
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    throw new Error("FS operation failed");
  }
};

copy();
