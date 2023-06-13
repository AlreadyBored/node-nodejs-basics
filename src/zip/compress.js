import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { HELPER } from '../fs/modules/helpers.mjs';

const compress = async () => {
  const origFilePath =
    HELPER.getDirPath(import.meta.url) + '/files/fileToCompress.txt';
  const compressedFilePath =
    HELPER.getDirPath(import.meta.url) + '/files/fileToCompress.txt.gz';
  const gz = createGzip();

  createReadStream(origFilePath)
    .pipe(gz)
    .pipe(createWriteStream(compressedFilePath));
};

await compress();
