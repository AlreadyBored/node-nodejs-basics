import { createWriteStream } from "fs";
import path from "path";

const pathToFile = path.resolve("src", "streams", "files", "fileToWrite.txt");
const writeStream = createWriteStream(pathToFile);
const write = async () => {
  // Write your code here
  process.stdin.pipe(writeStream);
};

await write();
