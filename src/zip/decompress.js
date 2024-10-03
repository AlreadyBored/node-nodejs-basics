import { getFilesFolderPath } from "../utils.js";
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';

const decompress = async () => {
  const sourceName = 'archive.gz';
  const destinationName = 'fileToCompress.txt';
  const sourcePath = `${getFilesFolderPath('zip')}/${sourceName}`;
  const destinationPath = `${getFilesFolderPath('zip')}/${destinationName}`;

  const readStream = createReadStream(sourcePath);
  const decompressStream = createUnzip();
  const writeStream = createWriteStream(destinationPath);

  await pipeline(
    readStream,
    decompressStream,
    writeStream,
  );
};

await decompress();