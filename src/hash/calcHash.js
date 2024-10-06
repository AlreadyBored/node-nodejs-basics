import { createHash } from "crypto";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");

  const readStream = createReadStream(filePath);
  const hash = createHash("sha256");

  readStream
    .pipe(hash)
    .setEncoding("hex")
    .pipe(process.stdout)
    .on("finish", () => {});
};

await calculateHash();
