import crypto from "node:crypto";

import path from "path";
import { cp } from "fs/promises";
import { fileURLToPath } from "url";
import { createReadStream } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  const stream = createReadStream(
    path.join(__dirname, "files/fileToCalculateHashFor.txt")
  );

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => console.log(hash.digest("hex")));
};

await calculateHash();
