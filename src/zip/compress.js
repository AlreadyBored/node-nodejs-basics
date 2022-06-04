import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcefilePath = path.join(__dirname, "files/fileToCompress.txt");
  const destinationfilePath = path.join(__dirname, "files/archive.gz");
  const gzip = createGzip();
  const source = createReadStream(sourcefilePath);
  const destination = createWriteStream(destinationfilePath);

  try {
    source.pipe(gzip).pipe(destination);
  } catch (err) {
    console.error(err);
  }
};

compress();