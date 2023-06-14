import { mkdir, readdir, copyFile } from "fs/promises";
import { join } from "path";
import * as Utils from "./utils.js";

const copy = async () => {
  const filesFolder = "./src/fs/files";
  const filesCopyFolder = "./src/fs/files_copy";

  const filesFolderExist = await Utils.isFolderExist(filesFolder);
  const filesCopyFolderExist = await Utils.isFolderExist(filesCopyFolder);

  if (filesCopyFolderExist || !filesFolderExist) {
    throw new Error("FS operation failed");
  } else {
    await mkdir(filesCopyFolder);
    const files = await readdir(filesFolder);
    for (const file of files) {
      const fileToCopy = join(filesFolder, file);
      const fileToCreate = join(filesCopyFolder, file);
      copyFile(fileToCopy, fileToCreate);
    }
  }
};

await copy();
