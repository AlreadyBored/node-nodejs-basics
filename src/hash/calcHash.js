import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { createHash } from "node:crypto";
import { resolve } from "node:path";
import { fileURLToPath } from "url";

const DIR_NAME = "files";
const FILE_NAME = "fileToCalculateHashFor.txt";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const path = resolve(__filename, "../", DIR_NAME, FILE_NAME);
  const hash = createHash("sha256");
  const input = createReadStream(path);

  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
