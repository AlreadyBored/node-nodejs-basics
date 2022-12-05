import {deleteFileOrDirectory} from "./helpers/deleteFileOrDirectory.js";
import {join} from "path"

const remove = async () => {
  const path = "src/fs/files"
  const file = "fileToRemove.txt"
  await deleteFileOrDirectory(join(path, file))
};

await remove();