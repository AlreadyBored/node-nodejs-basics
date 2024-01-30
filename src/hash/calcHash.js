import { createReadStream } from "fs";
import { createHash } from "crypto";

import path, { dirname } from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(basePath, "files/fileToCalculateHashFor.txt");

  const fileStream = createReadStream(filePath);
  const hash = createHash("sha256");

  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  fileStream.on("end", () => {
    const hashResult = hash.digest("hex");
    console.log(hashResult);
  });

  fileStream.on("error", (error) => {
    console.error('Error occurred while reading ' + error.message);
  });
};

await calculateHash();
