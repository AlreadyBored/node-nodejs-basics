import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  // Write your code here
  const pathToFile = path.join(
    __dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );
  const hash = createHash("sha256");
  const readStream = fs.createReadStream(pathToFile);

  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
