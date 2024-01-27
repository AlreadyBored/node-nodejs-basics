import crypto from "crypto";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import process from "node:process";

const read = async () => {
  // Script file.
  const __filename = fileURLToPath(import.meta.url);
  // Folder of script file.
  const __dirname = path.dirname(__filename);
  // Creates read stream for reading data from file.
  const readStream = fs.createReadStream(
    path.join(__dirname, "files", "fileToRead.txt")
  );
  let data = "";
  // When data will be read, it will be added to data variable.
  readStream.on("data", (chunk) => {
    data += chunk;
  });
  // when data will be read, it will be printed to output stream.(inner method of console.log)
  readStream.on("end", (chunk) => {
    process.stdout.write(data);
  });
  // If there will be an error, it will be printed to console.
  readStream.on("error", (error) =>
    console.log("Error in readStream:", error.message)
  );
};

await read();