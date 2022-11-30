import { readFile } from "node:fs/promises";
import { getDirName, isExist } from "../helpers/files.mjs";

const read = async () => {
  const fileName = `${getDirName(import.meta.url)}/files/fileToRead.txt`;
  const canDelete = await isExist(fileName);

  if (canDelete) {
    const text = await readFile(fileName, 'utf-8');
    console.log(text);
  } else {
    throw new Error("FS operation failed");
  }
};

await read();
