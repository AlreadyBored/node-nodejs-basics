import fs from "node:fs";
import path from "node:path";
import crypto from "crypto";

const calculateHash = async () => {
  const hash = crypto.createHash("SHA256");
  const filePath = path.join(
    import.meta.dirname + "/files/fileToCalculateHashFor.txt",
  );
  const readStream = fs.createReadStream(filePath);
  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log("\nHash is:", fileHash);
  });
};

await calculateHash();
