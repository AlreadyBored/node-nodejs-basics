import * as fs from "node:fs/promises";
import { createHash } from "crypto";

const filePath = import.meta.dirname + "/files/fileToCalculateHashFor.txt";
// console.log(filePath);

const calculateHash = async () => {
  try {
    const textToHash = await fs.readFile(filePath, "utf-8");
    const hash = createHash("sha256").update(textToHash).digest("hex");
    console.log(hash);
  } catch (error) {
    console.log(error);
  }
};

await calculateHash();
