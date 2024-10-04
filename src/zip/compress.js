import { createReadStream, createWriteStream, unlink } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { promisify } from "util";
import { pipeline } from "stream";
import { createGzip } from "node:zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pipelineAsync = promisify(pipeline);
const unlinkAsync = promisify(unlink);

const compress = async () => {
  // using Stream API and Zlib comress fileToCompress.txt to new archive.gz

  try {
    const source = createReadStream(`${__dirname}/files/fileToCompress.txt`);
    const sourcePath=`${__dirname}/files/fileToCompress.txt`
    const destination = createWriteStream(`${__dirname}/files/archive.gz`);
    const gzip = createGzip();

    await pipelineAsync(source, gzip, destination);
    await unlinkAsync(sourcePath);
  } catch (error) {
    console.error(error);
  }
};

await compress();
