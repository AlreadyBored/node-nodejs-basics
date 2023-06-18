import fs from "fs";
import crypto from "crypto";
import { join, dirname } from "path";

const calculateHash = async () => {
  const currDir = dirname(new URL(import.meta.url).pathname).replace(
    /^\/([A-Za-z]:)/,
    "$1"
  );
  const filePath = join(currDir, "files", "fileToCalculateHashFor.txt");
  try {
    const hash = crypto.createHash("sha256");
    const input = fs.createReadStream(filePath);

    for await (const data of input) {
      hash.update(data);
    }

    const fileHash = hash.digest("hex");
    console.log(`SHA256 Hash: ${fileHash}`);
  } catch (error) {
    console.error("Error", error.message);
  }
  // Write your code here
};

await calculateHash();
