import { createHash } from "crypto";
import { createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const calcHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  const hash = createHash("sha256");
  const stream = createReadStream(filePath);

  stream.on("error", () => {
    console.error("FS operation failed");
  });

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });
};

await calcHash();
