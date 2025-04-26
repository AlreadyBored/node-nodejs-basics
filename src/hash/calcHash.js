import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
import stream from "node:stream/promises";

const calculateHash = async () => {
  const filePath = path.join(import.meta.dirname, "files", "fileToCalculateHashFor.txt");

  const hash = crypto.createHash("sha256");
  const readStream = fs.createReadStream(filePath);

  try {
    await stream.pipeline(readStream, hash);

    console.log(hash.digest("hex"));
  } catch (error) {
    console.error("Failed to calculate hash:", error);
  }
};

await calculateHash();

