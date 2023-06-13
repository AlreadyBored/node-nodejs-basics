import { rename as trueRename } from "fs";
import path from "path";
import * as url from "url";
import { isFileExist, isFileNotExist } from "../utils/utils.js";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
  const origin = path.join(__dirname, "files/wrongFilename.txt");
  const target = path.join(__dirname, "files/properFilename.md");

  await isFileExist(origin);
  await isFileNotExist(target);

  trueRename(origin, target, (err) => {
    if (err) throw err;
    console.log("Rename completed!");
  });
};

await rename();
