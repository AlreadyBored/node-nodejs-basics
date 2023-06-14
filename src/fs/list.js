import { readdir } from "fs/promises";
import * as Utils from "./utils.js";

const list = async () => {
  const filesFolder = "./src/fs/files";
  const filesFolderExist = await Utils.isFolderExist(filesFolder);
  if (!filesFolderExist) {
    throw new Error("FS operation failed");
  } else {
    const files = await readdir(filesFolder);
    for (const file of files) {
      console.log(file);
    }
  }
};

await list();
