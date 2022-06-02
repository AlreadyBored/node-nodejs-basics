import crypto from "crypto";
import { readFile } from "fs/promises";

export const calculateHash = async () => {
  // Write your code here
  const fileBuffer = await readFile("files/fileToCalculateHashFor.txt");
  return crypto.createHash("sha256").update(fileBuffer).digest("hex");
};
calculateHash();
