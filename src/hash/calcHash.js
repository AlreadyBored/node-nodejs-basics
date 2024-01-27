import crypto from "crypto";
import fs from "fs";

const calculateHash = async () => {
  const readable = fs.createReadStream("./src/hash/files/fileToCalculateHashFor.txt");
  const hash = crypto.createHash("sha256");

  readable
    .on("data", (data) => {
      hash.update(data);
    })
    .on("end", () => {
      console.log(hash.digest("hex"));
    });
};

await calculateHash();
