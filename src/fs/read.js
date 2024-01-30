import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  try {
    const result = await fs.readFile(
      join(__dirname, "files", "fileToRead.txt"),
      {
        encoding: "utf8",
      }
    );
    console.log(result);
  } catch (error) {
    console.error(new Error("FS operation failed"));
  }
};

await read();
