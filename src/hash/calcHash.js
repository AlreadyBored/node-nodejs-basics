import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { makePath } from "../utils/makePath.js";

const path = makePath(import.meta.url, "/files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const buff = readFileSync(path);
  const hash = createHash("sha256").update(buff).digest("hex");

  console.log(hash);
};

await calculateHash();
