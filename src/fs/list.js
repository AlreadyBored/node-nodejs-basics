import * as fsPromise from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import checkFileExistsAsync from "../utils/checkFileExistAsync.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, "files");

const list = async () => {
  if (!(await checkFileExistsAsync(folderPath))) {
    throw new Error("FS operation failed");
  }

  try {
    const files = await fsPromise.readdir(folderPath);
    files.forEach((file) => console.log(file));
  } catch (err) {
    console.error(err.message);
  }
};

await list();
