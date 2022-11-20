import * as fsPromise from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import checkFileExistsAsync from "../utils/checkFileExistAsync.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  if (!(await checkFileExistsAsync(targetPath))) {
    throw new Error("FS operation failed");
  }
  await fsPromise.unlink(targetPath);
};

await remove();
