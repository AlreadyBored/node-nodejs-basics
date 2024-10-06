import fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const fileSrc = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const fileData = await fs.readFile(fileSrc, "utf-8");
    console.log(fileData);
  } catch (error) {
    if (error.code == "ENOENT")
      throw new Error(`FS operation failed: src file don't exists`);
    else console.log(error);
  }
};

await read();
