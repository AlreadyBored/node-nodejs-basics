// implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex using Streams API

import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  const hash = crypto.createHash("sha256");
  const fileStream = fs.createReadStream(filePath);

  fileStream.on("error", (err) => {
    console.error("Error reading the file:", err);
    process.exit(1);
  });

  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  fileStream.on("end", () => {
    const hashResult = hash.digest("hex");
    console.log(hashResult);
  });
};

await calculateHash();
