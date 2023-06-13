import { readFile, access } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filesDir = join(__dirname, "files", "fileToRead.txt");

  try {
    await access(filesDir);
    const text = await readFile(filesDir, "utf8");
    console.log(text);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw new Error("FS operation failed");
  }
};

await read();
