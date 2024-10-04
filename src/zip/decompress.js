import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { promisify } from "util";
import { pipeline } from "stream";
import { createGunzip } from "node:zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pipelineAsync = promisify(pipeline);

const decompress = async () => {
  try {
    const source = createReadStream(`${__dirname}/files/archive.gz`);
    // const sourcePath=`${__dirname}/files/fileToCompress.txt`
    const destination = createWriteStream(
      `${__dirname}/files/fileToCompress.txt`
    );
    const gunzip = createGunzip();

    await pipelineAsync(source, gunzip, destination);
  } catch (error) {
    console.error('First run cpmress.js file',error.message);
  }
};

await decompress();
