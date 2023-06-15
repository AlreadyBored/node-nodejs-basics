import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const compress = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    createReadStream(`${__dirname}/files/fileToCompress.txt`)
      .pipe(createGzip())
      .pipe(createWriteStream(`${__dirname}/files/archive.gz`));
};

await compress();