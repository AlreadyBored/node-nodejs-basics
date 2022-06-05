import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async () => {
  const folderToRead = path.join(__dirname, "files");

  try {
    const list = await fs.readdir(folderToRead);
    console.log(list);
  } catch (error) {
    if ((error.code = "ENOENT")) throw Error("FS operation failed");
    throw Error(error);
  }
};

await list();
