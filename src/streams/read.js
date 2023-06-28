import { createReadStream } from "fs";
import path from "path";

const pathToFile = path.resolve(
  "src",
  "streams",
  "files",
  "fileToRead.txt"
);
const readStream = createReadStream(pathToFile);

const read = async () => {
  // Write your code here
  readStream.on("data", (chunk) => console.log(chunk.toString()));
};

await read();
