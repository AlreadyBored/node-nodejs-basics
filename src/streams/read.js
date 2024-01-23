import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const modulePath = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(modulePath, "files", "fileToRead.txt");

const read = async () => {
  const readable = fs.createReadStream(filePath);

  readable.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readable.on("error", (err) => {
    console.error(err);
  });
};

await read();
