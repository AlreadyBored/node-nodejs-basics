import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  // Write your code here
  const file = fs.createReadStream(
    "./src/hash/files/fileToCalculateHashFor.txt"
  );
  const hash = crypto.createHash("sha256");

  file.pipe(hash); // Pipes the file data into the hash object

  console.log(hash.digest("hex")); // transform to hex
};

await calculateHash();
