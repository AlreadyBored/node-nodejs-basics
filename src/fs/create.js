import * as fsPromise from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import checkFileExistsAsync from "../utils/checkFileExistAsync.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, "files");

const create = async () => {
  if (await checkFileExistsAsync(path.join(folderPath, "fresh.txt"))) {
    throw new Error("FS operation failed");
  }
  await fsPromise.writeFile(
    path.join(folderPath, "fresh.txt"),
    "I am fresh and young",
    { encoding: "utf8" }
  );
};

await create();
