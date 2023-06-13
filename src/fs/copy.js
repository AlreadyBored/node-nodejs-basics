import fs from "fs";
import path from "path";
import getPath from "../helper/getPath.js";

const errorMessage = "FS operation failed";
const dirFrom = getPath(import.meta, "files");
const dirTo = getPath(import.meta, "files_copy");

const getFiles = async () => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirFrom, (error, files) => {
      if (error !== null) {
        return reject(errorMessage);
      }

      const result = files.map((file) => {
        const extIndex = file.lastIndexOf(".");

        if (extIndex === -1) {
          return [file, ""];
        }

        return [
          dirFrom,
          file.substring(0, extIndex),
          file.substring(extIndex + 1),
        ];
      });

      resolve(result);
    });
  });
};
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

const copy = async () => {
  const files = await getFiles();
  await createDir(dirTo);

  for (const [dirPath, fileName, fileExtension] of files) {
    const fileFrom = path.join(dirPath, `${fileName}.${fileExtension}`);
    const fileTo = path.join(dirTo, `${fileName}_copy.${fileExtension}`);

    await copyFile(fileFrom, fileTo);
  }
};

await copy();
