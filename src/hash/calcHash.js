import path from "path";
import { readFile } from "fs/promises";
import { createHash } from "crypto";
import { getDirName } from "../utils.js";

const __dirname = getDirName(import.meta.url);
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const fileBuffer = await readFile(filePath);

  const hash = createHash("sha256");
  const hex = hash.update(fileBuffer).digest("hex");

  console.log(hex);
};

await calculateHash();
