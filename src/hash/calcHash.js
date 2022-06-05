import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
  const hash = createHash("sha256");
  const file = join(__dirname, "files", "fileToCalculateHashFor.txt");
  const input = createReadStream(file);

  input.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();
