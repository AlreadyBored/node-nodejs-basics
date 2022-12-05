import {createFileWithData} from "./helpers/createFileWithData.js";
import {isFileNotExist} from "./helpers/isFileNotExist.js";
import {join} from "path";

const create = async () => {
  const path = "src/fs/files"
  const pathToFile = join(path, "fresh.txt")
  await isFileNotExist(pathToFile)
  await createFileWithData(pathToFile, "I am fresh and young")
};

await create();