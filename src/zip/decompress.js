import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { promisify } from "util";
import { pipeline } from 'stream';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const decompress = async () => {
  const inputPath = `${__dirname}/files/archive.gz`;
  const outputPath = `${__dirname}/files/fileToCompress.txt`;

  const do_unzip = async (input, output) => {
    const pipe = promisify(pipeline);
    const gzip = createGunzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output, { encoding: "utf8" });
    await pipe(source, gzip, destination);
  }

  do_unzip(inputPath, outputPath)
    .catch((err) => {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    });
};
