import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, "files/fileToRead.txt");

  try {
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(process.stdout);
  } catch (err) {
    console.error(err);
  }
};

read();
