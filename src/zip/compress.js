import { fileURLToPath } from "url";
import path from "path";
import { createGzip } from "zlib";
import { pipeline } from "stream";
import { createWriteStream, createReadStream } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compress = async () => {
  // Write your code here

  const filePath = path.join(__dirname, "files", "fileToCompress.txt");
  const filePathGz = path.join(__dirname, "files", "archive.gz");

  const gzip = createGzip();
  const source = createReadStream(filePath);
  const destination = createWriteStream(filePathGz);

  pipeline(source, gzip, destination, (error) => {
    if (error) {
      console.error("An error occurred:", error);
      process.exitCode = 1;
    }
  });
};

compress();
