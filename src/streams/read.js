import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = __dirname + "/files/fileToRead.txt";
  const readableStream = fs.createReadStream(filePath, "utf8");

  readableStream.on("data", (data) => {
    process.stdout.write(data);
  });
};

read();
