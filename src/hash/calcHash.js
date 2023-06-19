import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const sha256 = createHash("sha256");
  const content = await readFile(
    path.resolve(__dirname, "./files/fileToCalculateHashFor.txt")
  );

  console.log(sha256.update(content).digest("hex"));
};

await calculateHash();
