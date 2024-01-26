import { rename as trueRename } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { isFileExist, isFileNotExist } from "../utils/utils.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
  const origin = join(__dirname, "files/wrongFilename.txt");
  const target = join(__dirname, "files/properFilename.md");

  await isFileExist(origin);
  await isFileNotExist(target);

  trueRename(origin, target, (err) => {
    if (err) throw err;
    console.log("Rename completed!");
  });
};

await rename();
