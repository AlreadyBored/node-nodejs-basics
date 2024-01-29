import { createHash } from "node:crypto";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const hash = createHash("sha256");

const calculateHash = async () => {
  try {
    const result = await fs.readFile(
      join(__dirname, "files", "fileToCalculateHashFor.txt"),
      {
        encoding: "utf8",
      }
    );
    console.log(hash.update(result).digest("hex"));
  } catch (error) {
    console.error(new Error("Operation failed"));
  }
};

await calculateHash();
