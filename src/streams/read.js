import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const read = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  const filePath = path.join(folderPath, "fileToRead.txt");
  const readStream = fs.createReadStream(filePath, "utf8");
  let result = "";
  readStream
    .on("data", (chunk) => {
      result += chunk;
    })
    .on("end", () => {
      process.stdout.write(result);
    })
    .on("error", (err) => {
      throw new Error(err.message);
    });
};

await read();

// read.js - implement function
// that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
