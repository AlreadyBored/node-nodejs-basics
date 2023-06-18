import { readFile } from "fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const folderPath = join(__dirname, "files");
  const filePath = join(folderPath, "fileToRead.txt");

  try {
    let contents = await readFile(filePath, { encoding: "utf8" });
    console.log(contents);
  } catch {
    throw "FS operation failed";
  }
};

await read();
