import { readFileSync } from "fs";
import { createHash } from "crypto";

const calculateHash = async () => {
  // Write your code here
  const filePath = "src/hash/files/fileToCalculateHashFor.txt";

  try {
    const data = readFileSync(filePath);

    const hash = createHash("sha256");

    hash.update(data);

    const hashHex = hash.digest("hex");

    console.log(`SHA256 hash of file '${filePath}':`);
    console.log(hashHex);
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
  }
};

await calculateHash();
