import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { readdir } from "node:fs/promises";
import { rename as fs_rename } from "node:fs";
async function isExist(where) {
  try {
    await fs.access(where, fs.constants.F_OK);
  } catch (err) {
    throw new Error("FS operation failed");
  }
}

const read = async () => {
  // Script file.
  const __filename = fileURLToPath(import.meta.url);
  // Folder of script file.
  const __dirname = path.dirname(__filename);
  //Folder for show as console list.
  const fileToRead = path.join(__dirname, "files", "fileToRead.txt");
  await isExist(fileToRead);
  const data = await fs.readFile(fileToRead, "binary");
  console.log(data);
};

await read();