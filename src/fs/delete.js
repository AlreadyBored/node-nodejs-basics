import * as fsp from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = path.join(__dirname, "files");
const errorText = "FS operation failed"

const deleteFile = path.join(files, 'fileToRemove.txt');


const remove = async () => {
    // Write your code here
    try {
        await fsp.rm(deleteFile)
      } catch {
        throw new Error(errorText);
      }
};

await remove();