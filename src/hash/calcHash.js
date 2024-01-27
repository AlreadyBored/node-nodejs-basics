import fs from "fs";
import { createHash } from "node:crypto";

const calculateHash = async () => {
  const path = "files/fileToCalculateHashFor.txt";
  const stream = fs.createReadStream(path);
  stream.on("data", (chunk) =>
    console.log(createHash("sha3-256").update(chunk).digest("hex"))
  );
};

await calculateHash();

//calcHash.js - implement function that calculates SHA256 hash
// for file fileToCalculateHashFor.txt and logs it into console as hex using Streams API
