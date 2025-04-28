import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRead = join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = createHash("sha256");
  const stream = createReadStream(fileToRead);

  return await new Promise((resolve, reject) => {
    stream.on("error", reject);
    hash.on("error", reject);

    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => {
      console.log(hash.digest("hex"));
      resolve();
    });
  });
};

await calculateHash();
