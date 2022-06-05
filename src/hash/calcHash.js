import crypto from "node:crypto";
import fs from "fs/promises";

export const calculateHash = async () => {
  let file = await fs.readFile("./src/hash/files/fileToCalculateHashFor.txt");
  let hash = crypto.createHash("sha256");
  return hash.update(file).digest("hex");
};

console.log(await calculateHash());