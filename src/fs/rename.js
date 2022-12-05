import {isFileExist} from "./helpers/isFileExist.js";
import {isFileNotExist} from "./helpers/isFileNotExist.js";
import {deleteFileOrDirectory} from "./helpers/deleteFileOrDirectory.js";
import {copyFile} from "./helpers/copyFile.js";
import {join} from "path";
const rename = async () => {
  const path = "src/fs/files"
  const oldFileNamePath = join(path, "wrongFilename.txt")
  const newFileNamePath = join(path, "properFilename.md")
  await isFileNotExist(newFileNamePath)
  await isFileExist(oldFileNamePath)
  await copyFile(oldFileNamePath, newFileNamePath)
  await deleteFileOrDirectory(oldFileNamePath)
};

await rename();