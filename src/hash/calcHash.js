import fs from "node:fs/promises";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  // Write your code here
  try {
    const { createHash } = await import("node:crypto");
    const readSourceFile = await fs.readFile(
      __dirname + "/files/fileToCalculateHashFor.txt",
      "utf8"
    );
    console.log(readSourceFile);
    const hash = createHash("sha256").update(readSourceFile).digest("hex");

    console.log(hash);
  } catch (err) {
    throw err;
  }
};

await calculateHash();
