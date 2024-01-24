import { createHash } from "crypto";
import { readFile } from "node:fs/promises";

const calculateHash = async () => {
  try {
    const fileBuffer = await readFile(
      "./src/hash/files/fileToCalculateHashFor.txt"
    );

    const hashSum = createHash("sha256");
    hashSum.update(fileBuffer);

    console.log(hashSum.digest("hex"));
  } catch (e) {
    console.error(e);
  }
};

await calculateHash();
