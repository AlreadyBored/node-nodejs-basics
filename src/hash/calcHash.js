import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const file = await fs.readFile(filePath);
  const hash = crypto.createHash("sha256");
  hash.update(file);
  const hashValue = hash.digest("hex");
  console.log(hashValue);
};

await calculateHash();
