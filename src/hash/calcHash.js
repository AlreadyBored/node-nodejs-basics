import { createReadStream } from "node:fs";
import path from "node:path";
import { stdout } from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const { createHash } = await import("node:crypto");
  const hash = createHash("sha256");
  const readableStream = createReadStream(src);
  readableStream.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
