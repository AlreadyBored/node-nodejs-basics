import crypto from "crypto";
import { readFileSync } from "fs";

export const calculateHash = async () => {
  // Write your code here
  const file = await readFileSync(
    "src/hash/files/fileToCalculateHashFor.txt",
    "utf8"
  );
  const hex = crypto.createHash("sha256").update(file).digest("hex");
  console.log("hex", hex);
  return hex;
};

export default (() => {
  calculateHash();
})();
