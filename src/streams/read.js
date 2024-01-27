import fs from "fs";
import { getDirName } from "../utils/utils.js";

const read = async () => {
  const filePath = getDirName(import.meta.url) + "/files/fileToRead.txt";
  const readStream = fs.createReadStream(filePath);

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("error", (error) => {
    console.error("Error:", error);
  });

  readStream.on("end", () => {
    console.log("File content has been read.");
  });
};

await read();
