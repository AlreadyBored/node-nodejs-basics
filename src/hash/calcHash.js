import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  try {
    const dirName = path.join(__dirname, "files");
    const filePath = path.join(dirName, "fileToCalculateHashFor.txt");
    const fileBuffer = await fs.readFile(filePath);
    const hash = crypto.createHash("sha256").update(fileBuffer).digest("hex");
    console.log(`Hash of ${filePath}: ${hash}`);
  } catch (error) {
    console.error(`Error calculating hash: ${error.message}`);
  }
};

await calculateHash();
