import { createHash } from "crypto";
import { createReadStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const calculateHash = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathToFile = path.join(
    __dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );
  const stream = createReadStream(pathToFile);
  const hash = createHash("sha256");
  stream.on("data", (data) => {
    hash.update(data);
  });
  stream.on("end", () => {
    const result = hash.digest("hex");
    console.log(`SHA256 Hash: ${result}`);
  });
  stream.on("error", (err) => {
    throw new Error("FS operation failed", err);
  });
};

await calculateHash();
