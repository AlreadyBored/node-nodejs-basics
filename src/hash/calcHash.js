import fs from "fs";
import crypto from "crypto";
import path from "path";

const __dirname = path.resolve();

const calculateHash = async () => {
  // Write your code here
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  const hash = crypto.createHash("sha256");

  const fileStream = fs.createReadStream(filePath);

  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  fileStream.on("end", () => {
    const result = hash.digest("hex");
    console.log(result);
  });

  fileStream.on("error", (error) => {
    console.error("Error reading file:", error);
  });
};

await calculateHash();
