import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirName = path.join(__dirname, "files");
const filePath = path.join(dirName, "fileToWrite.txt");

const write = async () => {
  const writeStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`Content written to ${filePath}`);
  });

  writeStream.on("error", (error) => {
    console.error(`Error writing file: ${error.message}`);
  });
};

await write();
