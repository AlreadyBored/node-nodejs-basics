import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";
import fs, { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "util";

const compress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourcePath = path.join(__dirname, "files", "fileToCompress.txt");
  const destinationPath = path.join(__dirname, "files", "archive.gz");
  const gzip = createGzip();
  const sourceStream = createReadStream(sourcePath);
  const destinationStream = createWriteStream(destinationPath);
  const pipelinePromise = promisify(pipeline);
  await pipelinePromise(sourceStream, gzip, destinationStream);
  fs.unlinkSync(sourcePath);
};

await compress();
