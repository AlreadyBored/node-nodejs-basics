import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const calculateHash = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(
      __dirname,
      "files",
      "fileToCalculateHashFor.txt"
    );
    const file = await fs.promises.readFile(filePath);
    const hash = crypto.createHash("sha256").update(file);
    const hashValue = hash.digest("hex");
    console.log("SHA256:", hashValue);
  } catch (error) {
    console.error(error.message);
  }
};

await calculateHash();
