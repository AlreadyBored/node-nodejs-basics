import { rename as renameFs } from "fs/promises";
import { isFileExist } from "./utils.js";

const rename = async () => {
  const oldFile = "./src/fs/files/wrongFilename.txt";
  const newFile = "./src/fs/files/properFilename.md";
  const newFileExist = await isFileExist(newFile);
  const oldFileExist = await isFileExist(oldFile);
  if (newFileExist || !oldFileExist) {
    throw new Error("FS operation failed");
  } else {
    await renameFs(oldFile, newFile);
  }
};

await rename();
