import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import {createHash} from "crypto";

const calculateHash = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  const filePath = path.join(folderPath, "fileToCalculateHashFor.txt");
  const hash = createHash("sha256");
  const readStream = fs.createReadStream(filePath, "utf8");
  readStream
    .on("data", (chunk) => {
      hash.update(chunk);
    })
    .on("end", () => {
      console.log(hash.digest("hex"));
    })
    .on("error", (err) => {
      throw new Error(err.message);
    });
};

// speaker solution v2:

const calculateHash2 = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  const filePath = path.join(folderPath, "fileToCalculateHashFor.txt");
  const hash = createHash("sha256");
  const readStream = fs.createReadStream(filePath, "utf8");
  readStream
    .on("data", (chunk) => {
      hash.update(chunk);
    })
    .on("end", () => {
      console.log(hash.digest("hex"));
    })
    .on("error", (err) => {
      throw new Error(err.message);
    });
};

await calculateHash();
