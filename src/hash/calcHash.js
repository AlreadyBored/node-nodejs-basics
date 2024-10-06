import * as path from "node:path";
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

const calculateHash = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  const hash = createHash("sha256");

  try {
    const readStream = createReadStream(filePath);
    readStream.on("data", (chunk) => {
      hash.update(chunk);
    });

    readStream.on("end", () => {
      const fileHash = hash.digest("hex");
      console.log("fileHash is -> ", fileHash);
    });

    readStream.on("error", (err) => {
      console.error("Error while reading file:", err);
    });
  } catch (err) {
    console.error("Error while calculating hash:", err);
  }
};

await calculateHash();
