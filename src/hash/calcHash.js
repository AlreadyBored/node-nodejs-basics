import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

// calcHash.js - implement function that calculates SHA256 hash
// for file fileToCalculateHashFor.txt and logs it into console as hex

const calculateHash = async () => {
  // Write your code here

  try {
    const data = await fs.readFile(
      path.resolve(
        process.cwd(),
        "src",
        "hash",
        "files",
        "fileToCalculateHashFor.txt"
      )
    );

    const hash = crypto.createHash("sha256");

    hash.update(data);

    console.log(hash.copy().digest("hex"));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await calculateHash();
