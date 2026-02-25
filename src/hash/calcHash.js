import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  return new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    const stream = createReadStream(filePath);

    stream.pipe(hash);

    hash.on("finish", () => {
      console.log(hash.digest("hex"));
      resolve();
    });

    stream.on("error", () => {
      reject(new Error("FS operation failed"));
    });
  });
};

await calculateHash();
