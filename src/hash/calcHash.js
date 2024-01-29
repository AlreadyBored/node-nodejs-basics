import { createReadStream } from "fs";
import { createHash } from "crypto";

const calculateHash = async () => {
  const hash = createHash("sha256");
  const filePath = "src/hash/files/fileToCalculateHashFor.txt";
  const fileStream = createReadStream(filePath);
  return new Promise((resolve, reject) => {
    fileStream.on('data', (chunk) => {
      hash.update(chunk);
    });
    fileStream.on('end', () => {
      const hexHash = hash.digest('hex');
      console.log(hexHash);
      resolve(hexHash);
    });
    fileStream.on('error', (error) => {
      reject(error);
    });
  });
};

await calculateHash();