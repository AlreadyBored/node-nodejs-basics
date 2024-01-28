// implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  try {
    // Try reading the file content
    const content = await fs.readFile(filePath, "utf8");
    console.log(content);
  } catch (error) {
    // If the file does not exist, throw an error
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      // If the error is of another kind, rethrow it
      throw error;
    }
  }
};

await read();
