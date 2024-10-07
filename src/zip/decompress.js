import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createGunzip } from "zlib";
import fs, { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
const decompress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourcePath = path.join(__dirname, "files", "archive.gz");
  const destinationPath = path.join(__dirname, "files", "fileToCompress.txt");
  const gunzip = createGunzip();
  const sourceStream = createReadStream(sourcePath);
  const destinationStream = createWriteStream(destinationPath);
  const pipelinePromise = promisify(pipeline);
  await pipelinePromise(sourceStream, gunzip, destinationStream);
  fs.unlinkSync(sourcePath);
};

await decompress();
