import fs from "node:fs/promises";
import { getDirName, isExist } from "../helpers/files.mjs";

const rename = async () => {
  const __dirname = getDirName(import.meta.url);
  const wrongFileName = `${__dirname}/files/wrongFilename.txt`;
  const properFileName = `${__dirname}/files/properFilename.md`;
  const canRename =
    (await isExist(wrongFileName)) && !(await isExist(properFileName));

  if (canRename) {
    fs.rename(wrongFileName, properFileName);
  } else {
    throw new Error("FS operation failed");
  }
};

await rename();
