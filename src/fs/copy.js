import {isFileExist} from "./helpers/isFileExist.js";
import {copyDirectory} from "./helpers/copyDirectory.js";
import {isFileNotExist} from "./helpers/isFileNotExist.js";
import {join} from "path"

const copy = async () => {
  const filesCopy  = "files_copy"
  const files = "files"
  const pathToFolder = "src/fs"
  const filesPath = join(pathToFolder, files)
  const filesCopyPath = join(pathToFolder, filesCopy)
  await isFileExist(filesPath)
  await isFileNotExist(filesCopyPath)
  await copyDirectory(filesPath,filesCopyPath)
};

await copy();