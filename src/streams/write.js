import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  // Write your code here

  const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");
  const writeStream = fs.createWriteStream(pathToFile);

  process.stdin.on("data", (data) => {
    writeStream.write(data);
  });
    
};

await write();
