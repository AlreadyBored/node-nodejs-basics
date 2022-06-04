import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

export const compress = async () => {
  const filename = fileURLToPath(import.meta.url);
  const filePath = join(dirname(filename), 'files/fileToCompress.txt');
  const zipFilePath = join(dirname(filePath), 'archive.gz');

  const readStrm = createReadStream(filePath);
  const writeStrm = createWriteStream(zipFilePath);
  const zip = createGzip();

  pipeline(readStrm, zip, writeStrm, (e) =>
    e ? console.error(e.message) : console.log('Done!')
  );
};

compress();
