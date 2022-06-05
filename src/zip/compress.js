import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { promisify } from 'util';
import { pipeline } from 'stream';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const compress = async () => {
  const inputPath = `${__dirname}/files/fileToCompress.txt`;
  const outputPath = `${__dirname}/files/archive.gz`;

  const do_gzip = async (input, output) => {
    const pipe = promisify(pipeline);
    const gzip = createGzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipe(source, gzip, destination);
  }

  do_gzip(inputPath, outputPath)
    .catch((err) => {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    });
};

compress();
