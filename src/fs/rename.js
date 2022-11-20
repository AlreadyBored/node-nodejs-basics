import * as fsPromise from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import checkFileExistsAsync from "../utils/checkFileExistAsync.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const oldPath = path.join(__dirname, "files", "wrongFilename.txt");
const targetPath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  if (
    !(await checkFileExistsAsync(oldPath)) ||
    (await checkFileExistsAsync(targetPath))
  ) {
    throw new Error("FS operation failed");
  }
  await fsPromise.rename(oldPath, targetPath);

};

await rename();