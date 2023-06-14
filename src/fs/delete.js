import { unlink } from "fs/promises";
import * as Utils from "./utils.js";

const remove = async () => {
  const fileToRemove = "./src/fs/files/fileToRemove.txt";
  const fileExist = await Utils.isFileExist(fileToRemove);
  if (!fileExist) {
    throw new Error("FS operation failed");
  } else {
    await unlink(fileToRemove);
  }
};

await remove();
