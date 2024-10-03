import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import fs from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const fileToRead = `${__dirname}/files/fileToRead.txt`;
  try {
    const readedFile = await fs.readFile(fileToRead, "utf8");
    console.log(readedFile);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await read();
