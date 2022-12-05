import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const calculateHash = async () => {
  const fileName = "fileToCalculateHashFor.txt";
  const fullPath = path.join(process.cwd(), "src", "hash", "files", fileName);
  const hash = crypto.createHash("sha256");

  const readStream = fs.createReadStream(fullPath);
  readStream.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();
