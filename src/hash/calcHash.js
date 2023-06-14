import { createHash } from "crypto";
import { createReadStream } from "fs";
import { promisify } from "util";

const calculateHash = async () => {
  const fileToCalculate = "./src/hash/files/fileToCalculateHashFor.txt";
  const hash = createHash("sha256");
  const stream = createReadStream(fileToCalculate);

  const streamOnEnd = promisify(stream.on).bind(stream, "end");

  stream.on("data", (data) => {
    hash.update(data);
  });

  await streamOnEnd();
  const fileHash = hash.digest("hex");
  console.log(fileHash);
};

await calculateHash();
