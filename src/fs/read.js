import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  // Write your code here
  const errMsg = "FS operation failed";

  try {
    const readSourceFile = await fs.readFile(
      __dirname + "/files/fileToRead.txt",
      "utf8"
    );
    console.log(readSourceFile);
  } catch (err) {
    throw new Error(errMsg);
  }
};

await read();
