import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  const readStream = fs.createReadStream(pathToFile);
  const hash = crypto.createHash("sha256");

  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    const hashResult = hash.digest("hex");
    console.log(hashResult);
  });
};

await calculateHash();
