import crypto from "node:crypto";
import fs from "node:fs";

const calculateHash = async () => {
  const path = "./src/hash/files/fileToCalculateHashFor.txt";

  const hash = crypto.createHash("sha256");
  const fileStream = fs.createReadStream(path);

  fileStream.on("error", (err) => console.error(`Error reading file: ${err}`));
  fileStream.pipe(hash);

  hash.on("readable", () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString("hex"));
    }
  });
};

await calculateHash();
