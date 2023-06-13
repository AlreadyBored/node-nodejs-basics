import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { HELPER } from '../fs/modules/helpers.mjs';

const decompress = async () => {
  const origFilePath =
    HELPER.getDirPath(import.meta.url) + '/files/fileToCompress.txt';
  const compressedFilePath =
    HELPER.getDirPath(import.meta.url) + '/files/fileToCompress.txt.gz';
  const gz = createUnzip();

  createReadStream(compressedFilePath)
    .pipe(gz)
    .pipe(createWriteStream(origFilePath));
};

await decompress();
