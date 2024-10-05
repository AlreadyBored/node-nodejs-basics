import { createHash } from "crypto";
import { createReadStream } from "fs";

const calculateHash = async () => {
  const readStream = createReadStream("./files/fileToCalculateHashFor.txt");
  const hash = createHash("sha256");

  readStream
    .pipe(hash)
    .setEncoding("hex")
    .pipe(process.stdout)
    .on("finish", () => {});
};

calculateHash();
