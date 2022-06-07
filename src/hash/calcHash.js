import crypto from "crypto";
import { fileURLToPath } from "url";
import { dirname } from "path";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
  const hash256 = crypto.createHash("sha256");
  const hashFile = fs.readFileSync(
    path.resolve(__dirname, "./files/fileToCalculateHashFor.txt")
  );

  const hex = hash256.update(hashFile).digest("hex");

  return hex;
};

console.log(calculateHash());
