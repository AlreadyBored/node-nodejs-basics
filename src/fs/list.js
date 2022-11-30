import { readdir } from "node:fs/promises";
import { isExist, getDirName } from "../helpers/files.mjs";

const list = async () => {
  const folderPath = `${getDirName(import.meta.url)}/files`;

  if (await isExist(folderPath)) {
    const files = await readdir(folderPath);
    console.log(files);
  } else {
    throw new Error("FS operation failed");
  }
};

await list();
