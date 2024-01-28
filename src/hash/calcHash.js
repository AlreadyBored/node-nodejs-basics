import { createHash } from "crypto";
import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  try {
    // Write your code here
    const fileData = await readFileWithStream(filePath);

    const hash = createHash("sha256").update(fileData).digest("hex");

    console.log(hash);
  } catch (error) {
    console.log(error);
  }
};

const readFileWithStream = async (filePath) => {
  return new Promise((res, rej) => {
    let chunks = [];
    const stream = fs.createReadStream(filePath, { encoding: "utf8" });

    stream.on("data", (chunk) => {
      chunks.push(chunk);
    });

    stream.on("error", (err) => {
      rej(err);
    });

    stream.on("close", () => {
      res(chunks.join(""));
    });
  });
};

await calculateHash();
