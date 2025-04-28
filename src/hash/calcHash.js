import { createReadStream } from "fs";
import { createHash } from "crypto";

const calculateHash = async () => {
  const filePath = "src/hash/files/fileToCalculateHashFor.txt";
  const hash = createHash("sha256");
  const stream = createReadStream(filePath);

  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => {
      hash.update(chunk);
    });

    stream.on("end", () => {
      const hexHash = hash.digest("hex");
      console.log(hexHash);
      resolve();
    });

    stream.on("error", (error) => {
      if (error.code === "ENOENT") {
        reject(new Error("FS operation failed"));
      } else {
        reject(error);
      }
    });
  });
};

await calculateHash();
