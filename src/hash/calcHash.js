import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  const stream = fs.createReadStream(
    "src/hash/files/fileToCalculateHashFor.txt"
  );
  const hash = crypto.createHash("SHA256");

  stream.on("data", (data) => {
    hash.update(data);
  });

  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
