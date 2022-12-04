import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
  const hash = createHash("sha256");
  const path = join(__dirname, "files", "/fileToCalculateHashFor.txt");
  const content = await readFile(path, {
    encoding: "utf-8",
  });
  hash.update(content);
  console.log(hash.digest("hex"));
};

await calculateHash();
