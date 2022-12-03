import { readdir } from "fs/promises";
import path from "path";
import * as url from "url";

export const errorMassage = "FS operation failed";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToDir = path.join(__dirname, "files");

const list = async () => {
  await readdir(pathToDir)
    .then((files) =>
      files.forEach((file) => {
        console.log(file);
      })
    )
    .catch((_err) => {
      console.log(errorMassage);
    });
};

await list();
