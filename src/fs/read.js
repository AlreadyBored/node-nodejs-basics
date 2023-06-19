import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const file = await fs.promises.readFile(sourcePath, "utf-8");
    console.log(file);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed!");
    } else {
      throw err;
    }
  }
};

await read();
