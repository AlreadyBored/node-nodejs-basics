import { createReadStream } from "fs";
import { createHash } from "crypto";
import { pipeline } from "stream/promises";

const calculateHash = async () => {
  try {
    const hash = createHash("sha256");

    const fileStream = createReadStream("files/fileToCalculateHashFor.txt");

    await pipeline(fileStream, hash);

    const hashDigest = hash.digest("hex");

    console.log(hashDigest);
  } catch (error) {
    console.error("Error calculating hash:", error.message);
    throw error;
  }
};

await calculateHash();
