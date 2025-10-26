import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const calculateHash = async () => {
  const filePath = join(
    process.cwd(),
    "src",
    "hash",
    "files",
    "fileToCalculateHashFor.txt"
  );

  const hash = createHash("sha256");
  const stream = createReadStream(filePath);

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });

  stream.on("error", (error) => {
    console.error("Error reading file:", error);
  });
};

await calculateHash();
