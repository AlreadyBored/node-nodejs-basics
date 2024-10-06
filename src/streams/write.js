import fs from "fs";
import path from "path";
import url from "url";
import { pipeline } from "stream/promises";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const stream = fs.createWriteStream(filePath, { flags: "a" });
  try {
    await pipeline(process.stdin, stream);
  } catch (err) {
    console.error(`There is an error in writing`, err.message);
  }
};

await write();
