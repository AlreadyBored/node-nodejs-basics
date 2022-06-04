import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

export const decompress = async () => {
  const filename = fileURLToPath(import.meta.url);
  const zipFilePath = join(dirname(filename), 'files/archive.gz');
  const unZipFilePath = join(dirname(zipFilePath), 'fileToCompress.txt');

  const readStrm = createReadStream(zipFilePath);
  const writeStrm = createWriteStream(unZipFilePath);
  const unZip = createUnzip();

  pipeline(readStrm, unZip, writeStrm, (e) =>
    e ? console.error(e.message) : console.log('Done!')
  );
};

decompress();
