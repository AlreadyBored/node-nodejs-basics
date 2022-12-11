import path from "path";
import { readFile } from "fs/promises";
import { createHash } from "crypto";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const filePath = path.resolve(
  __dirname,
  "./files",
  "fileToCalculateHashFor.txt"
);

const calculateHash = async () => {
  const content = await readFile(filePath);
  const encodedData = createHash("sha256").update(content).digest("hex");

  console.log(encodedData);
};

await calculateHash();
