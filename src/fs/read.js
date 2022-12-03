import { readFile } from "fs/promises";
import path from "path";
import * as url from "url";

export const errorMassage = "FS operation failed";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  await readFile(pathToFile, { encoding: 'utf8' }).then((data) => {
    console.log(data);
  }).catch(() => {
    console.log(errorMassage);
  });
};

await read();
