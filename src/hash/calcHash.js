import crypto from "crypto";
import fs from "fs";

export const calculateHash = async () => {
  const sha256Hash = crypto.createHash("sha256");
  const fileForHash = fs.readFileSync(
    "./files/fileToCalculateHashFor.txt",
    "utf8"
  );

  const hexConvert = sha256Hash.update(fileForHash).digest("hex");

  return hexConvert;
};

console.log(calculateHash());
