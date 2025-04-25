import { createHash } from "crypto";
import { createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const hashFilePath = path.join(
  __dirname,
  "files",
  "fileToCalculateHashFor.txt"
);
const calculateHash = async () => {
  const hash = createHash("sha256");
  const hashReadStream = createReadStream(hashFilePath);

  hashReadStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  hashReadStream.on("end", () => {
    const result = hash.digest("hex");
    console.log(result);
  });
};

await calculateHash();
