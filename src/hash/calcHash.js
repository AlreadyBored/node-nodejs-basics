import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  const readableStream = fs.createReadStream(filePath);

  const hash = crypto.createHash("sha256");

  await new Promise((resolve, reject) => {
    readableStream.on("error", reject);
    hash.on("error", reject);

    readableStream.on("end", () => {
      const digest = hash.digest("hex");
      console.log(digest);
      resolve();
    });

    readableStream.on("data", (chunk) => {
      hash.update(chunk);
    });
  });
};

await calculateHash();
