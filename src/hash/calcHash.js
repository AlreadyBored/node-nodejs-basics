import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  const fileStream = fs.createReadStream(filePath);

  const hash = crypto.createHash("sha256");

  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  fileStream.on("end", () => {
    const digest = hash.digest("hex");
    console.log(`SHA256 hash: ${digest}`);
  });

  fileStream.on("error", (err) => {
    console.error("FS operation failed", err.message);
  });
};

await calculateHash();
