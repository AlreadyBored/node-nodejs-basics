import getPath from "../helper/getPath.js";
import getFiles from "./getFiles.js";

const list = async (dirPath) => {
  const files = await getFiles(dirPath);

  for (const [, fileName, fileExtension] of files) {
    console.log(`${fileName}.${fileExtension}`);
  }
};

const filesDir = getPath(import.meta, "files");
await list(filesDir);
