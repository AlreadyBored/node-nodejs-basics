import { fileURLToPath } from "url";
import { dirname } from "path";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
  const writeStream = fs.createWriteStream(
    path.resolve(__dirname, "files/fileToWrite.txt")
  );
  process.stdin.on("data", (data) => {
    writeStream.write(data);
    process.exit();
  });
};

write();
