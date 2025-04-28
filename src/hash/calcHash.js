import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const calculateHash = async () => {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, "./files/fileToCalculateHashFor.txt");

    const hash = createHash("sha256");
    const stream = createReadStream(filePath);

    return new Promise((resolve, reject) => {
      stream
        .on("data", (chunk) => {
          hash.update(chunk);
        })
        .on("end", () => {
          const hexHash = hash.digest("hex");
          console.log(`SHA256 hash: ${hexHash}`);
          resolve(hexHash);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

await calculateHash();
