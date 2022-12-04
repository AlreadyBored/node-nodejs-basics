import fs from "fs/promises";
import crypto from "crypto";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async (filePath) => {
  try {
    const fileBuffer = await fs.readFile(filePath);
    const hashSum = await crypto.createHash("sha256");
    hashSum.update(fileBuffer);
    const hex = hashSum.digest("hex");
    console.log(hex);
  } catch (err) {
    throw new Error("Calculate hash has failed");
  }
};

await calculateHash(pathToFile);