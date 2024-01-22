import fs from "fs";
import path from "path";
import getPath from "../helper/getPath.js";
import getFiles from "./getFiles.js";

const errorMessage = "FS operation failed";

const createDir = async (dirPath) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, (error) => {
      if (error !== null) {
        return reject(errorMessage);
      }

      resolve();
    });
  });
};
const copyFile = async (fileFrom, fileTo) => {
  return new Promise((resolve, reject) => {
    fs.copyFile(fileFrom, fileTo, (error) => {
      if (error !== null) {
        return reject(errorMessage);
      }

      resolve();
    });
  });
};

const dirFrom = getPath(import.meta, "files");
const dirTo = getPath(import.meta, "files_copy");

const copy = async () => {
  const files = await getFiles(dirFrom);
  await createDir(dirTo);

  for (const [dirPath, fileName, fileExtension] of files) {
    const fileFrom = path.join(dirPath, `${fileName}.${fileExtension}`);
    const fileTo = path.join(dirTo, `${fileName}_copy.${fileExtension}`);

    await copyFile(fileFrom, fileTo);
  }
};

await copy();
