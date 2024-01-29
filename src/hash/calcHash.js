import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const subPath = path.join(__dirname, "files");
  const hashSum = crypto.createHash("sha256");
  fs.readFile(path.join(subPath, "fileToCalculateHashFor.txt"), (err, data) => {
    if (err) throw Error(err);
    hashSum.update(data);
    const result = hashSum.digest("hex");
    console.log(result);
    return result;
  });
};

calculateHash();
