import { fileURLToPath } from "url";
import path from "path";
import crypto from "crypto";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
  // Write your code here

  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  const fileBuffer = await fs.promises.readFile(filePath);
  const hash = crypto.createHash("sha256").update(fileBuffer).digest("hex");

  console.log(hash);
};

calculateHash();
