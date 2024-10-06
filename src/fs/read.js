import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const read = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const readFile = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const text = await fs.readFile(readFile, { encoding: "utf8" });
    console.log(text);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
