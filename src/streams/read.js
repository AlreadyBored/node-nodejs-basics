import { stdout } from "process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  // Write your code here

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.resolve(__dirname, "files", "fileToRead.txt");

  const readable = fs.createReadStream(filePath);

  readable.on("data", (chunk) => {
    stdout.write(chunk);
  });

  readable.on("end", () => {
    stdout.write("\n");
  });

  readable.on("error", (err) => {
    console.error(err);
  });
};

await read();
