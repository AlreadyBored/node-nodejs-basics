import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const decompress = async () => {
    // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  createReadStream(`${__dirname}/files/archive.gz`)
    .pipe(createUnzip())
    .pipe(createWriteStream(`${__dirname}/files/fileToCompress.txt`));
};

await decompress();