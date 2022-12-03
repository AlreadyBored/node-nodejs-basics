import { unlink } from "fs/promises";
import path from "path";
import * as url from "url";

export const errorMassage = "FS operation failed";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFile = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
   await unlink(pathToFile).catch(() => {
    console.log(errorMassage);
   })
};

await remove();