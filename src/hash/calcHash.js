import fs from "fs/promises";
import path from "path";
import { createHash } from "crypto";

const pathToFile = path.resolve(
  "src",
  "hash",
  "files",
  "fileToCalculateHashFor.txt"
);

const calculateHash = async () => {
  // Write your code here
  const content = await fs.readFile(pathToFile);
  const hash = createHash("sha256").update(content).digest("hex");
  console.log(hash);
};

await calculateHash();
