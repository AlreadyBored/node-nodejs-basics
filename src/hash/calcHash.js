import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  const targetPath = new URL(
    "./files/fileToCalculateHashFor.txt",
    import.meta.url
  );
  fs.readFile(targetPath, "utf-8", (err, data) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    const hash = crypto.createHash("sha256");
    hash.update(data);
    const result = hash.digest("hex");
    console.log(result);
  });
};

await calculateHash();
