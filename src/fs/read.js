import fsPromises from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const content = await fsPromises.readFile(src, { encoding: "utf-8" });
    console.log(content);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
