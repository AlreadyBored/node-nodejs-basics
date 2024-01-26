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

const rename = async () => {
  // Script file.
  const __filename = fileURLToPath(import.meta.url);
  // Folder of script file.
  const __dirname = path.dirname(__filename);
  // check if exist file with wrong name.
  await isExist(path.join(__dirname, "files", "wrongFilename.txt"));
  // rename file.
  fs_rename(
    path.join(__dirname, "files", "wrongFilename.txt"),
    path.join(__dirname, "files", "properFilename.md"),
    (err) => {
      if (err) {
        throw new Error("FS operation failed");
      }
    }
  );
};

await rename();
