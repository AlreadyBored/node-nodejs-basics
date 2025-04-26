import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ERROR_MESSAGE = "FS operation failed";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToRead = "fileToRead.txt";
  const dirPath = path.join(__dirname, "files", fileToRead);

  if (!fs.existsSync(dirPath)) {
    throw new Error(ERROR_MESSAGE);
  }

  const contents = await fs.promises.readFile(dirPath, { encoding: "utf8" });
  console.log(contents);

};

await read();
