import fs from "fs";
import crypto from "crypto";

const filePath = new URL(import.meta.url).pathname;

console.log(filePath);

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  const fileStream = fs.createReadStream(filePath);

  fileStream.on("data", (data) => {
    hash.update(data);
  });

  fileStream.on("end", () => {
    const hashResult = hash.digest("hex");
    console.log(`SHA256 Hash of ${filePath}: ${hashResult}`);
  });

  fileStream.on("error", (error) => {
    console.error(`Error reading file: ${error.message}`);
  });
};

await calculateHash();
