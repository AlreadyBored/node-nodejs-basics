import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const write = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  const filePath = path.join(folderPath, "fileToWrite.txt");
  const writeStream = fs.createWriteStream(filePath, "utf8");
  process.stdin.pipe(writeStream);

  writeStream.on("error", (error) => {
    console.error(`Error writing to file: ${error.message}`);
  });
};

await write();
