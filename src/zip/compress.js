import { getFilesFolderPath } from "../utils.js";
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const compress = async () => {
  const sourceName = 'fileToCompress.txt';
  const destinationName = 'archive.gz';
  const sourcePath = `${getFilesFolderPath('zip')}/${sourceName}`;
  const destinationPath = `${getFilesFolderPath('zip')}/${destinationName}`;

  const readStream = createReadStream(sourcePath);
  const compressStream = createGzip();
  const writeStream = createWriteStream(destinationPath);

  await pipeline(
    readStream,
    compressStream,
    writeStream,
  );
};

await compress();