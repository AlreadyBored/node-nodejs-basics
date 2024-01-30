import { createReadStream } from "fs";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import path from "path";



const calculateHash = async () => {
  const filePath = fileURLToPath(import.meta.url);
  const resolvedPath = path.resolve(path.dirname(filePath), fileName);
  const hash = createHash("sha256");

  const readStream = createReadStream(resolvedPath);

  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    const hashResult = hash.digest("hex");
    console.log(`SHA256 hash of ${resolvedPath}: ${hashResult}`);
  });

  readStream.on("error", (error) => {
    if (error.code === "ENOENT") {
      console.error(`Error: File not found at path ${resolvedPath}`);
    } else {
      console.error(`Error reading file: ${error.message}`);
    }
  });
};


const fileName = "./files/fileToCalculateHashFor.txt";
calculateHash(fileName);

const run = async () => {
    await calculateHash(fileName);
  };
  
  run();
