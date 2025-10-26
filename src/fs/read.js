import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  try {
    const fileContent = await fs.readFile(
      path.resolve(__dirname, "files/fileToRead.txt"),
      { encoding: "utf-8" }
    );
    console.log(fileContent);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
