import { createReadStream } from "fs";
import { createHash } from "crypto";

const calculateHash = async () => {
  const filePath = "src/hash/files/fileToCalculateHashFor.txt";
  const hash = createHash("sha256");
  const stream = createReadStream(filePath);
  stream.on("data", (chunk) => {
    hash.update(chunk);
  });
  stream.on("end", () => {
    const hashHex = hash.digest("hex");
    console.log(`SHA256 Hash: ${hashHex}`);
  });

  // Handle stream errors
  stream.on("error", (err) => {
    console.error(`Error reading the file: ${err.message}`);
  });
};

await calculateHash();
