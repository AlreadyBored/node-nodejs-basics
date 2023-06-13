import { cp, access, constants } from "fs";
import { rm } from "fs/promises";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export function copySmthing(origin, destination) {
  return cp(origin, destination, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

export async function removeSmthing(folder) {
  return await rm(folder, { recursive: true, force: true });
}

export async function isFileExist(pathToFile) {
  return await access(pathToFile, constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
}

export async function isFileNotExist(pathToFile) {
  return await access(pathToFile, constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }
  });
}
