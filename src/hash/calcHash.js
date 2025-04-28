import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { join } from "node:path";

const dirname = import.meta.dirname;
const filePath = join(dirname, "files", "fileToCalculateHashFor.txt");
const hash = createHash("sha256");
const stream = createReadStream(filePath);

const calculateHash = async () => {
  stream.on("data", (chunk) => hash.update(chunk));
  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });
  stream.on("error", () => {
    throw new Error("FS operation failed");
  });
};

await calculateHash();
