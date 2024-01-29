import { createHash } from "node:crypto";
import fs from "node:fs";

const calculateHash = async () => {
  const hashFile = "./src/hash/files/fileToCalculateHashFor.txt";
  const hash = createHash("sha256");
  const readableStream = fs.createReadStream(hashFile);

  readableStream.on("error", function (error) {
    console.log(`error: ${error.message}`);
  });

  readableStream.on("data", (chunk) => {
    hash.update(chunk);

    console.log(hash.digest("hex"));
  });
};

await calculateHash();
