import { readFile, access } from "fs/promises";
import { constants } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const dir = path.join(__dirname, "files");
  const filePath = path.join(dir, "fileToRead.txt");

  try {
    await access(filePath, constants.F_OK);
    const content = await readFile(filePath, "utf-8");
    console.log(content);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
