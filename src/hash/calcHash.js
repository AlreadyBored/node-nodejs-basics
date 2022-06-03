import { createHash } from "crypto";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files/fileToCalculateHashFor.txt");

  try {
    const content = await readFile(filePath);
    const hex = createHash("sha256").update(content).digest("hex");
    console.log(hex);
  } catch (err) {
    console.error(err);
  }
};

calculateHash();
