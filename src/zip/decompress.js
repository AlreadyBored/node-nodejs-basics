import { fileURLToPath } from "url";
import path from "path";
import { createUnzip } from "zlib";
import { pipeline } from "stream";
import { createWriteStream, createReadStream } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async () => {
  // Write your code here

  const filePathGz = path.join(__dirname, "files", "archive.gz");
  const filePath = path.join(__dirname, "files", "fileToCompress.txt");

  const gzip = createUnzip();
  const source = createReadStream(filePathGz);
  const destination = createWriteStream(filePath);

  pipeline(source, gzip, destination, (error) => {
    if (error) {
      console.error("An error occurred:", error);
      process.exitCode = 1;
    }
  });
};

decompress();
