import { rm } from "node:fs/promises";
import { getDirName, isExist } from "../helpers/files.mjs";

const remove = async () => {
  const fileName = `${getDirName(import.meta.url)}/files/fileToRemove.txt`;
  const canDelete = await isExist(fileName);

  if (canDelete) {
    rm(fileName);
  } else {
    throw new Error("FS operation failed");
  }
};

await remove();
