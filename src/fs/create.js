import { writeFile } from "fs/promises";

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const distFolderPath = join(__dirname, "files");
  const filePath = join(distFolderPath, "fresh.txt");

  try {
    await writeFile(filePath, "I am fresh and young", {flag: 'wx'});
  } catch (error) {
    throw "FS operation failed";
  }
};

await create();
