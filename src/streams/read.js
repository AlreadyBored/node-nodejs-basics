import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
  // Write your code here

  const filePath = path.resolve(__dirname, "files", "fileToRead.txt");
  const stream = fs.createReadStream(filePath, { encoding: "utf-8" });

  stream
    .on("data", (chunk) => {
      process.stdout.write(chunk);
    })
    .on("error", (error) => {
      process.stdout.write(error);
    })
    .on("end", () => {
      stream.destroy();
    });
};

read();
