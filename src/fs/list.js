import fs from "node:fs";

import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const pathToFolderToListFiles = path.join(__dirname, "..", "fs", "files");

  if (!fs.existsSync(pathToFolderToListFiles)) {
    throw new Error("FS operation failed");
  }

  try {
    const fileList = await fs.promises.readdir(pathToFolderToListFiles);
    for (const file of fileList) console.log(file);
  } catch (err) {
    console.error(err);
  }
};

await list();
