import { promises as fs } from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  const filePath = "./files/fileToCalculateHashFor.txt";
  const hash = crypto.createHash("sha256");
  const readStream = fs.createReadStream(filePath);

  readStream.pipe(hash).on("finish", () => {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
